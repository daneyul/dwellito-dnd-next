import { v4 as uuid } from "uuid";
import { createSnapModifier } from "@dnd-kit/modifiers";

// This is the actual container dimensions in inches
const DIMENSIONS = {
  CONTAINER: {
    SIDE: {
      WIDTH: 240,
      HEIGHT: 102,
    }, 
    FRONT: {
      WIDTH: 96,
      HEIGHT: 102,
    },
  },
  DOOR: {
    HEIGHT: 95,
    POSITION: {
      x: 0,
      y: 4,
    },
    PERSONNEL: {
      W_SECURITY: {
        WIDTH: 44
      },
      WO_SECURITY: {
        WIDTH: 44
      },
      ACTUAL: {
        WIDTH: 44
      },
    },
    SLIDING: {
      WIDTH: 88,
      ACTUAL: {
        WIDTH: 88
      },
    },
    FRENCH: {
      WIDTH: 88,
      ACTUAL: {
        WIDTH: 88
      },
    },
    ROLL_UP: {
      WIDTH: 102,
      ACTUAL: {
        WIDTH: 102
      },
    },
  },
  WINDOW: {
    WHITE: {
      WIDTH: 48,
      HEIGHT: 36,
      ACTUAL: {
        WIDTH: 48,
        HEIGHT: 36,
      },
      POSITION: {
        x: 0,
        y: 45,
      }
    },
    CLEAR: {
      WIDTH: 24,
      HEIGHT: 30
    },
  },
  VENT: {
    SQ_12: {
      WIDTH: 12,
      HEIGHT: 12,
      POSITION : {
        x: 0,
        y: 20
      }
    },
    SQ_20: {
      WIDTH: 20,
      HEIGHT: 20,
      POSITION : {
        x: 0,
        y: 20
      }
    },
    SQ_24: {
      WIDTH: 24,
      HEIGHT: 24,
      POSITION : {
        x: 0,
        y: 20
      }
    },
  },
  SCALE_FACTOR: 2.5,
  GRID_SIZE: 1,
  BOUNDARIES: {
    x: 17
  }
};

// COMPONENTS
const COMPONENT_NAMES = {
  PERSONNEL_DOOR_WO_SECURITY_LHR: "Personnel Door - without security LHR",
  PERSONNEL_DOOR_LHR: "Personnel Door - LHR",
  PERSONNEL_DOOR_WO_SECURITY_RHR: "Personnel Door - without security RHR",
  PERSONNEL_DOOR_RHR: "Personnel Door - RHR",
  DOUBLE_DOOR: "Double Door",
  SLIDING_GLASS_DOOR: "Sliding Glass",
  FRENCH_DOOR: "French Door",
  WINDOW_WHITE_SECURITY: "White Window w/HD Steel Frame & Hinged Security",
  WINDOW_WHITE_WO_SECURITY: "White Window w/Basic 16ga Steel Frame-No Security",
  VENT_12: "12x12 Vent",
  VENT_20: "20x20 Vent",
  VENT_24: "24x24 Vent",
  ROLL_UP_DOOR: "Roll up door",
};

const COMPONENT_TYPES = {
  DOOR: "door",
  WINDOW: "window",
  VENT: "vent",
};

// Grid size is in inches, so 1 would be 1 inch
const snapToGridModifier = createSnapModifier(DIMENSIONS.GRID_SIZE);

