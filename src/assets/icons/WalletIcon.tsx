import React from 'react';
import {SvgXml} from 'react-native-svg';
import {colors} from '../../theme/colors';

const WalletIcon = ({
  width = 12,
  height = 12,
  color = colors.palette.discountSucc,
  style,
  ...props
}: any) => {
  const xml = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 0H3V2H11V0Z" fill=${color}/>
  <path d="M11.5 3H1.5C1.2245 3 1 2.7755 1 2.5C1 2.2245 1.2245 2 1.5 2H2V1H1.5C0.6715 1 0 1.6715 0 2.5V10C0 11.1045 0.8955 12 2 12H11.5C11.776 12 12 11.776 12 11.5V3.5C12 3.224 11.776 3 11.5 3ZM9 8.5C8.4475 8.5 8 8.0525 8 7.5C8 6.9475 8.4475 6.5 9 6.5C9.5525 6.5 10 6.9475 10 7.5C10 8.0525 9.5525 8.5 9 8.5Z" fill=${color}/>
  </svg>
`;

  return (
    <SvgXml
      xml={xml}
      width={width}
      height={height}
      viewBox="0 0 12 12"
      style={style}
      {...props}
    />
  );
};

export default WalletIcon;
