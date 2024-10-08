import { useContext, useMemo, useCallback } from 'react';
import Subtitle from '../Subtitle/Subtitle';
import style from './containerSingleSelect.module.scss';
import {
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  EXTERIOR,
  EXTERIORS,
  FLOORING,
  INTERIOR,
  INTERIOR_TRIM,
  SUPPLIER_SLUGS,
} from '@/utils/constants/names/names';
import { INTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/interiors/interiorData';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriors/exteriorData';
import { FLOORING_OPTIONS } from '@/utils/constants/components/flooring/flooringData';
import { INTERIOR_TRIM_OPTIONS } from '@/utils/constants/components/interiors/interiorTrimData';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

/* eslint-disable @next/next/no-img-element */
const ContainerSingleSelect = ({ type }) => {
  const {
    exteriorFinish,
    setExteriorFinish,
    interiorFinish,
    setInteriorFinish,
    flooring,
    setFlooring,
    setShow3d,
    setShowExterior,
    slug,
    setCameraReady,
    interiorFinishPrice,
    supplier,
    interiorTrim,
    setInteriorTrim,
    interiorTrimPrice,
    hasRedCorners,
    setHasRedCorners,
  } = useContext(ContainerDataContext);

  const isExterior = type === EXTERIOR;
  const isInterior = type === INTERIOR;
  const isInteriorTrim = type === INTERIOR_TRIM;
  const isFlooring = type === FLOORING;

  const handleSelectionClick = useCallback(
    (selection, setState, additionalActions = () => {}) => {
      if (isExterior && selection.name === EXTERIORS.SAF_RED) {
        setHasRedCorners(!hasRedCorners);
      } else {
        setState(selection);
      }
      setShow3d(true);
      setShowExterior(isExterior);
      setCameraReady(false);
      additionalActions();
    },
    [setShow3d, setShowExterior, setCameraReady, isExterior, hasRedCorners, setHasRedCorners]
  );

  const getSelections = useCallback(
    (options, selectedOption, setState, imgPath) => {
      return options
        .filter((option) => option.supplier === supplier)
        .map((selection) => {
          const isSelected = (selection.name === EXTERIORS.SAF_RED && hasRedCorners) || selectedOption === selection;
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
    (options, selectedOption, priceCallback) => {

      if (supplier === SUPPLIER_SLUGS.AT_AND_S) return null;

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
    () => getSelections(INTERIOR_TRIM_OPTIONS, interiorTrim, setInteriorTrim, 'interior-trims'),
    [interiorTrim, getSelections]
  );

  const interiorTrimDesc = useMemo(
    () => getDescription(INTERIOR_TRIM_OPTIONS, interiorTrim, () => interiorTrimPrice),
    [interiorTrim, interiorTrimPrice, getDescription]
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
};

export default ContainerSingleSelect;
