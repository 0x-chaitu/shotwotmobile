import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, IButtonProps} from 'native-base';
import {colors} from '../theme/colors';

interface ButtonProps extends IButtonProps {
  placeholder: string;
}

const CustomButton = ({placeholder, ...props}: ButtonProps) => {
  return (
    <Button
      _text={{
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
      }}
      backgroundColor={colors.palette.primaryBlue700}
      _loading={{
        bg: colors.palette.primaryBlue700,
        _text: {
          color: 'white',
          fontFamily: 'Poppins-Medium',
          fontSize: 16,
        },
      }}
      _spinner={{
        color: 'white',
      }}
      isLoadingText="Loading"
      {...props}>
      {placeholder}
    </Button>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {},
});
