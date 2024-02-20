import {StyleSheet, Text} from 'react-native';
import React from 'react';
import BoldText from './BoldText';

export default function TermsCondComp() {
  return (
    <Text style={styles.termsText}>
      By continuing you indicate that you’ve read and agree to our and
      <BoldText text=" Terms of Service " />
      and
      <BoldText text=" Privacy Policy" />.
    </Text>
  );
}

const styles = StyleSheet.create({
  termsText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    width: '90%',
  },
});
