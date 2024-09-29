import {
  HorizontalSlider,
  SecurityBars,
  VerticalSlider30x60,
  VerticalSlider36x53,
  VerticalSlider46x27,
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
    [COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW]: HorizontalSlider,
    [COMPONENT_NAMES.VERTICAL_SLIDER_WINDOW_46_27]: VerticalSlider46x27,
    [COMPONENT_NAMES.VERTICAL_SLIDER_WINDOW_36_53]: VerticalSlider36x53,
    [COMPONENT_NAMES.VERTICAL_SLIDER_WINDOW_30_60]: VerticalSlider30x60,
    [COMPONENT_NAMES.WINDOW_SECURITY_BARS]: SecurityBars,
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
