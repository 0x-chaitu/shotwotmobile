import React from 'react';
import {SvgXml} from 'react-native-svg';

const PhoneIcon = ({
  width = 20,
  height = 20,
  color = '#1C1B1F',
  ...props
}: any) => {
  const xml = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 0H5C3.62167 0 2.5 1.12167 2.5 2.5V17.5C2.5 18.8783 3.62167 20 5 20H15C16.3783 20 17.5 18.8783 17.5 17.5V2.5C17.5 1.12167 16.3783 0 15 0ZM15.8333 16.6667C15.8333 17.1267 15.46 17.5 15 17.5H5C4.54 17.5 4.16667 17.1267 4.16667 16.6667V3.33333C4.16667 2.87333 4.54 2.5 5 2.5H15C15.46 2.5 15.8333 2.87333 15.8333 3.33333V16.6667Z" fill="white"/>
  <path d="M14.1663 12.5H5.83301V15.8333H14.1663V12.5Z" fill="white"/>
  </svg>
`;

  return <SvgXml xml={xml} width={width} height={height} viewBox="0 0 24 24" />;
};

export default PhoneIcon;
