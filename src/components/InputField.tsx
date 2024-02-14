import React from 'react';
import { Platform, StyleSheet, Text, View, ViewProps } from 'react-native';
import { colors } from '../theme/colors';
import { Input, IInputProps, FormControl, WarningOutlineIcon } from "native-base";

export interface InputFieldProps extends IInputProps {
    label?: string;
    isInvalid?: boolean;
    error?: string;
}

export default function InputField({
    label,
    isInvalid = false,
    error = "error",
    ...props
}: InputFieldProps) {
    return (
        <FormControl isInvalid={isInvalid} >
            <FormControl.Label margin={0}><Text
                style={styles.label}
            >{label}</Text></FormControl.Label>
            <Input
                margin={0}
                fontSize={16}
                backgroundColor={'white'}
                placeholderTextColor={colors.palette.gray500}
                borderColor={colors.palette.grey100}
                fontFamily={'Poppins-Regular'}
                _focus={styles.focus}
                keyboardType='visible-password'
                {...props}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {error}
            </FormControl.ErrorMessage>
        </FormControl>

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