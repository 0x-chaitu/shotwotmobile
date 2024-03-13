import React from 'react';
import {SvgXml} from 'react-native-svg';

const InActiveBriefIcon = ({
  width = 24,
  height = 24,
  color = '#1C1B1F',
  ...props
}: any) => {
  const xml = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.2159 5.90909H1.125V19H14.2159V5.90909Z" stroke="#212121" stroke-width="0.981818" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M3.57959 3.45454H16.6705V16.5455" stroke="#212121" stroke-width="0.981818" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M6.03418 1H19.1251V14.0909" stroke="#212121" stroke-width="0.981818" stroke-miterlimit="10" stroke-linecap="square"/>
  </svg>
`;

  return <SvgXml xml={xml} width={width} height={height} viewBox="0 0 24 24" />;
};

export default InActiveBriefIcon;
