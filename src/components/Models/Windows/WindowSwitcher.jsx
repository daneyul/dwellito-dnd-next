import { WSecurity, WoSecurity } from './SpecificWindows';
import { COMPONENT_NAMES } from '@/utils/constants';

export default function Window({ onBoundingBoxChange, component }) {
  switch (component.name) {
    case COMPONENT_NAMES.WINDOW_SECURITY:
      return (
        <WSecurity
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.WINDOW:
      return (
        <WoSecurity
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    default:
      return null;
  }
}
