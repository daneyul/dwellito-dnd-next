import { oneStory12x24 } from './sheds/one-story/12x24';
import { oneStory12x32 } from './sheds/one-story/12x32';
import { oneStory16x24 } from './sheds/one-story/16x24';
import { twoStory16x24 } from './sheds/two-story/16x24';
import { twoStory20x24 } from './sheds/two-story/20x24';
import { twoStory20x32 } from './sheds/two-story/20x32';


export const shedElevationData = [
  ...oneStory12x24,
  ...oneStory12x32,
  ...oneStory16x24,
  ...twoStory16x24,
  ...twoStory20x24,
  ...twoStory20x32,
].map((item) => ({
  width: '100%',
  height: 'auto',
  ...item,
}));
