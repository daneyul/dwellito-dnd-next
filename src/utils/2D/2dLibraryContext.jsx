import React, { createContext } from "react";
import { v4 as uuid } from "uuid";
import { createSnapModifier } from "@dnd-kit/modifiers";

export const Library2dDataContext = createContext();

export const Library2dDataProvider = ({ children }) => {
  // This is the actual container dimensions in inches
  // THREE_D is the 3D model dimensions
  const DIMENSIONS = {
    CONTAINER: {
      TEN: {
        THREE_D: {
          WIDTH: 30.30408388,
          HEIGHT: 25.908830686145798,
          DEPTH: 24.382746504059998
        },
        SIDE: {
          WIDTH: 118,
          HEIGHT: 102,
        },
        FRONT: {
          WIDTH: 96,
          HEIGHT: 102,
        },
      },
      TWENTY: {
        THREE_D: {
          WIDTH: 60.908211699999995,
          HEIGHT: 25.90803080209,
          DEPTH: 24.38394248027
        },
        SIDE: {
          WIDTH: 238.5,
          HEIGHT: 102,
        },
        FRONT: {
          WIDTH: 96,
          HEIGHT: 102,
        },
      },
      FORTY: {
        THREE_D: {
          WIDTH: 121.44539088999998,
          HEIGHT: 25.908075335128004,
          DEPTH: 24.40468565288
        },
        SIDE: {
          WIDTH: 477,
          HEIGHT: 102,
        },
        FRONT: {
          WIDTH: 96,
          HEIGHT: 102,
        },
      },
    },
    DOOR: {
      PERSONNEL: {
        WIDTH: 44,
        HEIGHT: 95,
        POSITION: {
          x: 0,
          y: 7,
        },
      },
      SLIDING_FIVE: {
        WIDTH: 66,
        HEIGHT: 83,
        POSITION: {
          x: 0,
          y: 36,
        },
      },
      SLIDING_SIX: {
        WIDTH: 72,
        HEIGHT: 80,
        POSITION: {
          x: 0,
          y: 45,
        },
      },
      FRENCH: {
        WIDTH: 72,
        HEIGHT: 80,
        POSITION: {
          x: 0,
          y: 45,
        },
      },
      ROLL_UP_6: {
        WIDTH: 80,
        HEIGHT: 95,
        POSITION: {
          x: 0,
          y: 7,
        },
      },
      ROLL_UP_8: {
        WIDTH: 104,
        HEIGHT: 95,
        POSITION: {
          x: 0,
          y: 7,
        },
      },
      ROLL_UP_10: {
        WIDTH: 128,
        HEIGHT: 95,
        POSITION: {
          x: 0,
          y: 7,
        },
      },
      ROLL_UP_12: {
        WIDTH: 152,
        HEIGHT: 95,
        POSITION: {
          x: 0,
          y: 7,
        },
      },
      ROLL_UP_15: {
        WIDTH: 188,
        HEIGHT: 95,
        POSITION: {
          x: 0,
          y: 7,
        },
      },
    },
    WINDOW: {
      WINDOW_WO_SECURITY: {
        WIDTH: 55,
        HEIGHT: 42,
        POSITION: {
          x: 0,
          y: 40,
        },
      },
      WINDOW_SECURITY: {
        WIDTH: 55,
        HEIGHT: 41,
        POSITION: {
          x: 0,
          y: 40,
        },
      },
    },
    VENT: {
      SQ_12: {
        WIDTH: 12,
        HEIGHT: 12,
        POSITION: {
          x: 0,
          y: 24,
        },
      },
      SQ_20: {
        WIDTH: 20,
        HEIGHT: 20,
        POSITION: {
          x: 0,
          y: 24,
        },
      },
      SQ_24: {
        WIDTH: 24,
        HEIGHT: 24,
        POSITION: {
          x: 0,
          y: 24,
        },
      },
    },
    SCALE_FACTOR: 2.5,
    GRID_SIZE: 1,
    BOUNDARIES: {
      x: 17,
    },
  };

  // COMPONENTS
  const COMPONENT_NAMES = {
    PERSONNEL_DOOR_LHR: `Personnel Door w/Hardware and Lock Box 3'x6'8" RLHR`,
    PERSONNEL_DOOR_RHR: `Personnel Door w/Hardware and Lock Box 3'x6'8" RHR`,
    DOUBLE_DOOR: "Double Door",
    SLIDING_GLASS_DOOR_5: "5' Wide Sliding Glass Door",
    SLIDING_GLASS_DOOR_6: "6' Wide Sliding Glass Door",
    FRENCH_DOOR: "5' Wide French Door Full",
    WINDOW_WHITE_SECURITY: "White Window w/HD Steel Frame & Hinged Security",
    WINDOW_WHITE_WO_SECURITY:
      "White Window w/Basic 16ga Steel Frame-No Security",
    VENT_12: `12"x12" Aluminum Fixed Louver w/HSS Weld Frame 300mmx300mm`,
    VENT_20: `20"x20" Aluminum Fixed Louver w/HSS Weld Frame 500mmx500mm`,
    VENT_24: `24"x24" Aluminum Fixed Louver w/HSS Weld Frame 600mmx600mm`,
    ROLL_UP_DOOR_6: `Heavy Duty Roll Up Door 6' Wide x 7'4" High`,
    ROLL_UP_DOOR_8: `Heavy Duty  Roll Up Door 8' Wide x 7'4" High`,
    ROLL_UP_DOOR_10: `Heavy Duty Roll Up Door 10' Wide x 7'4" High`,
    ROLL_UP_DOOR_12: `Heavy Duty Roll Up Door 12' Wide x 7'4" High`,
    ROLL_UP_DOOR_15: `Heavy Duty Roll Up Door 15' Wide x 7'4" High`,
  };

  const COMPONENT_TYPES = {
    DOOR: "door",
    WINDOW: "window",
    VENT: "vent",
  };

  // Grid size is in inches, so 1 would be 1 inch
  const snapToGridModifier = createSnapModifier(DIMENSIONS.GRID_SIZE);

  const containerData = [
    {
      name: `10' Custom Cube`,
      slug: '10-custom-cube',
      id: 1,
      width: `9' width`,
      length: `10' length`,
    },
    {
      name: `20' Custom Cube`,
      slug: '20-custom-cube',
      id: 2,
      width: `9' width`,
      length: `20' length`,
    },
    {
      name: `40' Custom Cube`,
      slug: '40-custom-cube',
      id: 3,
      width: `9' width`,
      length: `40' length`,
    },
  ];

  const componentData = [
    {
      name: COMPONENT_NAMES.PERSONNEL_DOOR_LHR,
      position: {
        x: DIMENSIONS.DOOR.PERSONNEL.POSITION.x,
        y: DIMENSIONS.DOOR.PERSONNEL.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P202-1-102-Personnel_Door_W_LHR_Lock_44in x 95in.svg`,
      desc: COMPONENT_NAMES.PERSONNEL_DOOR_LHR,
      objWidth: DIMENSIONS.DOOR.PERSONNEL.WIDTH,
      objHeight: DIMENSIONS.DOOR.PERSONNEL.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model: "SM_PDoor_LockBoxLHR_01",
    },
    {
      name: COMPONENT_NAMES.PERSONNEL_DOOR_RHR,
      position: {
        x: DIMENSIONS.DOOR.PERSONNEL.POSITION.x,
        y: DIMENSIONS.DOOR.PERSONNEL.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P202-1-101-Personnel_Door_W_RHR_Lock_44in x 95in.svg`,
      desc: COMPONENT_NAMES.PERSONNEL_DOOR_RHR,
      objWidth: DIMENSIONS.DOOR.PERSONNEL.WIDTH,
      objHeight: DIMENSIONS.DOOR.PERSONNEL.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model: "SM_PDoor_LockBoxRHR_01",
    },
    {
      name: COMPONENT_NAMES.SLIDING_GLASS_DOOR_5,
      position: {
        x: DIMENSIONS.DOOR.SLIDING_FIVE.POSITION.x,
        y: DIMENSIONS.DOOR.SLIDING_FIVE.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P202-1-301-Wide_Sliding_Glass_Door_5ft_66in x 83in.svg`,
      desc: COMPONENT_NAMES.SLIDING_GLASS_DOOR_5,
      objWidth: DIMENSIONS.DOOR.SLIDING_FIVE.WIDTH,
      objHeight: DIMENSIONS.DOOR.SLIDING_FIVE.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 3025,
      model: "P202-1-301_Wide_Sliding_Glass_Door_5feet",
    },
    {
      name: COMPONENT_NAMES.SLIDING_GLASS_DOOR_6,
      position: {
        x: DIMENSIONS.DOOR.SLIDING_SIX.POSITION.x,
        y: DIMENSIONS.DOOR.SLIDING_SIX.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P202-1-304-Sliding_Glass_Door_6ft_72in x 80in.svg`,
      desc: COMPONENT_NAMES.SLIDING_GLASS_DOOR_6,
      objWidth: DIMENSIONS.DOOR.SLIDING_SIX.WIDTH,
      objHeight: DIMENSIONS.DOOR.SLIDING_SIX.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 3025,
      model: "SM_Wide_Sliding_Glass_Door_6feet",
    },
    {
      name: COMPONENT_NAMES.FRENCH_DOOR,
      position: {
        x: DIMENSIONS.DOOR.FRENCH.POSITION.x,
        y: DIMENSIONS.DOOR.FRENCH.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P202-1-503-French Door 72in x 80in.svg`,
      desc: COMPONENT_NAMES.FRENCH_DOOR,
      objWidth: DIMENSIONS.DOOR.FRENCH.WIDTH,
      objHeight: DIMENSIONS.DOOR.FRENCH.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 4550,
      model: "P202-1-503_6ft_6ft8in_Height_French Door White_and_Black Frame",
    },
    {
      name: COMPONENT_NAMES.ROLL_UP_DOOR_6,
      position: {
        x: DIMENSIONS.DOOR.ROLL_UP_6.POSITION.x,
        y: DIMENSIONS.DOOR.ROLL_UP_6.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P215-1-15_RollUp_Door_80in x 95in.svg`,
      desc: COMPONENT_NAMES.ROLL_UP_DOOR_6,
      objWidth: DIMENSIONS.DOOR.ROLL_UP_6.WIDTH,
      objHeight: DIMENSIONS.DOOR.ROLL_UP_6.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 2625,
      model: "SM_RollUp_Door_6x74",
    },
    {
      name: COMPONENT_NAMES.ROLL_UP_DOOR_8,
      position: {
        x: DIMENSIONS.DOOR.ROLL_UP_8.POSITION.x,
        y: DIMENSIONS.DOOR.ROLL_UP_8.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P215-1-18_RollUp_Door_104in x 95in.svg`,
      desc: COMPONENT_NAMES.ROLL_UP_DOOR_8,
      objWidth: DIMENSIONS.DOOR.ROLL_UP_8.WIDTH,
      objHeight: DIMENSIONS.DOOR.ROLL_UP_8.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 2625,
      model: "SM_RollUp_Door_8x74",
    },
    {
      name: COMPONENT_NAMES.ROLL_UP_DOOR_10,
      position: {
        x: DIMENSIONS.DOOR.ROLL_UP_10.POSITION.x,
        y: DIMENSIONS.DOOR.ROLL_UP_10.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P215-1-20_RollUp_Door_128in x 95in.svg`,
      desc: COMPONENT_NAMES.ROLL_UP_DOOR_10,
      objWidth: DIMENSIONS.DOOR.ROLL_UP_10.WIDTH,
      objHeight: DIMENSIONS.DOOR.ROLL_UP_10.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 2625,
      model: "SM_RollUp_Door_10x74",
    },
    {
      name: COMPONENT_NAMES.ROLL_UP_DOOR_12,
      position: {
        x: DIMENSIONS.DOOR.ROLL_UP_12.POSITION.x,
        y: DIMENSIONS.DOOR.ROLL_UP_12.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/P215-1-22_RollUp_Door_152in_95in.svg`,
      desc: COMPONENT_NAMES.ROLL_UP_DOOR_12,
      objWidth: DIMENSIONS.DOOR.ROLL_UP_12.WIDTH,
      objHeight: DIMENSIONS.DOOR.ROLL_UP_12.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 2625,
      model: "SM_RollUp_Door_12x74",
    },
    // {
    //   name: COMPONENT_NAMES.ROLL_UP_DOOR_15,
    //   position: {
    //     x: DIMENSIONS.DOOR.ROLL_UP_12.POSITION.x,
    //     y: DIMENSIONS.DOOR.ROLL_UP_12.POSITION.y,
    //   },
    //   imgName: `${COMPONENT_TYPES.DOOR}/P215-1-22_RollUp_Door_152in_95in.svg`,
    //   desc: COMPONENT_NAMES.ROLL_UP_DOOR_12,
    //   objWidth: DIMENSIONS.DOOR.ROLL_UP_12.WIDTH,
    //   objHeight: DIMENSIONS.DOOR.ROLL_UP_12.HEIGHT,
    //   objType: COMPONENT_TYPES.DOOR,
    //   price: 2625,
    //   model: "SM_RollUp_Door_15x74",
    // },
    {
      name: COMPONENT_NAMES.WINDOW_WHITE_SECURITY,
      position: {
        x: DIMENSIONS.WINDOW.WINDOW_SECURITY.POSITION.x,
        y: DIMENSIONS.WINDOW.WINDOW_SECURITY.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.WINDOW}/P201-1-01-White Window wHD Steel Frame & Hinged Security 55in x 41in.svg`,
      desc: COMPONENT_NAMES.WINDOW_WHITE_SECURITY,
      objWidth: DIMENSIONS.WINDOW.WINDOW_SECURITY.WIDTH,
      objHeight: DIMENSIONS.WINDOW.WINDOW_SECURITY.HEIGHT,
      objType: COMPONENT_TYPES.WINDOW,
      price: 1720,
      model: "SM_Window 48x36_Hinged_Security_01",
    },
    {
      name: COMPONENT_NAMES.WINDOW_WHITE_WO_SECURITY,
      position: {
        x: DIMENSIONS.WINDOW.WINDOW_WO_SECURITY.POSITION.x,
        y: DIMENSIONS.WINDOW.WINDOW_WO_SECURITY.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.WINDOW}/P201-1-03-White Window wBasic 16ga Steel Frame-No Security 55in x 42in.svg`,
      desc: COMPONENT_NAMES.WINDOW_WHITE_WO_SECURITY,
      objWidth: DIMENSIONS.WINDOW.WINDOW_WO_SECURITY.WIDTH,
      objHeight: DIMENSIONS.WINDOW.WINDOW_WO_SECURITY.HEIGHT,
      objType: COMPONENT_TYPES.WINDOW,
      price: 1080,
      model: "SM_Window_48x36_01_No_Security",
    },
    {
      name: COMPONENT_NAMES.VENT_12,
      position: {
        x: DIMENSIONS.VENT.SQ_12.POSITION.x,
        y: DIMENSIONS.VENT.SQ_12.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.VENT}/12x12.svg`,
      desc: COMPONENT_NAMES.VENT_12,
      objWidth: DIMENSIONS.VENT.SQ_12.WIDTH,
      objHeight: DIMENSIONS.VENT.SQ_12.HEIGHT,
      objType: COMPONENT_TYPES.VENT,
      price: 440,
      model: "P203-1-304_12in_x_12in Aluminum Fixed Louver 16ga Bolt on Frame",
    },
    {
      name: COMPONENT_NAMES.VENT_20,
      position: {
        x: DIMENSIONS.VENT.SQ_20.POSITION.x,
        y: DIMENSIONS.VENT.SQ_20.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.VENT}/20x20.svg`,
      desc: COMPONENT_NAMES.VENT_20,
      objWidth: DIMENSIONS.VENT.SQ_20.WIDTH,
      objHeight: DIMENSIONS.VENT.SQ_20.HEIGHT,
      objType: COMPONENT_TYPES.VENT,
      price: 490,
      model: "P203-1-305_20in_x_20in Aluminum Fixed Louver 16ga Bolt on Frame",
    },
    {
      name: COMPONENT_NAMES.VENT_24,
      position: {
        x: DIMENSIONS.VENT.SQ_24.POSITION.x,
        y: DIMENSIONS.VENT.SQ_24.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.VENT}/24x24.svg`,
      desc: COMPONENT_NAMES.VENT_24,
      objWidth: DIMENSIONS.VENT.SQ_24.WIDTH,
      objHeight: DIMENSIONS.VENT.SQ_24.HEIGHT,
      objType: COMPONENT_TYPES.VENT,
      price: 540,
      model: "P203-1-306_24in_x_24in Aluminum Fixed Louver 16ga Bolt on Frame",
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
  const ELEVATION_NAMES = {
    FRONT: "Front",
    BACK: "Back",
    LEFT: "Left",
    RIGHT: "Right",
  };

  const elevationData = [
    {
      name: ELEVATION_NAMES.RIGHT,
      homePlan: containerData[0].slug,
      imgName: "elevation/10/right.svg",
      objWidth: DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.TEN.SIDE.HEIGHT,
    },
    {
      name: ELEVATION_NAMES.RIGHT,
      homePlan: containerData[1].slug,
      imgName: "elevation/20/right.svg",
      objWidth: DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.HEIGHT,
    },
    {
      name: ELEVATION_NAMES.RIGHT,
      homePlan: containerData[2].slug,
      imgName: "elevation/40/right.svg",
      objWidth: DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.HEIGHT,
    },
    {
      name: ELEVATION_NAMES.BACK,
      imgName: "elevation/10/back.svg",
      homePlan: containerData[0].slug,
      objWidth: DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.TEN.FRONT.HEIGHT,
    },
    {
      name: ELEVATION_NAMES.BACK,
      imgName: "elevation/20/back.svg",
      homePlan: containerData[1].slug,
      objWidth: DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.TWENTY.FRONT.HEIGHT,
    },
    {
      name: ELEVATION_NAMES.BACK,
      imgName: "elevation/40/back.svg",
      homePlan: containerData[2].slug,
      objWidth: DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.FORTY.FRONT.HEIGHT,
    },
    {
      name: ELEVATION_NAMES.LEFT,
      imgName: "elevation/10/left.svg",
      homePlan: containerData[0].slug,
      objWidth: DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.TEN.SIDE.HEIGHT,
    },
    {
      name: ELEVATION_NAMES.LEFT,
      imgName: "elevation/20/left.svg",
      homePlan: containerData[1].slug,
      objWidth: DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.HEIGHT,
    },
    {
      name: ELEVATION_NAMES.LEFT,
      imgName: "elevation/40/left.svg",
      homePlan: containerData[2].slug,
      objWidth: DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH,
      objHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.HEIGHT,
    }
  ]
    .filter((item) => item.name !== ELEVATION_NAMES.FRONT)
    .map((item) => ({
      id: uuid(),
      width: "100%",
      height: "auto",
      ...item,
    }));

  return (
    <Library2dDataContext.Provider
      value={{
        containerData,
        DIMENSIONS,
        COMPONENT_NAMES,
        COMPONENT_TYPES,
        snapToGridModifier,
        componentData,
        DEFAULT_COMPONENTS,
        elevationData,
        ELEVATION_NAMES
      }}
    >
      {children}
    </Library2dDataContext.Provider>
  );
};
