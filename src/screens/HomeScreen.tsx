import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenContainer from './ScreenContainer';
import {colors} from '../theme/colors';
import ProfileSetupComp from '../components/ProfileSetupComp';
import Header from '../components/Header';
import BriefsCarousel from '../components/BriefsCarousel';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <ScreenContainer style={{paddingTop: 10}}>
      <Header />
      <ProfileSetupComp />

      <BriefsCarousel arrayData={[]} title="Your Briefs" onPress={() => {}} />
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.palette.grey800,
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  profileContainer: {
    backgroundColor: '#E4F0FF',
    padding: 10,
    borderRadius: 10,
  },
});
