import { useContext } from "react";
import ChevronLeftBlue from "../ChevronLeftBlue";
import style from "./editDesignBtn.module.scss"
import { PageDataContext } from "@/components/Content/Content";

const EditDesignBtn = () => {
  const { toggleOrder } = useContext(PageDataContext);
  return (
    <div className={style.buttonContainer} onClick={toggleOrder}>
        <div className={style.buttonWrapper}>
          <div className={style.img}>
            <ChevronLeftBlue />
          </div>
          <div className={style.buttonText}>Edit Design</div>
        </div>
      </div>
  )
}

export default EditDesignBtn;