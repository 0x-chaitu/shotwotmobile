/* eslint-disable react-native/no-inline-styles */

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../theme/colors';

const CustomButton = ({
  onPress,
  buttonText,
  buttonTextColor,
  buttonRadius = 100,
  isLoading,
  width,
  backgroundColor,
  borderColor,
  height = 35,
}: any) => {
  const buttonStyle = {
    borderRadius: buttonRadius,
    width: width,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: borderColor,
    borderWidth: 1,
    height,
  };

  return (
    <TouchableOpacity
      onPress={() => {
        !isLoading && onPress();
      }}
      //   @ts-ignore
      style={[buttonStyle, {}]}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors?.palette.white} />
      ) : (
        <Text
          style={[
            styles.buttonTitle,
            {
              color: buttonTextColor,
            },
          ]}>
          {buttonText || 'NA'}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
  },
});
