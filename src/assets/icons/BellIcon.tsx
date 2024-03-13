import React from 'react';
import {SvgXml} from 'react-native-svg';

const BellIcon = ({width = 24, height = 24, color = '#16082B'}: any) => {
  const xml = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 24C4.486 24 0 19.514 0 14V13H2V14C2 18.411 5.589 22 10 22C14.411 22 18 18.411 18 14V13H20V14C20 19.514 15.514 24 10 24Z" fill="#16082B"/>
  <path d="M10 20C8.343 20 7 18.657 7 17H13C13 18.657 11.657 20 10 20Z" fill="#16082B"/>
  <path d="M20 10C20 4.486 15.514 0 10 0C4.486 0 0 4.486 0 10V11H6.141C6.587 12.722 8.138 14 10 14H20C22.209 14 24 12.209 24 10H20Z" fill=${color}/>
  </svg>
`;

  return <SvgXml xml={xml} width={width} height={height} viewBox="0 0 24 24" />;
};

export default BellIcon;
