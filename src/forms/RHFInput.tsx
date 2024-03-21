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
  Input,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import {colors} from '../theme/colors';
import {StyleSheet} from 'react-native';
import CustomText from '../components/CustomText';
import {customStyles} from '../theme/style';

type Props = IInputProps & {
  placeholder: string;
  label?: string;
  isInvalid?: boolean;
  error?: FieldError;
  rules?: RegisterOptions;
  name: string;
};

export default function RHFInput({
  placeholder,
  label,
  error,
  rules,
  width = 'container',
  name,
  ...other
}: Props) {
  const {control} = useFormContext();
  const isInvalid = error != null;
  const isRequired = rules != null && 'required' in rules;

  return (
    <Controller
      control={control}
      render={({field, fieldState: {error}}) => {
        return (
          <FormControl
            isInvalid={error != null}
            isRequired={rules != null && 'required' in rules}>
            <FormControl.Label>
              <CustomText textStyle={styles.label}>{label}</CustomText>
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
              InputRightElement={
                <>
                  {error != null ? (
                    <WarningOutlineIcon
                      size="xs"
                      color={'#E50000'}
                      paddingRight={12}
                    />
                  ) : null}
                </>
              }
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
              margin={0}
              {...other}
            />
            <FormControl.ErrorMessage>
              {error != null && (
                <CustomText
                  textStyle={{...customStyles.bodyLabel, color: '#E50000'}}>
                  {error.message}
                </CustomText>
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
