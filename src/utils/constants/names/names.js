export const COMPONENT_TYPES = {
  DOOR: 'door',
  WINDOW: 'window',
  VENT: 'vent',
  ELECTRICAL: 'electrical',
  PARTITION: 'partition',
};

export const EXTERIOR = 'exterior';
export const INTERIOR = 'interior';
export const INTERIOR_TRIM = 'interior-trim'
export const FLOORING = 'flooring';

const CUSTOM_CUBE_COMPONENTS = {
  PERSONNEL_LHR: `LHR Personnel Door`,
  PERSONNEL_LHR_GLASS: `LHR Personnel Door Window Lite Kit for Door 24inx30in Clear Glass`,
  PERSONNEL_LHR_SECURITY: `LHR Personnel Door Hardware and Lock Box 36in x 80in`,
  PERSONNEL_LHR_SECURITY_GLASS: `LHR Personnel Door w Hardware and Lock Box 36inx 80in Window Lite Kit for Door 24inx30in Clear Glass`,
  PERSONNEL_RHR: `RHR Personnel Door`,
  PERSONNEL_RHR_GLASS: `RHR Personnel Door Window Lite Kit for Door 24inx30in Clear Glass`,
  PERSONNEL_RHR_SECURITY: `RHR Personnel Door Hardware and Lock Box 36in x 80in`,
  PERSONNEL_RHR_SECURITY_GLASS: `RHR Personnel Door w Hardware and Lock Box 36inx 80in Window Lite Kit for Door 24inx30in Clear Glass`,
  DOUBLE_DOOR: 'Double Door',
  SLIDING_GLASS_5: "5' Wide Sliding Glass Door",
  SLIDING_GLASS_6: "6' Wide Sliding Glass Door",
  WINDOW_SECURITY: 'Window w/HD Steel Frame & Hinged Security',
  WINDOW: 'Window w/Basic 16ga Steel Frame-No Security',
  VENT_12: `12"x12" Aluminum Fixed Louver w/HSS Weld Frame 300mmx300mm`,
  VENT_20: `20"x20" Aluminum Fixed Louver w/HSS Weld Frame 500mmx500mm`,
  VENT_24: `24"x24" Aluminum Fixed Louver w/HSS Weld Frame 600mmx600mm`,
  HD_HC_ROLL_UP_6: `Heavy Duty Roll Up Door 6' Wide x 7'4" High`,
  HD_HC_ROLL_UP_8: `Heavy Duty  Roll Up Door 8' Wide x 7'4" High`,
  HD_HC_ROLL_UP_10: `Heavy Duty Roll Up Door 10' Wide x 7'4" High`,
  HD_HC_ROLL_UP_12: `Heavy Duty Roll Up Door 12' Wide x 7'4" High`,
  HD_HC_ROLL_UP_15: `Heavy Duty Roll Up Door 15' Wide x 7'4" High`,
  HD_ST_ROLL_UP_6: `Heavy Duty Roll Up Door 6' Wide x 7'4" ST`,
  HD_ST_ROLL_UP_8: `Heavy Duty  Roll Up Door 8' Wide x 7'4" ST`,
  HD_ST_ROLL_UP_10: `Heavy Duty Roll Up Door 10' Wide x 7'4" ST`,
  HD_ST_ROLL_UP_12: `Heavy Duty Roll Up Door 12' Wide x 7'4" ST`,
  HD_ST_ROLL_UP_15: `Heavy Duty Roll Up Door 15' Wide x 7'4" ST`,
  EC_HC_ROLLUP_6_74: `Economy Roll Up Door - 6ft x (7'4" HC)`,
  EC_HC_ROLLUP_8_74: `Economy Roll Up Door - 8ft x (7'4" HC)`,
  EC_HC_ROLLUP_10_74: `Economy Roll Up Door - 10ft x (7'4" HC)`,
  EC_HC_ROLLUP_12_74: `Economy Roll Up Door - 12ft x (7'4" HC)`,
  EC_HC_ROLLUP_15_74: `Economy Roll Up Door - 15ft x (7'4" HC)`,
  EC_ST_ROLLUP_6_64: `Economy Roll Up Door - 6ft x (6'4" ST)`,
  EC_ST_ROLLUP_8_64: `Economy Roll Up Door - 8ft x (6'4" ST)`,
  EC_ST_ROLLUP_10_64: `Economy Roll Up Door - 10ft x (6'4" ST)`,
  EC_ST_ROLLUP_12_64: `Economy Roll Up Door - 12ft x (6'4" ST)`,
  EC_ST_ROLLUP_15_64: `Economy Roll Up Door - 15ft x (6'4" ST)`,
  ELECTRICAL_PANEL_60_AMP: `60amp Panel with Exterior JB Connection`,
  ELECTRICAL_PANEL_100_AMP: `100amp Panel with Exterior JB Connection`,
  BASEBOARD_HEATER: `2000W Baseboard Heater w/ Thermostat`,
  AIR_CONDITIONER: `6,000BTU Air Conditioner`,
  WORKSHOP_HEATER: `5Kw 240v Fan Forced Workshop Heater Install`,
  ROOF_VENT: `Vent Roof Whirly Bird`,
  OUTLET: `15amp 120V Duplex Receptacle`,
  EXHAUST_FAN: `12" Exhaust Fan with Gravity Damper`,
  WRAP_LIGHT: `4ft LED Wrap Light`,
  PARTITION_ST: 'Partition wall with no interior door - ST',
  PARTITION_HC: 'Partition wall with no interior door - HC',
  PARTITION_DOOR: 'Partition wall with interior door'
};

