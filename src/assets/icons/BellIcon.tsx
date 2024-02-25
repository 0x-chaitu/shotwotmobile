import React from 'react';
import {SvgXml} from 'react-native-svg';

const BellIcon = ({width = 24, height = 24, color = '#1C1B1F'}: any) => {
  const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8559 17.0817C16.7504 16.857 18.5773 16.4116 20.3102 15.7719C18.8734 14.177 17.9988 12.0656 17.9988 9.75V9.04919C17.999 9.03281 17.999 9.01641 17.999 9C17.999 5.68629 15.3127 3 11.999 3C8.68531 3 5.99902 5.68629 5.99902 9L5.99883 9.75C5.99883 12.0656 5.1243 14.177 3.6875 15.7719C5.42043 16.4116 7.24746 16.857 9.14216 17.0818M14.8559 17.0817C13.919 17.1928 12.9656 17.25 11.9988 17.25C11.0322 17.25 10.0789 17.1929 9.14216 17.0818M14.8559 17.0817C14.9488 17.3711 14.999 17.6797 14.999 18C14.999 19.6569 13.6559 21 11.999 21C10.3422 21 8.99902 19.6569 8.99902 18C8.99902 17.6797 9.04921 17.3712 9.14216 17.0818" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
`;

  return <SvgXml xml={xml} width={width} height={height} viewBox="0 0 24 24" />;
};

export default BellIcon;
