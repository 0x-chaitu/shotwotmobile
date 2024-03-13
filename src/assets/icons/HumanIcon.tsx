import React from 'react';
import {SvgXml} from 'react-native-svg';

const HumanIcon = ({
  width = 10,
  height = 18,
  color = '#1C1B1F',
  style,
  ...props
}: any) => {
  const xml = `
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 3.75C3.96425 3.75 3.125 2.91075 3.125 1.875C3.125 0.83925 3.96425 0 5 0C6.03575 0 6.875 0.83925 6.875 1.875C6.875 2.91075 6.03575 3.75 5 3.75Z" fill="#16082B"/>
  <path d="M7.25 17.25H2.75V13.5H1.25L2.75 6C3.0035 5.8095 3.81725 5.25 5 5.25C5.31725 5.25 6.3035 5.2905 7.25 6C7.75025 8.49975 8.24975 11.0003 8.75 13.5H7.25V17.25Z" stroke="#16082B" stroke-width="0.9" stroke-miterlimit="10" stroke-linecap="square"/>
  </svg>    
`;

  return (
    <SvgXml
      xml={xml}
      width={width}
      height={height}
      viewBox="0 0 10 18"
      style={style}
      {...props}
    />
  );
};

export default HumanIcon;
