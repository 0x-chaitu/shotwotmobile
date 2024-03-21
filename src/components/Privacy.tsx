import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomText from './CustomText';
import {customStyles} from '../theme/style';

interface PrivacyProps {}

const Privacy = (props: PrivacyProps) => {
  return (
    <CustomText
      textStyle={{
        ...customStyles.bodyHelper,
        textAlign: 'center',
      }}>
      By signing up, you agree to our Terms of Service and acknowledge that our
      Privacy Policy applies to you
    </CustomText>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {},
});
