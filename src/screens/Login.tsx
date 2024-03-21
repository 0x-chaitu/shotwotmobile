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
import auth, {firebase} from '@react-native-firebase/auth';
import {LOCAL_STORAGE_KEYS, setItemInAsyncStorage} from '../hooks/useStorage';
import {dispatch} from '../store';
import {loginAPI} from '../services/Auth';
import {handleUserLogin} from '../store/slice/userSlice';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {GoogleSignOut} from '../services/Google';
import CustomText from '../components/CustomText';
import {customStyles} from '../theme/style';
import RHFInput from '../forms/RHFInput';
import TouchableButton from '../components/TouchableButton';
import GoogleIcon from '../assets/icons/GoogleIcon';

// Log in to get an authentication token

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
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = methods;
  const onSubmit = async (data: any) => {
    // await auth().signInWithCredential(credential);
    // setLoading(true);
    // try {
    //   var user;
    //   if (data === null) {
    //     const playservice = await GoogleSignin.hasPlayServices({
    //       showPlayServicesUpdateDialog: true,
    //     });
    //     await GoogleSignOut();
    //     const guser = await GoogleSignin.signIn();
    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(
    //       guser?.idToken,
    //     );
    //     // Sign-in the user with the credential
    //     user = await auth().signInWithCredential(googleCredential);
    //   } else {
    //     user = await auth().signInWithEmailAndPassword(
    //       data?.email,
    //       data?.password,
    //     );
    //   }
    //   try {
    //     const idToken = await user?.user.getIdToken();
    //     try {
    //       const data: any = await loginAPI(idToken);
    //       console.log(data);
    //       if (data?.data != undefined) {
    //         setItemInAsyncStorage(
    //           LOCAL_STORAGE_KEYS.accessToken,
    //           data?.data?.accesstoken,
    //         );
    //         setItemInAsyncStorage(
    //           LOCAL_STORAGE_KEYS.refreshToken,
    //           data?.data?.refreshtoken,
    //         );
    //         setItemInAsyncStorage(LOCAL_STORAGE_KEYS.userId, data?.data?.user);
    //         dispatch(handleUserLogin(data?.data?.user));
    //       }
    //     } catch (error) {
    //       console.log('Firebase Login ', error);
    //     }
    //   } catch (error) {
    //     console.log('Firebase Login ', error);
    //   }
    // } catch (error) {
    //   console.log('Firebase Login ', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <ScreenContainer>
      <FormProvider methods={methods} style={styles.container}>
        <View style={{gap: 4}}>
          <CustomText textStyle={styles.header}>Hola 👋 </CustomText>
        </View>
        <RHFInput
          placeholder="Please enter your email address"
          label="Email"
          maxLength={128}
          variant={'outline'}
          name="email"
          keyboardType="visible-password"
          // @ts-ignore
          error={errors.email}
        />
        <RHFInput
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
        <TouchableButton
          onPress={handleSubmit(onSubmit)}
          isLoading={_loading}
          placeHolder="Log In"
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
        />
        <View style={{alignItems: 'center', gap: 16}}>
          <CustomText
            textStyle={{
              fontFamily: 'Lato-Regular',
              fontSize: 12,
              color: '#736B80',
            }}>
            OR
          </CustomText>
          <TouchableButton
            onPress={() => onSubmit(null)}
            isLoading={_loading}
            placeHolder="Sign in with Google"
            style={{
              width: '100%',
              backgroundColor: 'white',
              paddingVertical: 12,
            }}
            icon={<GoogleIcon />}
            textStyle={{...styles.buttonTextStyle, color: '#160702'}}
          />
        </View>
      </FormProvider>
    </ScreenContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 24,
  },
  header: {
    ...customStyles.heading4,
    paddingVertical: 10,
  },
  buttonStyle: {
    backgroundColor: colors.palette.theme,
    paddingVertical: 12,
    borderRadius: 4,
    gap: 14,
  },
  buttonTextStyle: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
});
