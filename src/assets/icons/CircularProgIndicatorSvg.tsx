import React from 'react';
import {Svg, Circle} from 'react-native-svg';

export default function CircularProgIndicatorSvg({size}: {size: number}) {
  const percentage = 40; // Set your desired percentage
  const borderColor = '#F9FAFB'; // Replace with your desired color
  const progressColor = '#2563EB'; // Replace with your desired color

  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;
  const remaining = circumference - progress;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${30} ${30}`} fill="none">
      {/* Background Circle */}
      <Circle
        cx={radius}
        cy={radius}
        r={radius}
        stroke={borderColor}
        strokeWidth="10"
        fill="none"
      />

      {/* Progress Circle */}
      <Circle
        cx={radius}
        cy={radius}
        r={radius - 2}
        stroke={progressColor}
        strokeWidth="10"
        fill="none"
        strokeDasharray={`${progress} ${remaining}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${radius} ${radius})`}
        vectorEffect="non-scaling-stroke" // Add this property
      />
    </Svg>
  );
}
