import { memo, useContext, useMemo } from 'react';
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

  const exteriorSelections = useMemo(() => {
    return EXTERIOR_FINISH_OPTIONS.filter(
      (option) => option.supplier === supplier
    ).map((selection) => {
      const isSelected = exteriorFinish.name === selection.name;
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
          key={selection.hex}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => {
            if (showExterior) {
              setExteriorFinish(selection);
              setShow3d(true);
            } else {
              setExteriorFinish(selection);
              setShow3d(true);
              setShowExterior(true);
              setCameraReady(false);
            }
          }}
        >
          {img}
        </div>
      );
    });
  }, [exteriorFinish, supplier, showExterior]);

  const exteriorDesc = useMemo(() => {
    return EXTERIOR_FINISH_OPTIONS.filter((i) => i.supplier === supplier).map(
      (selection, index) => {
        const isSelected = exteriorFinish.name === selection.name;

        return (
          isSelected && (
            <div className={style.singleSelDescriptionContainer} key={index}>
              <Subtitle text={selection.name} />
              <Subtitle text={`+ $${selection.price.toLocaleString()}`} />
            </div>
          )
        );
      }
    );
  }, [exteriorFinish, supplier]);

  const interiorSelections = useMemo(() => {
    return INTERIOR_FINISH_OPTIONS.filter(
      (option) => option.supplier === supplier
    ).map((selection) => {
      const isSelected = interiorFinish === selection;

      return (
        <div
          key={selection.name}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => {
            setInteriorFinish(selection);
            setShow3d(true);
            setShowExterior(false);
            setCameraReady(false);
          }}
        >
          <img
            className={style.img}
            src={`/images/${supplier}/interior-finishes/${selection.img}`}
            alt='thumbnail'
          />
        </div>
      );
    });
  }, [interiorFinish, supplier]);

  const interiorDesc = useMemo(() => {
    return INTERIOR_FINISH_OPTIONS.map((selection, index) => {
      const isSelected = interiorFinish === selection;

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
            <Subtitle text={`+ $${interiorFinishPrice.toLocaleString()}`} />
          </div>
        )
      );
    });
  }, [interiorFinish, supplier, interiorFinishPrice]);

  const interiorTrimSelections = useMemo(() => {
    return INTERIOR_TRIM_OPTIONS.filter(
      (option) => option.supplier === supplier
    ).map((selection) => {
      const isSelected = interiorTrim === selection;

      return (
        <div
          key={selection.hex}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => {
            setInteriorTrim(selection);
            setShow3d(true);
            setShowExterior(false);
            setCameraReady(false);
          }}
        >
          <img
            className={style.img}
            src={`/images/${supplier}/interior-finishes/${selection.img}`}
            alt='thumbnail'
          />
        </div>
      );
    });
  }, [interiorTrim, supplier]);

  const interiorTrimDesc = useMemo(() => {
    return INTERIOR_TRIM_OPTIONS.map((selection, index) => {
      const isSelected = interiorTrim === selection;

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
            <Subtitle text={`+ $${interiorFinishPrice.toLocaleString()}`} />
          </div>
        )
      );
    });
  }, [interiorTrim, supplier, interiorFinishPrice]);

  const flooringSelections = useMemo(() => {
    return FLOORING_OPTIONS.filter((i) => i.supplier === supplier).map(
      (selection, index) => {
        const isSelected = flooring === selection;

        return (
          <div
            key={index}
            className={isSelected ? style.thumbnailSelected : style.thumbnail}
            onClick={() => {
              setFlooring(selection);
              setShow3d(true);
              setShowExterior(false);
              setCameraReady(false);
            }}
          >
            <img
              className={style.img}
              src={`/images/${supplier}/flooring/${selection.img}`}
              alt='thumbnail'
            />
          </div>
        );
      }
    );
  }, [flooring, supplier]);

  const flooringDesc = useMemo(() => {
    return FLOORING_OPTIONS.filter((i) => i.supplier === supplier).map(
      (selection, index) => {
        const flooringPrice = () => {
          if (slug === CONTAINER_SIZE_10) {
            return selection.price10;
          } else if (slug === CONTAINER_SIZE_20) {
            return selection.price20;
          } else if (slug === CONTAINER_SIZE_40) {
            return selection.price40;
          }
        };
        const isSelected = flooring.name === selection.name;

        return (
          isSelected && (
            <div className={style.singleSelDescriptionContainer} key={index}>
              <Subtitle text={selection.name} />
              <Subtitle text={`+ $${flooringPrice().toLocaleString()}`} />
            </div>
          )
        );
      }
    );
  }, [flooring, supplier, slug]);

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
