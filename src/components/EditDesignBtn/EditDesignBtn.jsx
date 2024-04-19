import { useContext } from "react";
import ChevronLeftBlue from "../ChevronLeftBlue";
import style from "./editDesignBtn.module.scss"
import { PageDataContext } from "@/app/page";

const EditDesignBtn = () => {
  const { setShowYourOrder } = useContext(PageDataContext);
  return (
    <div className={style.buttonContainer} onClick={setShowYourOrder(false)}>
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