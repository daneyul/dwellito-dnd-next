import { DIMENSIONS } from '../../dimensions/dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, ELEVATION_NAMES, SUPPLIER_SLUGS } from '../../names/names';

export const atAndS = [
  {
    name: COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW,
    position: {
      x: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW.POSITION.x,
      y: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/front-view/horizontal-slider.svg`,
    desc: '',
    objWidth: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW.WIDTH,
    objHeight: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 0,
    model: 'horizontal-slider',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/horizontal-slider.svg`,
  },
  {
    name: COMPONENT_NAMES.VERTICAL_SLIDER_WINDOW_46_27,
    position: {
      x: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.POSITION.x,
      y: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/front-view/vertical-slider-46x27.svg`,
    desc: '',
    objWidth: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.WIDTH,
    objHeight: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 0,
    model: 'vertical-slider-46x27',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/vertical-slider-46x27.svg`,
  },
  {
    name: COMPONENT_NAMES.WINDOW_SECURITY_BARS,
    position: {
      x: DIMENSIONS.WINDOW.WINDOW_SECURITY_BARS.POSITION.x,
      y: DIMENSIONS.WINDOW.WINDOW_SECURITY_BARS.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/front-view/security-bars.svg`,
    desc: '',
    objWidth: DIMENSIONS.WINDOW.WINDOW_SECURITY_BARS.WIDTH,
    objHeight: DIMENSIONS.WINDOW.WINDOW_SECURITY_BARS.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.WINDOW_SECURITY_BARS.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 0,
    model: 'security-bars',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/window.svg`,
  },
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));
