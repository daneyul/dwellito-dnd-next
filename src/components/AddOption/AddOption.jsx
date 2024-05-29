/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { generateImgSrc, handleAddComponent } from "../../utils/2D/utils";
import style from "./addOption.module.css";
import * as HoverCard from "@radix-ui/react-hover-card";
import { PageDataContext } from "../Content/Content";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

const AddOption = ({ options }) => {
  const { setSelectedComponents, selectedElevation, setHasCollisions, selectedContainer } =
    useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);
  return options.map((item) => {
    return (
      <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
        <HoverCard.Trigger>
          <img
            src={generateImgSrc(item.imgName)}
            alt={item.name}
            onClick={() =>
              handleAddComponent(
                item,
                setSelectedComponents,
                selectedElevation,
                setHasCollisions,
                DIMENSIONS,
                selectedContainer
              )
            }
            className={style.objImg}
          />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className={style.tooltipText} side="top">
            {item.name}
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    );
  });
};

export default AddOption;
