
import { v4 as uuid } from 'uuid';
import { doorComponents } from './components/doors/doors';
import { windowComponents } from './components/windows/windows';
import { ventComponents } from './components/vents/vents';
import { partitionComponents } from './components/partitions/partitions';
import { electricalComponents } from './components/electrical/electrical';

export const componentData = [
  ...doorComponents,
  ...windowComponents,
  ...ventComponents,
  ...partitionComponents,
  ...electricalComponents,
].map((item) => ({
  id: uuid(),
  width: '100%',
  height: 'auto',
  isColliding: false,
  isSelected: false,
  isTooClose: false,
  elevation: [],
  ...item,
}));

export const DEFAULT_COMPONENTS = componentData.filter((item) =>
  [].includes(item.name)
);
