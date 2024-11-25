import { oneStory12x24 } from './sheds/one-story/12x24';
import { oneStory12x32 } from './sheds/one-story/12x32';
import { oneStory16x24 } from './sheds/one-story/16x24';

export const shedElevationData = [
  ...oneStory12x24,
  ...oneStory12x32,
  ...oneStory16x24,
].map((item) => ({
  width: '100%',
  height: 'auto',
  ...item,
}));
