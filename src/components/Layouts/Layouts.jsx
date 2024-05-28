/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import style from "./layout.module.scss";
import { PageDataContext } from "../Content/Content";

const Layout = ({ name, imgSrc, isSelected }) => {
  return (
    <div
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
    >
      {name}
      <img src={imgSrc} alt="layout" className={style.layoutImg} />
    </div>
  );
};

const Layouts = () => {
  // const { otherModelsData, modelId, supplierData } = useContext(PageDataContext);
  return (
    <div className={style.container}>
      <div className={style.title}>Choose your design</div>
      {otherModelsData.map((model, index) => {
        const modelName = model["Name"];
        const modelImage = model["Cover"]?.[0]?.url;
        const isSelected = model["id"] === modelId;

        return modelImage ? (
          <a href={`/${supplierData["Slug"]}/${model["Slug"]}`} key={index}>
            <Layout
              name={modelName}
              imgSrc={modelImage}
              isSelected={isSelected}
            />
          </a>
        ) : null;
      })}
    </div>
  );
};

export default Layouts;
