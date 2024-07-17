import ChevronLeftBlack from "../ChevronLeftBlack";
import ChevronRightBlack from "../ChevronRightBlack";
import style from "./arrows.module.scss";

export const LeftArrow = ({ handlePrevious }) => {
  return (
    <button className={style.left} onClick={handlePrevious}>
      <ChevronLeftBlack />
    </button>
  );
};

export const RightArrow = ({ handleNext }) => {
  return (
    <button className={style.right} onClick={handleNext}>
      <ChevronRightBlack />
    </button>
  );
};
