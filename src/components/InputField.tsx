import React from 'react';
import { Platform, StyleSheet, Text, View, ViewProps } from 'react-native';
import { colors } from '../theme/colors';
import { Input, IInputProps, FormControl, WarningOutlineIcon } from "native-base";

export interface InputFieldProps extends IInputProps {
}

export default function InputField({
    placeholder,
    width = "container",
    ...props
}: InputFieldProps) {
    return (
        <FormControl width={width}>

            <FormControl.Label style={{
                marginBottom: -10,
                marginLeft: 10,
                zIndex: 10,
                backgroundColor: colors.palette.white,
                alignSelf: 'flex-start'
            }}>{placeholder}</FormControl.Label>
            <Input
                fontSize={16}
                backgroundColor={'white'}
                placeholderTextColor={colors.palette.gray500}
                borderColor={colors.palette.grey100}
                fontFamily={'Poppins-Regular'}
                _focus={styles.focus}
                defaultValue=''
                placeholder={placeholder}
                // @ts-ignore
                _pressed={{
                    opacity: 80
                }}
                margin={0}
                {...props}
            /><FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
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