const AT_AND_S_COMPONENTS = {
  STEEL_DOOR: `Steel Door w. Welded Frame 36x80"`,
  VISION_LITE: `Vision Lite Door w. Welded Frame 36x80"`,
  GLASS_GARAGE_DOOR: `Glass Garage Door 10'`,
  GLIDING_PATIO: `Gliding Patio Door 70.5x79.5`,
  ROLLUP_DOOR_WHITE: `Roll Up Door (White) 7x7'`,
  HORIZONTAL_SLIDER_WINDOW: "Horizontal Slider Window 46x27",
  VERTICAL_SLIDER_WINDOW_46_27: "Vertical Slider Window 46x27",
  VERTICAL_SLIDER_WINDOW_36_53: "Vertical Slider Window 36x53",
  VERTICAL_SLIDER_WINDOW_30_60: "Vertical Slider Window 30x60",
  WINDOW_SECURITY_BARS: "Window with Security Bars 36x36",
  SKYLIGHT: `Skylight 22.5x46.5`,
  LOUVER_VENT: 'Louver Vent',
  ALUMINUM_EXHAUST_SHUTTER: 'Aluminum Exhaust Shutter',
  WHITE_STRIP_LIGHT_FIXTURE: `T8 LED White Strip Light Fixture`,
  EMERGENCY_LIGHT: 'Emergency Light',
  INDOOR_OUTDOOR_FAN: 'Indoor/Outdoor Fan',
  MODERN_FARMHOUSE_OUTDOOR_WALL_SCONCE: 'Modern Farmhouse Outdoor Wall Sconce',
  ADJUSTABLE_SWIVEL_FLOOD_LIGHT: `Adjustable Swivel Flood Light`,
  SECURITY_FLOOD_LIGHT: 'Security Flood Light',
}

export const COMPONENT_NAMES = {
  ...CUSTOM_CUBE_COMPONENTS,
  ...AT_AND_S_COMPONENTS
}

export const ELEVATION_NAMES = {
  FRONT: 'Front',
  BACK: 'Back',
  LEFT: 'Left',
  RIGHT: 'Right',
  FLOOR_PLAN: 'Floor Plan',
};

export const CONTAINER_STANDARD = 'standard';
export const CONTAINER_HIGH = 'high';

export const CONTAINER_SIZE_10 = '10';
export const CONTAINER_SIZE_20 = '20';
export const CONTAINER_SIZE_40 = '40';
export const CONTAINER_SIZE_STR_10 = "TEN";
export const CONTAINER_SIZE_STR_20 = "TWENTY";
export const CONTAINER_SIZE_STR_40 = "FORTY";

export const INTERIOR_FINISH_NAMES = {
  NONE: "None",
  PLYWOOD:
    '½” Cabinet Grade Plywood, Steel Stud Framing, ½” Spray Foam + R12 Batts insulation',
  DRYWALL:
    '½” Pre- Finished Drywall, Steel Stud Framing, ½” Spray Foam + R12 Batts insulation',
  SPRAY_FOAM_CEILING: '1” Spray Foam (Ceiling Only)',
  SPRAY_FOAM_CEILING_WALLS: '1” Spray Foam (Ceiling & Walls)',
  CHARRED_WOOD: 'Charred Wood Ash Gray Pine Shiplap Board',
  MDF_PANEL: 'Authentic Pallet MDF Panel',
  BARN_WOOD: 'Barn Wood Wall Panels',
  LUAN_WALL: 'Luan Wall Panels'
};

export const INTERIOR_TRIM_NAMES= {
  NONE: "None",
  BATTEN_ADOBE_WHITE: `Batten - Adobe White 1x96"`,
  LUAN_BATTEN_OAK: `Luan Batten - Oak 1-½"x8'`,
  LUAN_BATTEN_WHITE: `Luan Batten - White 1-½"x8'`,
}

export const DROPPABLE_LEFT = 'droppable-left';
export const DROPPABLE_RIGHT = 'droppable-right';
export const DROPPABLE_BACK = 'droppable-back';
export const DROPPABLE_MIDDLE = 'droppable-middle';
export const DROPPABLE_PARTITIONS = 'droppable-partitions';
export const DROPPABLE = 'droppable';

export const SUPPLIER_SLUGS = {
  CUSTOM_CUBES: 'custom-cubes',
  AT_AND_S: 'at-and-s',
}

export const SUPPLIER_NAMES = {
  CUSTOM_CUBES: 'Custom Cubes',
  AT_AND_S: 'AT&S',
}

export const findSupplierName = (supplierSlug) => {
  switch (supplierSlug) {
    case SUPPLIER_SLUGS.CUSTOM_CUBES:
      return SUPPLIER_NAMES.CUSTOM_CUBES;
    case SUPPLIER_SLUGS.AT_AND_S:
      return SUPPLIER_NAMES.AT_AND_S;
    default:
      return '';
  }
}