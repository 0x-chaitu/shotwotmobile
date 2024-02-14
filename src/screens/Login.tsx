import React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { colors } from '../theme/colors';
import InputField from '../components/InputField';
import CustomButton from '../components/Button';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFInputField from '../forms/RHFInputField';
import FormProvider from '../forms/FormProvider';

interface LoginProps { }

const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Email is Invalid').required('Email Cannot Be Empty'),
    password: Yup.string().min(8, 'Password Must have a Minimum of 8 Characters').required('Password Cannot Be Empty'),
    // confirmPassword: Yup.string().oneOf([Yup.ref('password'), ""], 'Passwords must match').required('Please Enter Password Again!'),
});

const Login = (props: LoginProps) => {


    const methods = useForm({
        resolver: yupResolver(signUpSchema) as any,
        defaultValues: {
        }
    });

    const { handleSubmit, setValue, watch, formState: { errors } } = methods;
    const onSubmit = (data: any) => {
        console.log('submiting with ', data);
    };

    const signIn = async () => {
        try {
        } catch (error) {
        }
    };

    return (
        <ScreenContainer>
            <FormProvider methods={methods} style={styles.container}>
                <Text style={styles.header}>Log in</Text>
                <RHFInputField
                    placeholder="Enter Email"
                    label="E-mail Address"
                    maxLength={128}
                    variant={'outline'}
                    name='email'
                    // @ts-ignore
                    error={errors.email}
                />
                <RHFInputField
                    placeholder="Enter Password"
                    label="Password"
                    maxLength={128}
                    variant={'outline'}
                    name='password'
                    // @ts-ignore
                    error={errors.password}
                />
                <CustomButton
                    placeholder='Log In'
                    marginTop={0}
                    onPress={handleSubmit(onSubmit)}
                />
            </FormProvider>
        </ScreenContainer>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    header: {
        color: colors.palette.black,
        fontFamily: "Poppins-Medium",
        fontSize: 24,
        paddingVertical: 10
    }
});
