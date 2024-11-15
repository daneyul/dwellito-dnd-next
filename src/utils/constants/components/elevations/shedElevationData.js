import { oneStory12x24 } from './sheds/one-story/12x24';
import { oneStory12x32 } from './sheds/one-story/12x32';

export const shedElevationData = [
  ...oneStory12x24,
  ...oneStory12x32,
].map((item) => ({
  width: '100%',
  height: 'auto',
  ...item,
}));
