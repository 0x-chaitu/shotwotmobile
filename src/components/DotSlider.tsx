/* eslint-disable react-native/no-inline-styles */

import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {colors} from '../theme/colors';

type Props = {
  currentStep: number;
  totalLength: number;
};

const DotSlider: FC<Props> = ({currentStep, totalLength}) => {
  const dotArray = Array.from({length: totalLength});

  console.log('Inside', currentStep);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: '10%',
        alignItems: 'center',
      }}>
      {dotArray.map((_, step: any) => (
        <TouchableOpacity
          key={step}
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            margin: 5,
            backgroundColor:
              step === currentStep - 1
                ? colors.palette.blue700
                : colors.palette.blue700 + 30,
          }}
        />
      ))}
    </View>
  );
};

export default DotSlider;
