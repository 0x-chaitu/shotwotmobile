import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ScreenContainer from './ScreenContainer';
import {colors} from '../theme/colors';
import Header from '../components/Header';
import {ScrollView} from 'react-native';
import {dispatch, useSelector} from '../store';
import {fetchAppliedBriefs} from '../store/slice/briefSlice';
import {RenderYourBrief} from './Home/RenderYourBriefs';
import CustomText from '../components/CustomText';
import CircleRightIcon from '../assets/icons/CircleRightIcon';
import {customStyles} from '../theme/style';
import ProfileNeedsAttention from './Home/ProfileNeedsAttention';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  React.useEffect(() => {
    dispatch(fetchAppliedBriefs());
  }, []);

  return (
    <ScrollView
      horizontal={false}
      style={{backgroundColor: colors.palette.background}}>
      <ScreenContainer style={{paddingTop: 0, gap: 8}}>
        <Header headerText="Explore" />
        <ProfileNeedsAttention
          renderProp={() => (
            <View style={styles.titleContainer}>
              <CustomText textStyle={styles.heading}>
                Needs Attention
              </CustomText>
            </View>
          )}
        />
        <RenderYourBrief
          title="Your Briefs"
          explore="View"
          onPress={() => {}}
          renderProp={() => (
            <View style={styles.titleContainer}>
              <CustomText textStyle={styles.heading}>Your Briefs</CustomText>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                <CustomText textStyle={styles.viewAll}>View All</CustomText>
                <CircleRightIcon />
              </TouchableOpacity>
            </View>
          )}
        />
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
    fontFamily: 'Lato-Light',
  },
  profileContainer: {
    backgroundColor: '#E4F0FF',
    padding: 10,
    borderRadius: 10,
  },
  heading: {
    ...customStyles.heading7,
    color: '#695A7E',
    fontFamily: 'Lato-Bold',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
  },
  viewAll: {
    color: colors.palette.theme,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
});
