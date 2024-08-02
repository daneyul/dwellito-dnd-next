import { WSecurity, WoSecurity } from './SpecificWindows';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';

export default function Window({ onBoundingBoxChange, component, supplier }) {
  switch (component.name) {
    case COMPONENT_NAMES.WINDOW_SECURITY:
      return (
        <WSecurity
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
          supplier={supplier}
        />
      );
    case COMPONENT_NAMES.WINDOW:
      return (
        <WoSecurity
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
          supplier={supplier}
        />
      );
    default:
      return null;
  }
}
