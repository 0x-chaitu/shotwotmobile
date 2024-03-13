import * as React from 'react';
import {Text, View, StyleSheet, TextStyle} from 'react-native';

interface CustomTextProps extends TextStyle {
  children?: React.ReactNode;
  textStyle?: TextStyle;
}

const CustomText = ({children, textStyle, ...props}: CustomTextProps) => {
  return (
    <Text
      style={[
        styles.text,
        {...textStyle, lineHeight: (textStyle?.fontSize || 10) * 1.5},
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: 'Lato-Regular',
    color: 'black',
  },
});
