import React from 'react';
import {Svg, Rect, Path} from 'react-native-svg';

export default function HangoutVideoSvg({size}: {size: number}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 24">
      <Rect width="28" height="24" rx={5} fill="black" fillOpacity={0.3} />
      <Path
        d="M9 16H15C15.2833 16 15.5208 15.9042 15.7125 15.7125C15.9042 15.5208 16 15.2833 16 15V12.8L18.775 15.025C19.025 15.225 19.2917 15.2583 19.575 15.125C19.8583 14.9917 20 14.7667 20 14.45V9.55C20 9.23333 19.8583 9.00833 19.575 8.875C19.2917 8.74167 19.025 8.775 18.775 8.975L16 11.2V9C16 8.71667 15.9042 8.47917 15.7125 8.2875C15.5208 8.09583 15.2833 8 15 8H9C8.71667 8 8.47917 8.09583 8.2875 8.2875C8.09583 8.47917 8 8.71667 8 9V15C8 15.2833 8.09583 15.5208 8.2875 15.7125C8.47917 15.9042 8.71667 16 9 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4H22C22.55 4 23.0208 4.19583 23.4125 4.5875C23.8042 4.97917 24 5.45 24 6V18C24 18.55 23.8042 19.0208 23.4125 19.4125C23.0208 19.8042 22.55 20 22 20H6ZM6 18H22V6H6V18Z"
        fill="white"
      />
    </Svg>
  );
}
