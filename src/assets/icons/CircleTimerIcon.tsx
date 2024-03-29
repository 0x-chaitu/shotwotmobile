import React from 'react';
import {SvgXml} from 'react-native-svg';
import {colors} from '../../theme/colors';

const CircleTimerIcon = ({
  width = 12,
  height = 12,
  color = '#16082B',
  style,
  ...props
}: any) => {
  const xml = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.47317 3.52669C8.14897 3.20092 7.76354 2.94249 7.33906 2.76629C6.91458 2.59009 6.45944 2.4996 5.99984 2.50002V6.00002L3.5265 8.47335C4.8915 9.83835 7.10817 9.83835 8.479 8.47335C8.80386 8.14841 9.06144 7.76259 9.23699 7.33797C9.41255 6.91336 9.50264 6.45829 9.50209 5.99881C9.50155 5.53933 9.41039 5.08448 9.23384 4.66028C9.05728 4.23608 8.79879 3.85086 8.47317 3.52669ZM5.99984 0.166687C2.77984 0.166687 0.166504 2.78002 0.166504 6.00002C0.166504 9.22002 2.77984 11.8334 5.99984 11.8334C9.21984 11.8334 11.8332 9.22002 11.8332 6.00002C11.8332 2.78002 9.21984 0.166687 5.99984 0.166687ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57835 1.33317 6.00002C1.33317 3.42169 3.4215 1.33335 5.99984 1.33335C8.57817 1.33335 10.6665 3.42169 10.6665 6.00002C10.6665 8.57835 8.57817 10.6667 5.99984 10.6667Z" fill=${color}/>
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

export default CircleTimerIcon;
