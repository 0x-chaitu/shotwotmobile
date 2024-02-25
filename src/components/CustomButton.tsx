/* eslint-disable react-native/no-inline-styles */

import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../theme/colors';

type ButtonProps = {
  onPress: () => void;
  buttonText: string;
  buttonTextColor: string;
  buttonRadius?: number;
  width?: string;
  backgroundColor: string;
  borderColor: string;
  isLoading: boolean;
};

const CustomButton: FC<ButtonProps> = ({
  onPress,
  buttonText,
  buttonTextColor,
  buttonRadius,
  isLoading,
  width,
  backgroundColor,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        !isLoading && onPress();
      }}
      //   @ts-ignore
      style={{
        height: '60%',
        borderRadius: buttonRadius,
        width: width,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: borderColor,
        borderWidth: 2,
      }}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors?.palette.white} />
      ) : (
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Poppins-Bold',
            color: buttonTextColor,
            fontWeight: '500',
          }}>
          {buttonText || 'NA'}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
