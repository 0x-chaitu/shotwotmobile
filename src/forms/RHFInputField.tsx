// form
import React, { useState } from 'react';
import { Controller, FieldError, RegisterOptions, useFormContext } from 'react-hook-form';

import { FormControl, IInputProps, Input, Text, WarningOutlineIcon } from 'native-base';
import { colors } from '../theme/colors';
import { StyleSheet } from 'react-native';


type Props = IInputProps & {
    name: string;
    label?: string;
    isInvalid?: boolean;
    error?: FieldError;
    rules?: RegisterOptions
};

export default function RHFInputField({ name, label, error, rules, ...other }: Props) {
    const { control } = useFormContext();
    const isInvalid = error != null
    const isRequired = rules != null && 'required' in rules

    return (
        <FormControl isInvalid={isInvalid} isRequired={isRequired}>
            {label != null && <FormControl.Label margin={0}><Text
                style={styles.label}
            >{label}</Text></FormControl.Label>}
            <Controller
                control={control}
                render={({ field, fieldState: { error } }) => {
                    return (<Input
                        fontSize={16}
                        backgroundColor={'white'}
                        placeholderTextColor={colors.palette.gray500}
                        borderColor={colors.palette.grey100}
                        fontFamily={'Poppins-Regular'}
                        _focus={styles.focus}
                        onChangeText={field.onChange}
                        defaultValue=''

                        {...other}
                        {...field}
                        // @ts-ignore
                        _pressed={{
                            opacity: 80
                        }}
                    />
                    )
                }}
                name={name}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {error != null && (
                    <FormControl.ErrorMessage>
                        {error.message}
                    </FormControl.ErrorMessage>
                )}
            </FormControl.ErrorMessage> </FormControl>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0
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
        fontWeight: "600",
        fontSize: 18,
    }
});