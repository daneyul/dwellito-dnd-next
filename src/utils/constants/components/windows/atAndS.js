import { DIMENSIONS } from '../../dimensions/dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from '../../names/names';

export const atAndS = [
  {
    name: COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_46_27,
    position: {
      x: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_46_27.POSITION.x,
      y: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_46_27.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/front-view/horizontal-slider-46x27.svg`,
    sidebarImg: `${COMPONENT_TYPES.WINDOW}/sidebar/horizontal-slider-46x27.webp`,
    desc: '',
    objWidth: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_46_27.WIDTH,
    objHeight: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_46_27.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_46_27.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 0,
    model: 'horizontal-slider-46x27',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/horizontal-slider-46x27.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/left/horizontal-slider-46x27.svg`,
  },
  {
    name: COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27,
    position: {
      x: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27.POSITION.x,
      y: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/front-view/horizontal-slider-security-46x27.svg`,
    sidebarImg: `${COMPONENT_TYPES.WINDOW}/sidebar/horizontal-slider-security-46x27.webp`,
    desc: '',
    objWidth: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27.WIDTH,
    objHeight: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 0,
    model: 'horizontal-slider-security-46x27',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/horizontal-slider-security-46x27.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/left/horizontal-slider-security-46x27.svg`,
  },
  {
    name: COMPONENT_NAMES.VERTICAL_SLIDER_WINDOW_46_27,
    position: {
      x: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.POSITION.x,
      y: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/front-view/vertical-slider-46x27.svg`,
    sidebarImg: `${COMPONENT_TYPES.WINDOW}/sidebar/vertical-slider-46x27.webp`,
    desc: '',
    objWidth: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.WIDTH,
    objHeight: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.VERTICAL_SLIDER_WINDOW_46_27.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 0,
    model: 'vertical-slider-46x27',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/vertical-slider-46x27.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/left/vertical-slider-46x27.svg`,
  },
  {
    name: COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_47_12,
    position: {
      x: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_47_12.POSITION.x,
      y: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_47_12.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/front-view/horizontal-slider-47x12.svg`,
    sidebarImg: `${COMPONENT_TYPES.WINDOW}/sidebar/horizontal-slider-47x12.webp`,
    desc: '',
    objWidth: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_47_12.WIDTH,
    objHeight: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_47_12.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.HORIZONTAL_SLIDER_WINDOW_47_12.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 0,
    model: 'horizontal-slider-47x12',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/horizontal-slider-47x12.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/left/horizontal-slider-47x12.svg`,
  },
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));
