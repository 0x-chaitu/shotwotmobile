import React from 'react';
import {SvgXml} from 'react-native-svg';
import {colors} from '../../theme/colors';

const CircleRightIcon = ({
  width = 14,
  height = 14,
  color = colors.palette.theme,
  ...props
}: any) => {
  const xml = `
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66675 6.99998C1.66675 4.05998 4.06008 1.66665 7.00008 1.66665C9.94008 1.66665 12.3334 4.05998 12.3334 6.99998C12.3334 9.93998 9.94008 12.3333 7.00008 12.3333C4.06008 12.3333 1.66675 9.93998 1.66675 6.99998ZM0.333414 6.99998C0.333414 10.68 3.32008 13.6666 7.00008 13.6666C10.6801 13.6666 13.6667 10.68 13.6667 6.99998C13.6667 3.31998 10.6801 0.333313 7.00008 0.333313C3.32008 0.333313 0.333414 3.31998 0.333414 6.99998ZM7.00008 6.33331L4.33341 6.33331V7.66665L7.00008 7.66665V9.66665L9.66675 6.99998L7.00008 4.33331V6.33331Z" fill=${color}/>
</svg>  
`;

  return <SvgXml xml={xml} width={width} height={height} viewBox="0 0 14 14" />;
};

export default CircleRightIcon;
