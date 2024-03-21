import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenContainer from './ScreenContainer';
import CustomText from '../components/CustomText';
import {customStyles} from '../theme/style';
import {colors} from '../theme/colors';
import TouchableButton from '../components/TouchableButton';
import GoogleIcon from '../assets/icons/GoogleIcon';
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
import PhoneIcon from '../assets/icons/PhoneIcon';
import {customNavigation} from '../../App';

interface OnBoardingScreenProps {}

const OnBoardingScreen = (props: OnBoardingScreenProps) => {
  const [action, setAction] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      var user;
      const playservice = await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      await GoogleSignOut();
      const guser = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        guser?.idToken,
      );
      // Sign-in the user with the credential
      user = await auth().signInWithCredential(googleCredential);

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
      <View style={styles.container}>
        <View style={{flex: 1}} />
        <CustomText
          textStyle={{...customStyles.heading4, fontWeight: 'bold', flex: 1}}>
          Shotwot
        </CustomText>
        <TouchableOpacity
          style={styles.actionStyle}
          onPress={() => {
            setAction(!action);
          }}>
          <CustomText
            textStyle={{
              ...customStyles.heading8,
              color: colors.palette.theme,
            }}>
            Sign {action ? 'In' : 'Up'}
          </CustomText>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
      <View style={{paddingVertical: 24, gap: 16}}>
        <View style={{alignItems: 'center', gap: 16}}>
          <TouchableButton
            onPress={() => onSubmit()}
            isLoading={loading}
            placeHolder={`Sign ${!action ? 'In' : 'Up'} with Google`}
            style={styles.buttonStyle}
            icon={<GoogleIcon />}
            textStyle={{...styles.buttonTextStyle, color: '#160702'}}
          />
          <CustomText textStyle={styles.orStyle}>OR</CustomText>
          <TouchableButton
            onPress={() => customNavigation('Step1')}
            isLoading={loading}
            placeHolder={`Sign ${!action ? 'In' : 'Up'} with Phone/Email`}
            icon={<PhoneIcon />}
            style={{
              ...styles.buttonStyle,
              backgroundColor: colors.palette.theme,
              gap: 14,
            }}
            textStyle={{...styles.buttonTextStyle}}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    padding: -4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionStyle: {flex: 1, justifyContent: 'flex-end', flexDirection: 'row'},
  buttonTextStyle: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 4,
  },
  orStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#736B80',
  },
});
