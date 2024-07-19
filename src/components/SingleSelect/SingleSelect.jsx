import { useContext, memo, useMemo, useCallback } from 'react';
import Subtitle from '../Subtitle/Subtitle';
import style from './singleSelect.module.scss';
import { PageDataContext } from '@/components/Content/Content';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';
import {
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
  INTERIOR_FINISH_NAMES,
} from '@/utils/constants/names';

const Selections = ({ type, selections, selected, onSelect }) => {
  return selections.map((selection) => {
    const isSelected = selected.hex === selection.hex;
    return (
      <div
        key={selection.hex}
        className={isSelected ? style.thumbnailSelected : style.thumbnail}
        onClick={() => onSelect(selection)}
      >
        <img
          className={style.img}
          src={`/images/${type}/${selection.img}`}
          alt='thumbnail'
        />
      </div>
    );
  });
};

const Descriptions = ({ selections, selected, type, slug }) => {
  const getPrice = (selection) => {
    if (type === 'interior') {
      if (selection.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING) {
        if (slug === CONTAINER_10_SLUG) return selection.price10;
        if (slug === CONTAINER_20_SLUG) return selection.price20;
        if (slug === CONTAINER_40_SLUG) return selection.price40;
      } else if (selection.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS) {
        if (slug === CONTAINER_10_SLUG) return selection.price10;
        if (slug === CONTAINER_20_SLUG) return selection.price20S;
        if (slug === CONTAINER_40_SLUG) return selection.price40S;
      }
    }
    return selection.price;
  };

  return selections.map((selection, index) => {
    const isSelected = selected.hex === selection.hex;
    const price = getPrice(selection);

    return (
      isSelected && (
        <div className={style.singleSelDescriptionContainer} key={index}>
          <Subtitle text={selection.name} />
          {price !== undefined && <Subtitle text={`+ $${price.toLocaleString()}`} />}
        </div>
      )
    );
  });
};

const SingleSelect = ({ type }) => {
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
  } = useContext(PageDataContext);

  const {
    EXTERIOR,
    INTERIOR,
    FLOORING,
    INTERIOR_FINISH_OPTIONS,
    EXTERIOR_FINISH_OPTIONS,
    FLOORING_OPTIONS,
  } = useContext(Library3dDataContext);

  const handleSelect = useCallback((type, selection) => {
    switch (type) {
      case EXTERIOR:
        setExteriorFinish(selection);
        setShow3d(true);
        setShowExterior(true);
        break;
      case INTERIOR:
        setInteriorFinish(selection);
        setShow3d(true);
        setShowExterior(false);
        break;
      case FLOORING:
        setFlooring(selection);
        setShow3d(true);
        setShowExterior(false);
        break;
      default:
        break;
    }
    setCameraReady(false);
  }, [setExteriorFinish, setInteriorFinish, setFlooring, setShow3d, setShowExterior, setCameraReady]);

  const selectionsData = () => {
    switch (type) {
      case EXTERIOR:
        return {
          selections: EXTERIOR_FINISH_OPTIONS,
          selected: exteriorFinish,
          onSelect: (selection) => handleSelect(EXTERIOR, selection),
        };
      case INTERIOR:
        return {
          selections: INTERIOR_FINISH_OPTIONS,
          selected: interiorFinish,
          onSelect: (selection) => handleSelect(INTERIOR, selection),
        };
      case FLOORING:
        return {
          selections: FLOORING_OPTIONS,
          selected: flooring,
          onSelect: (selection) => handleSelect(FLOORING, selection),
        };
      default:
        return { selections: [], selected: null, onSelect: () => {} };
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div className={style.thumbnailContainer}>
        <Selections
          type={type.toLowerCase()}
          selections={selectionsData.selections}
          selected={selectionsData.selected}
          onSelect={selectionsData.onSelect}
        />
        <Descriptions
          selections={selectionsData.selections}
          selected={selectionsData.selected}
          type={type.toLowerCase()}
          slug={slug}
        />
      </div>
    </div>
  );
};

export default memo(SingleSelect);
