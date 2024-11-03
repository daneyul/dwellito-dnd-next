import { useContext, useMemo, useCallback } from 'react';
import Subtitle from '../Subtitle/Subtitle';
import style from './shedSingleSelect.module.scss';
import { EXTERIOR } from '@/utils/constants/names/names';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriors/exteriorData';

/* eslint-disable @next/next/no-img-element */
const ShedSingleSelect = ({ type }) => {
  const {
    setShow3d,
    setShowExterior,
    setCameraReady,
    supplier,
    exteriorFinish,
    setExteriorFinish
  } = useContext(ShedDataContext);

  const isExterior = type === EXTERIOR;

  const handleSelectionClick = useCallback(
    (selection, setState, additionalActions = () => {}) => {
      if (isExterior) {
        setState(selection);
        setShow3d(true);
        setCameraReady(true);
        additionalActions();
      } else {
        setState(selection);
        setShow3d(true);
        setCameraReady(false);
        additionalActions();
      }
    },
    [setShow3d, setShowExterior, setCameraReady, isExterior]
  );

  const getSelections = useCallback(
    (options, selectedOption, setState, imgPath) => {
      return options
        .filter((option) => option.supplier === supplier)
        .map((selection) => {
          const isSelected = selectedOption === selection;
          return (
            <div
              key={selection.name}
              className={isSelected ? style.thumbnailSelected : style.thumbnail}
              onClick={() => handleSelectionClick(selection, setState)}
            >
              <img
                className={style.img}
                src={`/images/${supplier}/${imgPath}/${selection.img}`}
                alt='thumbnail'
              />
            </div>
          );
        });
    },
    [supplier, handleSelectionClick]
  );

  const getDescription = useCallback(
    (options, selectedOption) => {
      return options.map((selection, index) => {
        const isSelected = selectedOption === selection;

        return (
          isSelected && (
            <div className={style.singleSelDescriptionContainer} key={index}>
              <Subtitle text={selection.name} />
            </div>
          )
        );
      });
    },
    []
  );

  const exteriorSelections = useMemo(
    () =>
      getSelections(
        EXTERIOR_FINISH_OPTIONS,
        exteriorFinish,
        setExteriorFinish,
        'exterior-finishes'
      ),
    [exteriorFinish, getSelections]
  );

  const exteriorDesc = useMemo(
    () =>
      getDescription(
        EXTERIOR_FINISH_OPTIONS,
        exteriorFinish,
        (selection) => selection.price
      ),
    [exteriorFinish, getDescription]
  );

  const Selections = () => {
    if (isExterior) return exteriorSelections;
  };

  const Descriptions = () => {
    if (isExterior) return exteriorDesc;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div className={style.thumbnailContainer}>
        <Selections />
        <Descriptions />
      </div>
    </div>
  );
};

export default ShedSingleSelect;
