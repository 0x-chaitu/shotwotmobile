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
  icon?: React.ReactNode;
}

const TouchableButton = ({
  onPress,
  isLoading,
  placeHolder,
  style,
  textStyle,
  icon = null,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[{...styles.container, ...style}]}
      onPress={onPress}
      disabled={isLoading}>
      {icon}
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
    flexDirection: 'row',
  },
  buttonTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
  },
});
