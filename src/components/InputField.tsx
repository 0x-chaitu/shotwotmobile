import React from 'react';
import { Platform, StyleSheet, Text, View, ViewProps } from 'react-native';
import { colors } from '../theme/colors';
import { Input, IInputProps, FormControl, WarningOutlineIcon } from "native-base";

export interface InputFieldProps extends IInputProps {
    label?: string;
    mainContainerStyle?: ViewProps['style'];
    errorMessage?: string;
    cardStyle: any,
    required: boolean,
}

export default function InputField({
    cardStyle = {},
    required,
    mainContainerStyle = {},
    label,
    errorMessage = '',
    ...props
}: InputFieldProps) {
    return (
        <FormControl isInvalid={false} >
            <FormControl.Label margin={0}><Text
                style={{
                    fontFamily: 'Poppins-Medium',
                    color: colors.palette.black,
                    fontWeight: "600",
                    fontSize: 16,
                }}
            >{label}</Text></FormControl.Label>
            <Input
                margin={0}
                fontSize={18}
                backgroundColor={'white'}
                placeholderTextColor={colors.palette.gray500}
                borderColor={colors.palette.grey100}
                fontFamily={'Poppins-Regular'}
                _focus={{
                    fontFamily: 'Poppins-Regular',
                    color: colors.palette.black,
                    borderColor: colors.palette.grey100,
                    margin: 0,
                }}
                keyboardType='visible-password'
                {...props}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Email is required
            </FormControl.ErrorMessage>
        </FormControl>

    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0
    },
    inputContainer: {
        borderColor: colors.palette.transparent,


    },
    cardContainer: {

    },
    errorContainer: {
        borderColor: 'red',
    },
    inputStyle: {
        fontFamily: "Poppins-Regular",
        color: colors.palette.black,
        fontSize: 16,
    },
    mainViewContainer: {
        flexDirection: 'column',
    },
    errorMessage: {
        color: 'red',
    },
    labelAndErrorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
});