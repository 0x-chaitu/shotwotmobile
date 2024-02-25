const palette = {
  background: '#ADADAD',

  black: '#000000',
  white: 'white',

  grey100: '#C8C8C8',
  gray500: '#4F4F4F',
  grey800: '#2B2B2B',
  grey600: '#484848',
  grey300: '#D1D5DB',

  caption: '#747474',

  primaryBlue: '#3C77F1',
  blue50: '#F0F0FC',
  blue700: '#4748A2',
  blue600: '#5B5CCF',

  primaryBlue700: '#4748A2',
  lightBlue700: '#0088B2',

  transparent: 'transparent',
} as const;

const helpers = {
  BLACK: '#000000',
  BLUE_MARBLE: '#6366F1',
  GRAYISH_WHITE: '#F9FAFB',
  GRAY_GRAPHITE: '#484848',

  GRAYISH_BLUE: '#4B5563',
  GREEN: '#33AD78',
  GENTLE_BREEZE: '#DBEAFE',
  LIGHT_PINK: '#FEE2E2',

  ROYAL_BLUE: '#1D4ED8',
  ROSE: '#F472B6',
  SILVER_GRAY: '#D1D5DB',

  STEEL_BLUE: '#6B7280',
  SPUR_BLUE: '#3C77F1',
  BLUE_GRAY: '#1F2937',
  SKY_BLUE: '#C1D3F8',
  MAROON: '#7F1D1D',
  WHITE: '#FFFFFF',

  BLUEISH_PURPLE: '#9798ED',
  RED: '#D82D21',
} as const;

export const colors = {
  palette,
  helpers,
};
