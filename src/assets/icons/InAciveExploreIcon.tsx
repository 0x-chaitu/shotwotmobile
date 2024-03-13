import React from 'react';
import {SvgXml} from 'react-native-svg';

const InActiveExploreIcon = ({
  width = 20,
  height = 20,
  color = '#1C1B1F',
  style,
  ...props
}: any) => {
  const xml = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.575 1H3.175C2.18089 1 1.375 1.80589 1.375 2.8V17.2C1.375 18.1941 2.18089 19 3.175 19H17.575C18.5691 19 19.375 18.1941 19.375 17.2V2.8C19.375 1.80589 18.5691 1 17.575 1Z" stroke="#16082B" stroke-width="1.08" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M8.1251 4.59998H5.4251C5.17657 4.59998 4.9751 4.80145 4.9751 5.04998V7.74998C4.9751 7.9985 5.17657 8.19998 5.4251 8.19998H8.1251C8.37363 8.19998 8.5751 7.9985 8.5751 7.74998V5.04998C8.5751 4.80145 8.37363 4.59998 8.1251 4.59998Z" stroke="#16082B" stroke-width="1.08" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M8.1251 11.8H5.4251C5.17657 11.8 4.9751 12.0015 4.9751 12.25V14.95C4.9751 15.1985 5.17657 15.4 5.4251 15.4H8.1251C8.37363 15.4 8.5751 15.1985 8.5751 14.95V12.25C8.5751 12.0015 8.37363 11.8 8.1251 11.8Z" stroke="#16082B" stroke-width="1.08" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M15.325 4.59998H12.625C12.3765 4.59998 12.175 4.80145 12.175 5.04998V14.95C12.175 15.1985 12.3765 15.4 12.625 15.4H15.325C15.5736 15.4 15.775 15.1985 15.775 14.95V5.04998C15.775 4.80145 15.5736 4.59998 15.325 4.59998Z" stroke="#16082B" stroke-width="1.08" stroke-miterlimit="10" stroke-linecap="square"/>
</svg>
      
`;

  return (
    <SvgXml
      xml={xml}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      style={style}
      {...props}
    />
  );
};

export default InActiveExploreIcon;
