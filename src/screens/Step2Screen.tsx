import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import ScreenContainer from './ScreenContainer';
import GoBackHeader from '../components/GoBackHeader';
import GoBackIcon from '../assets/icons/GoBackIcon';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../components/CustomText';
import {customStyles} from '../theme/style';
import {Divider} from 'native-base';
import {colors} from '../theme/colors';
import TouchableButton from '../components/TouchableButton';
import {customNavigation} from '../../App';
import Privacy from '../components/Privacy';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import {TextInput} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {verifyOtpAPI} from '../services/Auth';
import {LOCAL_STORAGE_KEYS, setItemInAsyncStorage} from '../hooks/useStorage';
import {handleUserLogin} from '../store/slice/userSlice';
import {dispatch} from '../store';

interface Step2ScreenProps {
  route?: any;
}

const Step2Screen = ({route}: Step2ScreenProps) => {
  const phone = route?.params?.phone;
  const orderId = route?.params?.orderId;

  const [otp, setOtpInput] = React.useState<string>('');

  const input = React.useRef<OTPTextView>(null);

  const handleCellTextChange = async (text: string, i: number) => {
    if (i === 0) {
      const clippedText = await Clipboard.getString();
      if (clippedText.slice(0, 1) === text) {
        input.current?.setValue(clippedText, true);
      }
    }
  };

  const navigate = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const data: any = await verifyOtpAPI(phone, orderId, otp);
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <GoBackIcon
          onPress={() => navigate.goBack()}
          style={{marginBottom: 5}}
        />
        <CustomText textStyle={styles.header}>Step 2</CustomText>
      </View>
      <Divider
        style={{...styles.divider, backgroundColor: colors.palette.theme}}
        height={'0.5'}
      />

      <View style={{marginTop: 20}}>
        <CustomText textStyle={styles.title}>
          Authenticate your phone number
        </CustomText>
        <CustomText textStyle={{...customStyles.bodyHelper}}>
          Please enter the verification code sent to your number
        </CustomText>
        <CustomText textStyle={{...customStyles.bodyMid}}>{phone}</CustomText>
      </View>
      <OTPTextView
        ref={input}
        offTintColor={'#D6D6DC'}
        tintColor={'#D6D6DC'}
        containerStyle={styles.textInputContainer}
        handleTextChange={setOtpInput}
        textInputStyle={styles.roundedTextInput}
        handleCellTextChange={handleCellTextChange}
        inputCount={6}
        keyboardType="numeric"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <CustomText
            textStyle={{
              ...customStyles.ctaRegular,
              color: '#4830D9',
            }}>
            ResendCode
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => customNavigation('Step1')}>
          <CustomText
            textStyle={{
              ...customStyles.ctaRegular,
              color: '#4830D9',
            }}>
            Change Number
          </CustomText>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
      <View style={{gap: 12, paddingVertical: 16}}>
        <TouchableButton
          onPress={onSubmit}
          isLoading={loading}
          placeHolder={'Continue'}
          style={{
            ...styles.buttonStyle,
            backgroundColor: colors.palette.theme,
            gap: 14,
          }}
          textStyle={{...styles.buttonTextStyle}}
        />
        <Privacy />
      </View>
    </ScreenContainer>
  );
};

export default Step2Screen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    shadowRadius: 0,
    marginBottom: 5,
  },
  header: {
    ...customStyles.heading7,
  },
  title: {
    ...customStyles.heading5,
  },
  roundedTextInput: {
    borderRadius: 4,
    borderWidth: 1,
    width: 40,
    height: 40,
    padding: -12,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#4830D9',
  },
  divider: {
    position: 'absolute',
    marginTop: 60,
    backgroundColor: colors.palette.divider,
    width: Dimensions.get('screen').width,
  },
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
});
