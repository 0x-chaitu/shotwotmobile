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
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import FormProvider from '../forms/FormProvider';
import RHFInput from '../forms/RHFInput';
import {getOtpAPI} from '../services/Auth';

interface Step1ScreenProps {}

const LoginSchema = yup.object().shape({
  email_or_phone: yup
    .string()
    .required('Email / Phone is required')
    .test('email_or_phone', 'Email / Phone is invalid', value => {
      // validateEmail(value) ||
      return validatePhone(parseInt(value ?? '0'));
    }),
});

const validateEmail = (email: string | undefined) => {
  return yup.string().email().isValidSync(email);
};

const validatePhone = (phone: number | undefined) => {
  return yup
    .number()
    .integer()
    .positive()
    .test(phone => {
      return phone && phone.toString().length == 10 ? true : false;
    })
    .isValidSync(phone);
};

const Step1Screen = (props: Step1ScreenProps) => {
  const navigate = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const methods = useForm({
    resolver: yupResolver(LoginSchema) as any,
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
    setLoading(true);
    try {
      const res = await getOtpAPI(data.email_or_phone);
      customNavigation('Step2', {
        orderId: res.data.orderId,
        phone: data.email_or_phone,
      });
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
        <CustomText textStyle={styles.header}>Step 1</CustomText>
      </View>
      <Divider
        style={{...styles.divider, backgroundColor: colors.palette.theme}}
        height={'0.5'}
      />
      <Divider
        style={{
          ...styles.divider,
          marginLeft: Dimensions.get('screen').width / 2,
        }}
        height={'0.5'}
      />
      <FormProvider methods={methods}>
        <View style={{marginTop: 20}}>
          <CustomText textStyle={styles.title}>Add your details</CustomText>
          <RHFInput
            placeholder="Enter your email or phone number"
            maxLength={128}
            variant={'outline'}
            name="email_or_phone"
            keyboardType="visible-password"
            // @ts-ignore
            error={errors}
          />
        </View>
      </FormProvider>
      <View style={{flex: 1}} />
      <View style={{gap: 12, paddingVertical: 16}}>
        <TouchableButton
          onPress={handleSubmit(onSubmit)}
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

export default Step1Screen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  header: {
    ...customStyles.heading7,
  },
  title: {
    ...customStyles.heading5,
  },
  divider: {
    position: 'absolute',
    marginTop: 60,
    backgroundColor: colors.palette.divider,
    width: Dimensions.get('screen').width / 2,
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
