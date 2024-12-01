import { oneStory12x24 } from './sheds/one-story/12x24';
import { oneStory12x32 } from './sheds/one-story/12x32';
import { twoStory16x24 } from './sheds/two-story/16x24';

export const shedElevationData = [
  ...oneStory12x24,
  ...oneStory12x32,
  ...twoStory16x24
].map((item) => ({
  width: '100%',
  height: 'auto',
  ...item,
}));
