import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/Button';
import DotSlider from '../components/DotSlider';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ReduxProps} from 'utlis/TypeScriptProps';
import Constant from '../utlis/Constant';
import TermsCondComp from '../components/TermsCondComp';
import {colors} from '../theme/colors';
import {SCREEN_NAMES} from '../navigators/Constants';

export default function SplashScreen() {
  const navigate = useNavigation();
  const stepLength = 3;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const splashList = useSelector(
    (state: ReduxProps) => state?.master?.splashList,
  );

  const handlePress = () => {
    if (currentStep < stepLength) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate.navigate(SCREEN_NAMES.LoginScreen as never);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/Videographer1.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{Constant.APP_NAME}</Text>
        <Text style={styles.subtitle}>
          {splashList[currentStep - 1]?.value}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          placeholder="Get Started"
          onPress={handlePress}
          isLoading={false}
          width={'90%'}
        />

        <TermsCondComp />

        <View style={styles.footerContainer}>
          <DotSlider totalLength={stepLength} currentStep={currentStep} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 400,
    width: 400,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.palette.primaryBlue700,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors?.palette?.grey800,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    marginTop: 30,
  },
});
