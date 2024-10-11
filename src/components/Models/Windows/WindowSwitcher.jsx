import AtAndS from "./atAndS/componentMap";
import CompactCottages from "./compactCottages/componentMap";
import CustomCubes from "./customCubes/componentMap";


const Window = ({
  onBoundingBoxChange,
  component,
  supplier,
  containerHeightIsStandard,
}) => {
  const componentMap = {
    ...CustomCubes,
    ...AtAndS,
    ...CompactCottages,
  };

  const WindowComponent = componentMap[component.name];

  return WindowComponent ? (
    <WindowComponent
      component={component}
      onBoundingBoxChange={onBoundingBoxChange}
      supplier={supplier}
      containerHeightIsStandard={containerHeightIsStandard}
    />
  ) : null;
};

export default Window;
