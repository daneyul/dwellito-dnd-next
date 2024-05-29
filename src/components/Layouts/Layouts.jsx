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
      {name}
      {/* <img src={imgSrc} alt="layout" className={style.layoutImg} /> */}
    </div>
  );
};

const Layouts = () => {
  const { containerData } = useContext(Library2dDataContext);
  const { containerId } = useContext(PageDataContext);

  return (
    <div className={style.container}>
      {containerData.map((container, index) => {
        const containerName = container.name;
        const containerImage = "";
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
