/* eslint-disable react-native/no-inline-styles */

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../theme/colors';
import CustomText from './CustomText';

interface ButtonProps {
  style?: ViewStyle;
  onPress: () => void;
  isLoading: boolean;
  placeHolder?: String;
  textStyle?: TextStyle;
}

const TouchableButton = ({
  onPress,
  isLoading,
  placeHolder,
  style,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[{...styles.container, ...style}]}
      onPress={onPress}
      disabled={isLoading}>
      <CustomText textStyle={textStyle}>{placeHolder}</CustomText>
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.theme6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderRadius: 2,
    gap: 4,
  },
  buttonTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
  },
});
