import { useContext } from 'react';
import Subtitle from '../Subtitle/Subtitle';
import style from './singleSelect.module.scss';
import { PageDataContext } from '@/components/Content/Content';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';
import { CONTAINER_10_SLUG, CONTAINER_20_SLUG, CONTAINER_40_SLUG, INTERIOR_FINISH_NAMES } from '@/utils/constants/names';

/* eslint-disable @next/next/no-img-element */
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
    setCameraReady
  } = useContext(PageDataContext);
  const {
    EXTERIOR,
    INTERIOR,
    FLOORING,
    INTERIOR_FINISH_OPTIONS,
    EXTERIOR_FINISH_OPTIONS,
    FLOORING_OPTIONS,
  } = useContext(Library3dDataContext);

  const isExterior = type === EXTERIOR;
  const isInterior = type === INTERIOR;
  const isFlooring = type === FLOORING;

  const exteriorSelections = () => {
    return EXTERIOR_FINISH_OPTIONS.map((selection) => {
      const isSelected = exteriorFinish.hex === selection.hex;

      return (
        <div
          key={selection.hex}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => {
            setExteriorFinish(selection);
            setShow3d(true);
            setShowExterior(true);
          }}
        >
          <img
            className={style.img}
            src={`/images/exterior-finishes/${selection.img}`}
            alt='thumbnail'
          />
        </div>
      );
    });
  };

  const exteriorDesc = () => {
    return EXTERIOR_FINISH_OPTIONS.map((selection, index) => {
      const isSelected = exteriorFinish.hex === selection.hex;

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
            <Subtitle text={`+ $${selection.price.toLocaleString()}`} />
          </div>
        )
      );
    });
  };

  const interiorSelections = () => {
    return INTERIOR_FINISH_OPTIONS.map((selection) => {
      const isSelected = interiorFinish === selection;

      return (
        <div
          key={selection.hex}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => {
            setInteriorFinish(selection);
            setShow3d(true);
            setShowExterior(false);
            setCameraReady(false);
          }}
        >
          <img className={style.img} src={`/images/interior-finishes/${selection.img}`} alt='thumbnail' />
        </div>
      );
    });
  };

  const interiorDesc = () => {
    return INTERIOR_FINISH_OPTIONS.map((selection, index) => {
      const isSelected = interiorFinish === selection;
      const interiorFinishPrice = () => {
        if (selection.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING) {
          if (slug === CONTAINER_10_SLUG) {
            return selection.price10
          } else if (slug === CONTAINER_20_SLUG) {
            return selection.price20
          } else if (slug === CONTAINER_40_SLUG) {
            return selection.price40
          }
        } else if (selection.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS) {
          if (slug === CONTAINER_10_SLUG) {
            return selection.price10
          } else if (slug === CONTAINER_20_SLUG) {
            return selection.price20S
          } else if (slug === CONTAINER_40_SLUG) {
            return selection.price40S
          }
        } else {
          return selection.price
        }
      }

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
            <Subtitle text={`+ $${interiorFinishPrice().toLocaleString()}`} />
          </div>
        )
      );
    });
  };

  const flooringSelections = () => {
    return FLOORING_OPTIONS.map((selection, index) => {
      const isSelected = flooring === selection;

      return (
        <div
          key={index}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => {
            setFlooring(selection);
            setShow3d(true);
            setShowExterior(false);
            setCameraReady(false)
          }}
        >
          <img className={style.img} src={`/images/flooring/${selection.img}`} alt='thumbnail' />
        </div>
      );
    });
  };

  const flooringDesc = () => {
    return FLOORING_OPTIONS.map((selection, index) => {
      const flooringPrice = () => {
        if (slug === CONTAINER_10_SLUG) {
          return selection.price10
        } else if (slug === CONTAINER_20_SLUG) {
          return selection.price20
        } else if (slug === CONTAINER_40_SLUG) {
          return selection.price40
        }
      }
      const isSelected = flooring.hex === selection.hex;

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
            <Subtitle text={`+ $${flooringPrice().toLocaleString()}`} />
          </div>
        )
      );
    });
  };

  const Selections = () => {
    if (isExterior) return exteriorSelections();
    if (isInterior) return interiorSelections();
    if (isFlooring) return flooringSelections();
  };

  const Descriptions = () => {
    if (isExterior) return exteriorDesc();
    if (isInterior) return interiorDesc();
    if (isFlooring) return flooringDesc();
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

export default SingleSelect;
