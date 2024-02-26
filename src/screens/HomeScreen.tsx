import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenContainer from './ScreenContainer';
import {colors} from '../theme/colors';
import ProfileSetupComp from '../components/ProfileSetupComp';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import {ScrollView} from 'react-native';
import {dispatch, useSelector} from '../store';
import {fetchAppliedBriefs} from '../store/slice/briefSlice';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const {briefs, isLoading} = useSelector(state => state?.brief);

  React.useEffect(() => {
    dispatch(fetchAppliedBriefs());
  }, []);

  return (
    <ScrollView
      horizontal={false}
      style={{backgroundColor: colors.palette.white}}>
      <ScreenContainer style={{paddingTop: 10, gap: 5}}>
        <Header />
        <ProfileSetupComp />
        <Carousel title="Your Briefs" onPress={() => {}} items={briefs} />
      </ScreenContainer>
    </ScrollView>
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
