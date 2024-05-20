import { useContext } from "react";
import Subtitle from "../Subtitle/Subtitle";
import style from "./singleSelect.module.scss";
import { PageDataContext } from "@/components/Content/Content";
import { EXTERIOR, INTERIOR_OPTIONS } from "@/utils/3D/library";
import { Utility3dDataContext } from "@/utils/3D/3dLibraryContext";

/* eslint-disable @next/next/no-img-element */
const SingleSelect = ({ type }) => {
  const { color, setColor, interior, setInterior } = useContext(PageDataContext);
  const { colors } = useContext(Utility3dDataContext);

  const isExterior = type === EXTERIOR;
  const exteriorSelections = () => {
    return colors.map((selection) => {
      const isSelected = color === selection.hex;
      const thumbnailColor = selection.hex;

      return (
        <div
          key={selection.hex}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => setColor(selection.hex)}
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

  const exteriorDesc = () => {
    return colors.map((selection, index) => {
      const isSelected = color === selection.hex;

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
          </div>
        )
      );
    });
  };

  const interiorSelections = () => {
    return INTERIOR_OPTIONS.map((selection) => {
      const isSelected = interior === selection ;
      const thumbnailColor = selection.hex;

      return (
        <div
          key={selection.hex}
          className={isSelected ? style.thumbnailSelected : style.thumbnail}
          onClick={() => setInterior(selection)}
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
    return INTERIOR_OPTIONS.map((selection, index) => {
      const isSelected = interior === selection;

      return (
        isSelected && (
          <div className={style.singleSelDescriptionContainer} key={index}>
            <Subtitle text={selection.name} />
          </div>
        )
      );
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "4rem",
      }}
    >
      <div className={style.thumbnailContainer}>
        {isExterior
          ? exteriorSelections()
          : interiorSelections()
          }
        {isExterior
          ? exteriorDesc()
          : interiorDesc()
          }
      </div>
    </div>
  );
};

export default SingleSelect;
