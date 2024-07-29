import { doorComponents } from './components/doors';
import { electricalComponents } from './components/electrical';
import { partitionComponents } from './components/partitions';
import { ventComponents } from './components/vents';
import { windowComponents } from './components/windows';
import { v4 as uuid } from 'uuid';

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