const componentData = [
  {
    name: COMPONENT_NAMES.PERSONNEL_DOOR_WO_SECURITY_LHR,
    partNumber: "P202-1-102",
    position: {
      x: DIMENSIONS.DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/personnel-wo-security-lhr.svg`,
    desc: `Personnel Door 3'x6'8" LHR`,
    objWidth: DIMENSIONS.DOOR.PERSONNEL.WO_SECURITY.WIDTH,
    objHeight: DIMENSIONS.DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    misc: "left",
    price: 2000,
    model: "P202-1-102_Personnel_Door_w_Hardware and Lock Box 3ft_x_6ft8in_LHR.glb"
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_DOOR_LHR,
    partNumber: "P202-1-102",
    position: {
      x: DIMENSIONS.DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/personnel-security-lhr.svg`,
    desc: `Personnel Door w/Hardware and Lock Box 3'x6'8" LHR`,
    objWidth: DIMENSIONS.DOOR.PERSONNEL.W_SECURITY.WIDTH,
    objHeight: DIMENSIONS.DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model: "P202-1-102_Personnel_Door_w_Hardware and Lock Box 3ft_x_6ft8in_LHR.glb"
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_DOOR_WO_SECURITY_RHR,
    partNumber: "P202-1-101",
    position: {
      x: DIMENSIONS.DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/personnel-wo-security-rhr.svg`,
    desc: `Personnel Door 3'x6'8" RHR`,
    objWidth: DIMENSIONS.DOOR.PERSONNEL.WO_SECURITY.WIDTH,
    objHeight: DIMENSIONS.DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model: "P202-1-101_Personnel_Door_w_Hardware and Lock Box 3ft_x_6ft8in_RHR.glb"
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_DOOR_RHR,
    partNumber: "P202-1-101",
    position: {
      x: DIMENSIONS.DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/personnel-security-rhr.svg`,
    desc: `Personnel Door w/Hardware and Lock Box 3'x6'8" RHR`,
    objWidth: DIMENSIONS.DOOR.PERSONNEL.W_SECURITY.WIDTH,
    objHeight: DIMENSIONS.DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model: "P202-1-101_Personnel_Door_w_Hardware and Lock Box 3ft_x_6ft8in_RHR.glb"
  },
  {
    name: COMPONENT_NAMES.SLIDING_GLASS_DOOR,
    partNumber: "P202-1-301",
    position: {
      x: DIMENSIONS.DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/sliding-glass.svg`,
    desc: `5' Wide Sliding Glass Door - White Vinyl`,
    objWidth: DIMENSIONS.DOOR.SLIDING.WIDTH,
    objHeight: DIMENSIONS.DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3025,
    model: "P202-1-304_6ft_Wide_Sliding_Glass_Door_White_Vinyl.glb"
  },
  {
    name: COMPONENT_NAMES.FRENCH_DOOR,
    partNumber: "P202-1-501",
    position: {
      x: DIMENSIONS.DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/french.svg`,
    desc: `5' Wide French Door Full`,
    objWidth: DIMENSIONS.DOOR.FRENCH.WIDTH,
    objHeight: DIMENSIONS.DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 4550,
    model: "P202-1-503_6ft_6ft8in_Height_French Door White_and_Black Frame.glb"
  },
  {
    name: COMPONENT_NAMES.WINDOW_WHITE_SECURITY,
    partNumber: "P201-1-01",
    position: {
      x: DIMENSIONS.WINDOW.WHITE.POSITION.x,
      y: DIMENSIONS.WINDOW.WHITE.POSITION.y
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/window-security.svg`,
    desc: `48" x 36" White Window w/HD Steel Frame & Hinged Security`,
    objWidth: DIMENSIONS.WINDOW.WHITE.WIDTH,
    objHeight: DIMENSIONS.WINDOW.WHITE.HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 1720,
    model: "P201-1-01_48in_w_x_36in_H_White_Window_w_HD_Steel_Frame_&_Hinged_Security.glb"
  },
  {
    name: COMPONENT_NAMES.WINDOW_WHITE_WO_SECURITY,
    partNumber: "P201-1-03",
    position: {
      x: DIMENSIONS.WINDOW.WHITE.POSITION.x,
      y: DIMENSIONS.WINDOW.WHITE.POSITION.y
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/window-wo-security.svg`,
    desc: `48" x 36" White Window w/HD Steel Frame & Hinged Security`,
    objWidth: DIMENSIONS.WINDOW.WHITE.WIDTH,
    objHeight: DIMENSIONS.WINDOW.WHITE.HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 1080,
    model: "P201-1-03_48in_w_x_36in_h_White_Window_with_Basic_16ga_Steel_Frame-No_Security.glb"
  },
  {
    name: COMPONENT_NAMES.VENT_12,
    partNumber: "P203-1-301",
    position: {
      x: DIMENSIONS.VENT.SQ_12.POSITION.x,
      y: DIMENSIONS.VENT.SQ_12.POSITION.y
    },
    imgName: `${COMPONENT_TYPES.VENT}/12x12.svg`,
    desc: `12"x12" Aluminum Fixed Louver w/HSS Weld Frame 300mmx300mm`,
    objWidth: DIMENSIONS.VENT.SQ_12.WIDTH,
    objHeight: DIMENSIONS.VENT.SQ_12.HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 440,
    model: "P203-1-304_12in_x_12in Aluminum Fixed Louver 16ga Bolt on Frame.glb"
  },
  {
    name: COMPONENT_NAMES.VENT_20,
    partNumber: "P203-1-302",
    position: {
      x: DIMENSIONS.VENT.SQ_20.POSITION.x,
      y: DIMENSIONS.VENT.SQ_20.POSITION.y
    },
    imgName: `${COMPONENT_TYPES.VENT}/20x20.svg`,
    desc: `20"x20" Aluminum Fixed Louver w/HSS Weld Frame 500mmx500mm`,
    objWidth: DIMENSIONS.VENT.SQ_20.WIDTH,
    objHeight: DIMENSIONS.VENT.SQ_20.HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 490,
    model: "P203-1-305_20in_x_20in Aluminum Fixed Louver 16ga Bolt on Frame.glb"
  },
  {
    name: COMPONENT_NAMES.VENT_24,
    partNumber: "P203-1-303",
    position: {
      x: DIMENSIONS.VENT.SQ_24.POSITION.x,
      y: DIMENSIONS.VENT.SQ_24.POSITION.y
    },
    imgName: `${COMPONENT_TYPES.VENT}/24x24.svg`,
    desc: `24"x24" Aluminum Fixed Louver w/HSS Weld Frame 600mmx600mm`,
    objWidth: DIMENSIONS.VENT.SQ_24.WIDTH,
    objHeight: DIMENSIONS.VENT.SQ_24.HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 540,
    model: "P203-1-306_24in_x_24in Aluminum Fixed Louver 16ga Bolt on Frame.glb"
  },
  {
    name: COMPONENT_NAMES.ROLL_UP_DOOR,
    partNumber: "P215-45-01",
    position: {
      x: DIMENSIONS.DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/rollup.svg`,
    desc: `Roll Up Door - 6ft`,
    objWidth: DIMENSIONS.DOOR.ROLL_UP.WIDTH,
    objHeight: DIMENSIONS.DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2625,
    model: "P215-1-02_Roll_Up_Door_Front_End_6ft8in_W_X_6ft4in_H_Ext_Int_Lock.glb"
  },
].map((item) => ({
  id: uuid(),
  width: "100%",
  height: "auto",
  isColliding: false,
  isSelected: false,
  isTooClose: false,
  elevation: [],
  ...item,
}));

const DEFAULT_COMPONENTS = componentData.filter((item) =>
  [].includes(item.name)
);

// ELEVATIONS
export const ELEVATION_NAMES = {
  FRONT: "Front Side",
  BACK: "Back Side",
  LEFT: "Left Side",
  RIGHT: "Right Side",
};

const elevationData = [
  {
    name: ELEVATION_NAMES.RIGHT,
    imgName: "elevation/side.svg",
    objWidth: DIMENSIONS.CONTAINER.SIDE.WIDTH,
    objHeight: DIMENSIONS.CONTAINER.SIDE.HEIGHT,
  },
  {
    name: ELEVATION_NAMES.BACK,
    imgName: "elevation/back.svg",
    objWidth: DIMENSIONS.CONTAINER.FRONT.WIDTH,
    objHeight: DIMENSIONS.CONTAINER.FRONT.HEIGHT,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    imgName: "elevation/side.svg",
    objWidth: DIMENSIONS.CONTAINER.SIDE.WIDTH,
    objHeight: DIMENSIONS.CONTAINER.SIDE.HEIGHT,
  },
  {
    name: ELEVATION_NAMES.FRONT,
    imgName: "elevation/front.svg",
    objWidth: DIMENSIONS.CONTAINER.FRONT.WIDTH,
    objHeight: DIMENSIONS.CONTAINER.FRONT.HEIGHT,
  },
].filter(item => item.name !== ELEVATION_NAMES.FRONT)
.map((item) => ({
  id: uuid(),
  width: "100%",
  height: "auto",
  ...item,
}));

const DEFAULT_ELEVATION = elevationData.find(
  (item) => item.name === ELEVATION_NAMES.RIGHT
);

export {
  DIMENSIONS,
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  DEFAULT_COMPONENTS,
  DEFAULT_ELEVATION,
  componentData,
  elevationData,
  snapToGridModifier,
};
