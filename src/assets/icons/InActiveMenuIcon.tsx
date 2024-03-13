import React from 'react';
import {SvgXml} from 'react-native-svg';

const InActiveMenuIcon = ({
  width = 24,
  height = 24,
  color = '#1C1B1F',
  ...props
}: any) => {
  const xml = `
  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.39773 1.5H1.625C1.34886 1.5 1.125 1.72386 1.125 2V8.77273C1.125 9.04887 1.34886 9.27273 1.625 9.27273H8.39773C8.67387 9.27273 8.89773 9.04887 8.89773 8.77273V2C8.89773 1.72386 8.67387 1.5 8.39773 1.5Z" stroke="#16082B" stroke-width="1.03636" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M12.8523 9.27272L19.625 9.27272C19.9011 9.27272 20.125 9.04886 20.125 8.77272L20.125 1.99999C20.125 1.72385 19.9011 1.49999 19.625 1.49999L12.8523 1.49999C12.5761 1.49999 12.3523 1.72385 12.3523 1.99999L12.3523 8.77272C12.3523 9.04886 12.5761 9.27272 12.8523 9.27272Z" stroke="#16082B" stroke-width="1.03636" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M8.39773 12.7273H1.625C1.34886 12.7273 1.125 12.9511 1.125 13.2273V20C1.125 20.2761 1.34886 20.5 1.625 20.5H8.39773C8.67387 20.5 8.89773 20.2761 8.89773 20V13.2273C8.89773 12.9511 8.67387 12.7273 8.39773 12.7273Z" stroke="#16082B" stroke-width="1.03636" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M12.8523 20.5L19.625 20.5C19.9011 20.5 20.125 20.2761 20.125 20L20.125 13.2273C20.125 12.9511 19.9011 12.7273 19.625 12.7273L12.8523 12.7273C12.5761 12.7273 12.3523 12.9511 12.3523 13.2273L12.3523 20C12.3523 20.2761 12.5761 20.5 12.8523 20.5Z" stroke="#16082B" stroke-width="1.03636" stroke-miterlimit="10" stroke-linecap="square"/>
  </svg>
  
`;

  return <SvgXml xml={xml} width={width} height={height} viewBox="0 0 24 24" />;
};

export default InActiveMenuIcon;
