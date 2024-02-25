import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ScreenContainer from './ScreenContainer';
import {colors} from '../theme/colors';
import InputField from '../components/InputField';
import CustomButton from '../components/Button';
import * as Yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import RHFInputField from '../forms/RHFInputField';
import FormProvider from '../forms/FormProvider';
import auth from '@react-native-firebase/auth';
import {LOCAL_STORAGE_KEYS, setItemInAsyncStorage} from '../hooks/useStorage';
import {dispatch} from '../store';
import {loginAPI} from '../services/Auth';
import {handleUserLogin} from '../store/slice/userSlice';

interface LoginProps {}

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is Invalid')
    .required('Email Cannot Be Empty'),
  password: Yup.string()
    .min(8, 'Password Must have a Minimum of 8 Characters')
    .required('Password Cannot Be Empty'),
  // confirmPassword: Yup.string().oneOf([Yup.ref('password'), ""], 'Passwords must match').required('Please Enter Password Again!'),
});

const Login = (props: LoginProps) => {
  const [_loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const methods = useForm({
    resolver: yupResolver(signUpSchema) as any,
    defaultValues: {
      email: 'bhavinpatil28@gmail.com',
      password: 'Bhavin@28',
    },
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = methods;
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const user = await auth().signInWithEmailAndPassword(
        data?.email,
        data?.password,
      );
      try {
        const idToken = await user?.user.getIdToken();
        try {
          const data: any = await loginAPI(idToken);
          console.log(data);

          if (data?.data != undefined) {
            setItemInAsyncStorage(
              LOCAL_STORAGE_KEYS.accessToken,
              data?.data?.accesstoken,
            );
            setItemInAsyncStorage(
              LOCAL_STORAGE_KEYS.refreshToken,
              data?.data?.refreshtoken,
            );
            setItemInAsyncStorage(LOCAL_STORAGE_KEYS.userId, data?.data?.user);
            dispatch(handleUserLogin(data?.data?.user));
          }
        } catch (error) {
          console.log('Firebase Login ', error);
        }
      } catch (error) {
        console.log('Firebase Login ', error);
      }
    } catch (error) {
      console.log('Firebase Login ', error);
    } finally {
      setLoading(false);
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
          name="email"
          keyboardType="visible-password"
          // @ts-ignore
          error={errors.email}
        />
        <RHFInputField
          placeholder="Enter Password"
          label="Password"
          maxLength={128}
          variant={'outline'}
          name="password"
          // type="password"
          secureTextEntry={true}
          // @ts-ignore
          error={errors.password}
        />
        <CustomButton
          onPress={handleSubmit(onSubmit)}
          isLoading={_loading}
          isDisabled={_loading}
          placeholder="Log In"
          marginTop={0}
          _pressed={{
            opacity: 80,
          }}
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
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    paddingVertical: 10,
  },
});
