import {
  HorizontalSlider46x27,
  VerticalSlider46x27,
  HorizontalSlider47x12
} from './atAndS/Windows';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { WoSecurity, WSecurity } from './customCubes/Windows';

const Window = ({
  onBoundingBoxChange,
  component,
  supplier,
  containerHeightIsStandard,
}) => {
  const componentMap = {
    [COMPONENT_NAMES.WINDOW_SECURITY]: WSecurity,
    [COMPONENT_NAMES.WINDOW]: WoSecurity,
    [COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_46_27]: HorizontalSlider46x27,
    [COMPONENT_NAMES.VERTICAL_SLIDER_WINDOW_46_27]: VerticalSlider46x27,
    [COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_47_12]: HorizontalSlider47x12,
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
