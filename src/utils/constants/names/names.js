export const COMPONENT_TYPES = {
  DOOR: 'door',
  WINDOW: 'window',
  VENT: 'vent',
  ELECTRICAL: 'electrical',
  PARTITION: 'partition',
  ROOF: 'roof',
  MISC: 'misc',
};

export const CONFIGURATOR_TYPES = {
  CONTAINER: 'container',
  SHED: 'shed',
};

export const EXTERIOR = 'exterior';
export const INTERIOR = 'interior';
export const INTERIOR_TRIM = 'interior-trim';
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
  PARTITION_DOOR: 'Partition wall with interior door',
};

const AT_AND_S_COMPONENTS = {
  STEEL_DOOR: `Steel Door w. Welded Frame 36x80"`,
  VISION_LITE: `Vision Lite Door w. Welded Frame 36x80"`,
  GLASS_GARAGE_DOOR: `Glass Garage Door 10'`,
  ROLLUP_DOOR_7: `Roll Up Door (White) 7x7'`,
  ROLLUP_DOOR_8: `Roll Up Door (White) 8x8'`,
  HORIZONTAL_SLIDER_WINDOW_46_27: 'Horizontal Slider Window 46x27',
  HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27:
    'Horizontal Slider Window w/ Security 46x27',
  VERTICAL_SLIDER_WINDOW_46_27: 'Vertical Slider Window 46x27',
  HORIZONTAL_SLIDER_WINDOW_47_12: 'Horizontal Slider Window 47x12',
  LOUVER_VENT: 'Louver Vent 15x15',
  ALUMINUM_EXHAUST_SHUTTER: 'Aluminum Exhaust Shutter 36x36',
  WHITE_STRIP_LIGHT_FIXTURE: `T8 LED White Strip Light Fixtures`,
  CAN_LIGHT_FIXTURE: `Can Light Fixtures`,
  EMERGENCY_LIGHT: 'Emergency Light',
  INDOOR_OUTDOOR_FAN: 'Indoor/Outdoor Fan',
  MODERN_FARMHOUSE_OUTDOOR_WALL_SCONCE: 'Modern Farmhouse Outdoor Wall Sconce',
  ADJUSTABLE_SWIVEL_FLOOD_LIGHT: `Adjustable Swivel Flood Light`,
  SECURITY_FLOOD_LIGHT: 'Security Flood Light',
  BUTYL_TAPE: 'Butyl Tape - Gray',
};

export const COMPACT_COTTAGES_COMPONENTS = {
  SLANT_ROOF: 'Slant Roof',
  GABLE_ROOF: 'Gable Roof',
  EXTERIOR_DOOR_1: 'Stairs',
  EXTERIOR_DOOR_PORCH_12: `Porch 12'`,
  EXTERIOR_DOOR_PORCH_16: `Porch 16'`,
  EXTERIOR_DOOR_PORCH_20: `Porch 20'`,
  WINDOW_24_24: '24x24 Window',
  WINDOW_30_36: '30x36 Window',
  WINDOW_48_24: '48x24 Window',
  WINDOW_48_48: '48x48 Window',
  WINDOW_48_60: '48x60 Window',
  WINDOW_60_48: '60x48 Window',
};

export const COMPONENT_NAMES = {
  ...CUSTOM_CUBE_COMPONENTS,
  ...AT_AND_S_COMPONENTS,
  ...COMPACT_COTTAGES_COMPONENTS,
};

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
export const CONTAINER_SIZE_STR_10 = 'TEN';
export const CONTAINER_SIZE_STR_20 = 'TWENTY';
export const CONTAINER_SIZE_STR_40 = 'FORTY';

export const ONE_STORY = 'one-story';
export const TWO_STORY = 'two-story';

export const SHED_ONE_STORY_12x24 = 'one-story-12x24';
export const SHED_ONE_STORY_12x32 = 'one-story-12x32';
export const SHED_ONE_STORY_16x24 = 'one-story-16x24';
export const SHED_TWO_STORY_16x24 = 'two-story-16x24';
export const SHED_TWO_STORY_20x24 = 'two-story-20x24';
export const SHED_TWO_STORY_20x32 = 'two-story-20x32';

