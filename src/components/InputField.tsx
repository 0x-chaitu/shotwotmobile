import React from 'react';
import {Platform, StyleSheet, Text, View, ViewProps} from 'react-native';
import {colors} from '../theme/colors';
import {Input, IInputProps, FormControl, WarningOutlineIcon} from 'native-base';
import CustomText from './CustomText';
import {customStyles} from '../theme/style';

export interface InputFieldProps extends IInputProps {
  error?: string;
  label?: string;
}

export default function InputField({
  label,
  placeholder,
  width = 'container',
  error,
  ...props
}: InputFieldProps) {
  return (
    <FormControl width={width} isInvalid={error != null}>
      <FormControl.Label>
        {label && <CustomText textStyle={styles.label}>{label}</CustomText>}
      </FormControl.Label>
      <Input
        fontSize={14}
        backgroundColor={'white'}
        placeholderTextColor={'#BEBBC2'}
        borderColor={colors.palette.outline}
        fontFamily={'Lato-Regular'}
        _focus={styles.focus}
        _invalid={{
          borderColor: '#E50000',
        }}
        defaultValue=""
        placeholder={placeholder}
        // @ts-ignore
        _pressed={{
          opacity: 80,
        }}
        margin={0}
        {...props}
      />
      <FormControl.ErrorMessage>
        <CustomText textStyle={{...customStyles.bodyLabel, color: '#E50000'}}>
          {error}
        </CustomText>
      </FormControl.ErrorMessage>
    </FormControl>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin: 0,
  },
  focus: {
    fontFamily: 'Lato-Regular',
    color: colors.palette.body,
    borderColor: colors.palette.heading,
    fontSize: 14,
  },
  label: {
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    color: '#695A7E',
    fontWeight: '600',
  },
});
