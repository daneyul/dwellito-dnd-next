import style from "./badge.module.scss";

const Badges = () => {
  return (
    <div className={style.container}>
      <div className={style.badge}>9&apos; width</div>
      <div className={style.badge}>20&apos; length</div>
      <div className={style.badge}>180 sq ft</div>
    </div>
  );
};

export default Badges;
