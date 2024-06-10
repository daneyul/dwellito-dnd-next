import style from "./badge.module.scss";
import { PageDataContext } from "../Content/Content";
import { useContext } from "react";

const Badges = () => {
  const { selectedContainer } = useContext(PageDataContext);

  return (
    <div className={style.container}>
      <div className={style.badge}>{selectedContainer.width}</div>
      <div className={style.badge}>{selectedContainer.length}</div>
      <div className={style.badge}>{selectedContainer.sqFootage}</div>
    </div>
  );
};

export default Badges;
