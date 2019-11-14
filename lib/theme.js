import { black, primary, red, ltRed, white } from '../utils/Colors';

export const theme = {
  black,
  primary,
  red,
  ltRed,
  white,

  // Layout Variables
  maxWidth: '1200px',
  headerHeight: '64px',

  // Breakpoints
  mobile: '400px',
  mobileLandscape: '600px',
  tabletsPortrait: '768px',
  netbooks: '960px',
  desktops: '1224px',

  // Radiuses
  cardRadius: '0.75em',
  cardRadiusLG: '1.25em',
  cardRadiusSM: '0.5em',
  cardRadiusXS: '0.25em',

  // Shadows
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  cardShadow: '6px 10px 11px rgba(0,0,0,0.15), 0 5px 5px rgba(0,0,0,0.05)',

  // Transitions
  buttonTransition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
  trans125: 'transition: all 0.125s cubic-bezier(0.645, 0.045, 0.355, 1);',
  trans25: 'transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);'
};

export default theme;
