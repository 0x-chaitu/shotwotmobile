// form
import React, {useState} from 'react';
import {
  Controller,
  FieldError,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import {
  FormControl,
  IInputProps,
  ITextAreaProps,
  Input,
  Text,
  TextArea,
  WarningOutlineIcon,
} from 'native-base';
import {colors} from '../theme/colors';
import {StyleSheet} from 'react-native';

type Props = ITextAreaProps & {
  placeholder: string;
  label?: string;
  isInvalid?: boolean;
  error?: FieldError;
  rules?: RegisterOptions;
  name: string;
};

export default function RHFTextBox({
  placeholder,
  label,
  error,
  rules,
  width = 'container',
  name,
  ...other
}: Props) {
  const {control} = useFormContext();

  return (
    <Controller
      control={control}
      render={({field, fieldState: {error}}) => {
        return (
          <FormControl
            isInvalid={error != null}
            isRequired={rules != null && 'required' in rules}>
            <FormControl.Label
              style={{
                marginBottom: -10,
                marginLeft: 10,
                zIndex: 10,
                backgroundColor: colors.palette.white,
                alignSelf: 'flex-start',
              }}>
              {name}
            </FormControl.Label>
            <TextArea
              fontSize={14}
              backgroundColor={'white'}
              placeholderTextColor={colors.palette.gray500}
              borderColor={colors.palette.grey100}
              fontFamily={'Poppins-Regular'}
              _focus={styles.focus}
              onChangeText={field.onChange}
              defaultValue=""
              {...other}
              {...field}
              // @ts-ignore
              _pressed={{
                opacity: 80,
              }}
              placeholder={placeholder}
              // @ts-ignore
              _pressed={{
                opacity: 80,
              }}
              margin={0}
              {...other}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {error != null && (
                <FormControl.ErrorMessage>
                  {error.message}
                </FormControl.ErrorMessage>
              )}
            </FormControl.ErrorMessage>
          </FormControl>
        );
      }}
      name={name}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  focus: {
    fontFamily: 'Poppins-Regular',
    color: colors.palette.black,
    borderColor: colors.palette.grey100,
    margin: 0,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    color: colors.palette.black,
    fontWeight: '600',
    fontSize: 18,
  },
});