export const STUDIO = 'Studio';
export const ONE_BEDROOM = 'One Bedroom';
export const TWO_BEDROOM = 'Two Bedroom';

export const SHED_12x24 = '12x24';
export const SHED_12x32 = '12x32';
export const SHED_16x24 = '16x24';
export const SHED_20x24 = '20x24';
export const SHED_20x32 = '20x32';

export const INTERIOR_FINISH_NAMES = {
  NONE: 'None',
  PLYWOOD:
    '½” Cabinet Grade Plywood, Steel Stud Framing, ½” Spray Foam + R12 Batts insulation',
  DRYWALL:
    '½” Pre- Finished Drywall, Steel Stud Framing, ½” Spray Foam + R12 Batts insulation',
  SPRAY_FOAM_CEILING: '1” Spray Foam (Ceiling Only)',
  SPRAY_FOAM_CEILING_WALLS: '1” Spray Foam (Ceiling & Walls)',
  WHITE_SHIPLAP: 'White Shiplap',
  LUAN_WALL: 'Luan Wall Panels',
};

export const INTERIOR_TRIM_NAMES = {
  NONE: 'None',
  BATTEN_ADOBE_WHITE: `Batten - Adobe White 1x96"`,
  LUAN_BATTEN_OAK: `Luan Batten - Oak 1-½"x8'`,
  LUAN_BATTEN_WHITE: `Luan Batten - White 1-½"x8'`,
};

export const DROPPABLE_LEFT = 'droppable-left';
export const DROPPABLE_RIGHT = 'droppable-right';
export const DROPPABLE_BACK = 'droppable-back';
export const DROPPABLE_FRONT = 'droppable-front';
export const DROPPABLE_MIDDLE = 'droppable-middle';
export const DROPPABLE_PARTITIONS = 'droppable-partitions';
export const DROPPABLE = 'droppable';

export const SUPPLIER_SLUGS = {
  CUSTOM_CUBES: 'custom-cubes',
  AT_AND_S: 'at-and-s',
  COMPACT_COTTAGES: 'compact-cottages',
};

export const SUPPLIER_NAMES = {
  CUSTOM_CUBES: 'Custom Cubes',
  AT_AND_S: 'AT&S',
  COMPACT_COTTAGES: 'Compact Cottages',
};

export const EXTERIORS = {
  BEIGE: 'Beige',
  WHITE: 'White',
  BLUE: 'Blue',
  GREEN: 'Green',
  SLATE_GREY: 'Slate Grey',
  RED: 'Red',
  SAF_RED: 'SAF Red (Corners Only)',
  DARK_BLUE: 'Dark Blue',
  LIGHT_GREY: 'Light Grey',
  GREY: 'Grey',
  BLACK: 'Black',
  STOCK: 'Stock',
  IRON_ORE: 'Iron Ore',
  OYSTER_BAY: 'Oyster Bay',
  SEA_SERPENT: 'Sea Serpent',
  WORLDLY_GRAY: 'Worldly Gray',
  PRIMER: 'Primer',
};

export const FLOORING_NAMES = {
  RUBBER_COIN: 'Rubber Coin',
  ECHO: 'Vinyl Plank Flooring - 12mil Echo',
  TIMBER: 'Vinyl Plank Flooring - 12mil Timber',
  NONE: 'None',
};

export const findSupplierName = (supplierSlug) => {
  switch (supplierSlug) {
    case SUPPLIER_SLUGS.CUSTOM_CUBES:
      return SUPPLIER_NAMES.CUSTOM_CUBES;
    case SUPPLIER_SLUGS.AT_AND_S:
      return SUPPLIER_NAMES.AT_AND_S;
    case SUPPLIER_SLUGS.COMPACT_COTTAGES:
      return SUPPLIER_NAMES.COMPACT_COTTAGES;
    default:
      return '';
  }
};
