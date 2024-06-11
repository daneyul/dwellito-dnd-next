/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import style from "./layout.module.scss";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { PageDataContext } from "../Content/Content";

const Layout = ({ name, imgSrc, isSelected }) => {
  return (
    <div
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
    >
      <div>
        <div style={{ fontWeight: "700" }}>{name}</div>
        <div className={style.price}>$74,000</div>
      </div>
      <img src={imgSrc} alt="layout" className={style.layoutImg} />
    </div>
  );
};

const Layouts = () => {
  const { containerData } = useContext(Library2dDataContext);
  const { containerId, selectedContainer } = useContext(PageDataContext);

  return (
    <div className={style.container}>
      {containerData.map((container, index) => {
        const thumbnail = selectedContainer === "standard" ? container.scThumbnail : container.hcThumbnail;
        const containerName = container.name;
        const containerImage = `/images/elevation/${thumbnail}`;
        const isSelected = container.id === containerId;

        return (
          <a href={`/${container.slug}`} key={index}>
            <Layout
              name={containerName}
              imgSrc={containerImage}
              isSelected={isSelected}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Layouts;
