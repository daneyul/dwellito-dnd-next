import { memo, useContext, useMemo, useCallback } from 'react';
import Subtitle from '../Subtitle/Subtitle';
import style from './singleSelect.module.scss';
import { PageDataContext } from '@/components/Content/Content';
import {
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  EXTERIOR,
  FLOORING,
  INTERIOR,
  INTERIOR_TRIM,
} from '@/utils/constants/names/names';
import { INTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/interiorData';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriorData';
import { FLOORING_OPTIONS } from '@/utils/constants/components/flooringData';
import { INTERIOR_TRIM_OPTIONS } from '@/utils/constants/components/interiorTrimData';

/* eslint-disable @next/next/no-img-element */
const SingleSelect = memo(({ type }) => {
  const {
    exteriorFinish,
    setExteriorFinish,
    interiorFinish,
    setInteriorFinish,
    flooring,
    setFlooring,
    setShow3d,
    showExterior,
    setShowExterior,
    slug,
    setCameraReady,
    interiorFinishPrice,
    supplier,
    interiorTrim,
    setInteriorTrim,
  } = useContext(PageDataContext);

  const isExterior = type === EXTERIOR;
  const isInterior = type === INTERIOR;
  const isInteriorTrim = type === INTERIOR_TRIM;
  const isFlooring = type === FLOORING;

  const handleSelectionClick = useCallback(
    (selection, setState, additionalActions = () => {}) => {
      setState(selection);
      setShow3d(true);
      setShowExterior(isExterior);
      setCameraReady(false);
      additionalActions();
    },
    [setShow3d, setShowExterior, setCameraReady, isExterior]
  );

  const getSelections = useCallback(
    (options, selectedOption, setState, imgPath) => {
      return options
        .filter((option) => option.supplier === supplier)
        .map((selection) => {
          const isSelected = selectedOption === selection;
          const img = selection.hex ? (
            <div className={style.img} style={{ backgroundColor: selection.hex }} />
          ) : (
            <img
              className={style.img}
              src={`/images/${supplier}/exterior-finishes/${selection.img}`}
              alt='thumbnail'
            />
          );
          return (
            <div
              key={selection.name}
              className={isSelected ? style.thumbnailSelected : style.thumbnail}
              onClick={() => handleSelectionClick(selection, setState)}
            >
              {img}
            </div>
          );
        });
    },
    [supplier, handleSelectionClick]
  );

  const getDescription = useCallback(
    (options, selectedOption, priceCallback) => {
      return options.map((selection, index) => {
        const isSelected = selectedOption === selection;
        const price = priceCallback ? priceCallback(selection) : null;

        return (
          isSelected && (
            <div className={style.singleSelDescriptionContainer} key={index}>
              <Subtitle text={selection.name} />
              {price ? <Subtitle text={`+ $${price.toLocaleString()}`} /> :  <Subtitle text={`+ $0`} />}
            </div>
          )
        );
      });
    },
    []
  );

  const exteriorSelections = useMemo(
    () => getSelections(EXTERIOR_FINISH_OPTIONS, exteriorFinish, setExteriorFinish, 'exterior-finishes'),
    [exteriorFinish, getSelections]
  );

  const exteriorDesc = useMemo(
    () => getDescription(EXTERIOR_FINISH_OPTIONS, exteriorFinish, (selection) => selection.price),
    [exteriorFinish, getDescription]
  );

  const interiorSelections = useMemo(
    () => getSelections(INTERIOR_FINISH_OPTIONS, interiorFinish, setInteriorFinish, 'interior-finishes'),
    [interiorFinish, getSelections]
  );

  const interiorDesc = useMemo(
    () => getDescription(INTERIOR_FINISH_OPTIONS, interiorFinish, () => interiorFinishPrice),
    [interiorFinish, interiorFinishPrice, getDescription]
  );

  const interiorTrimSelections = useMemo(
    () => getSelections(INTERIOR_TRIM_OPTIONS, interiorTrim, setInteriorTrim, 'interior-finishes'),
    [interiorTrim, getSelections]
  );

  const interiorTrimDesc = useMemo(
    () => getDescription(INTERIOR_TRIM_OPTIONS, interiorTrim, () => interiorFinishPrice),
    [interiorTrim, interiorFinishPrice, getDescription]
  );

  const flooringSelections = useMemo(
    () => getSelections(FLOORING_OPTIONS, flooring, setFlooring, 'flooring'),
    [flooring, getSelections]
  );

  const flooringDesc = useMemo(
    () =>
      getDescription(FLOORING_OPTIONS, flooring, (selection) => {
        if (slug === CONTAINER_SIZE_10) return selection.price10;
        if (slug === CONTAINER_SIZE_20) return selection.price20;
        if (slug === CONTAINER_SIZE_40) return selection.price40;
      }),
    [flooring, slug, getDescription]
  );

  const Selections = () => {
    if (isExterior) return exteriorSelections;
    if (isInterior) return interiorSelections;
    if (isInteriorTrim) return interiorTrimSelections;
    if (isFlooring) return flooringSelections;
  };

  const Descriptions = () => {
    if (isExterior) return exteriorDesc;
    if (isInterior) return interiorDesc;
    if (isInteriorTrim) return interiorTrimDesc;
    if (isFlooring) return flooringDesc;
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
});

export default SingleSelect;
