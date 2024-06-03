import { useContext } from "react";
import Subtitle from "../Subtitle/Subtitle";
import style from "./singleSelect.module.scss";
import { PageDataContext } from "@/components/Content/Content";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";

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
    setShowExterior
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
            setExteriorFinish(selection)
            setShow3d(true)
            setShowExterior(true)
          }}
        >
          <img className={style.img} src={`/images/CustomContainer/exterior-finishes/${selection.img}`} alt="thumbnail" />
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
            <Subtitle text="+ $100" />
          </div>
        )
      );
    });
  };

  const interiorSelections = () => {
    return INTERIOR_FINISH_OPTIONS.map((selection) => {
      const isSelected = interiorFinish === selection;
      const thumbnailColor = selection.hex;

      return (
        <div
          key={selection.hex}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => {
            setInteriorFinish(selection)
            setShow3d(true)
            setShowExterior(false)
          }}
        >
          <div
            className={style.img}
            style={{
              backgroundColor: thumbnailColor,
            }}
            alt="thumbnail"
          ></div>
        </div>
      );
    });
  };

  const interiorDesc = () => {
    return INTERIOR_FINISH_OPTIONS.map((selection, index) => {
      const isSelected = interiorFinish === selection;

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
            <Subtitle text="+ $100" />
          </div>
        )
      );
    });
  };

  const flooringSelections = () => {
    return FLOORING_OPTIONS.map((selection, index) => {
      const isSelected = flooring === selection;
      const thumbnailColor = selection.hex;

      return (
        <div
          key={index}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => {
            setFlooring(selection)
            setShow3d(true)
            setShowExterior(false)
          }}
        >
          <div
            className={style.img}
            style={{
              backgroundColor: thumbnailColor,
            }}
            alt="thumbnail"
          ></div>
        </div>
      );
    });
  };

  const flooringDesc = () => {
    return FLOORING_OPTIONS.map((selection, index) => {
      const isSelected = flooring.hex === selection.hex;

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
            <Subtitle text="+ $100" />
          </div>
        )
      );
    });
  };

  const Selections = () => {
    if (isExterior) return exteriorSelections();
    if (isInterior) return interiorSelections();
    if (isFlooring) return flooringSelections();
  }

  const Descriptions = () => {
    if (isExterior) return exteriorDesc();
    if (isInterior) return interiorDesc();
    if (isFlooring) return flooringDesc();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
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
