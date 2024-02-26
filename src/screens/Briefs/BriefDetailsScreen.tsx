import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import ScreenContainer from '../ScreenContainer';
import {colors} from '../../theme/colors';
import {CountDaysLeft} from '../../helper/DaysLeft';
import CircleTickIcon from '../../assets/icons/CircleTickIcon';
import CircleCrossIcon from '../../assets/icons/CircleCrossIcon';
import Tags from '../../components/Tags';
import CustomButton from '../../components/Button';
import {customNavigation} from '../../../App';

interface BriefDetailsProps {
  route: {params?: {brief?: any}};
}

const BriefDetailsScreen = ({route}: BriefDetailsProps) => {
  const brief = route?.params?.brief;

  return (
    <ScrollView
      horizontal={false}
      style={{backgroundColor: colors.palette.white}}>
      <ScreenContainer style={{gap: -3}}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: `https://shotwot-test.b-cdn.net/${brief?.cardImage}`,
          }}
        />
        <Text style={styles.title}>{brief?.title}</Text>
        <Text style={styles.description}>{brief?.description}</Text>
        <View style={styles.budgetDuration}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.heading}>Budget</Text>
            <Text style={styles.reward}>${brief?.reward}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.heading}>Duration</Text>
            <Text style={styles.reward}>
              {CountDaysLeft(brief?.expiry)}days
            </Text>
          </View>
        </View>
        <Text style={styles.title}>Camera</Text>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          {brief?.camera?.DSLR ? <CircleTickIcon /> : <CircleCrossIcon />}
          <Text style={styles.heading}>DSLR</Text>
          {brief?.camera?.Mobile ? <CircleTickIcon /> : <CircleCrossIcon />}
          <Text style={styles.heading}>Mobile</Text>
        </View>
        {brief?.tags?.length > 0 ? (
          <>
            <Text style={styles.title}>Tags</Text>
            <Tags tags={brief?.tags} />
          </>
        ) : null}
        {brief?.images?.length > 0 ? (
          <>
            <Text style={styles.title}>Things worth shooting</Text>
            <FlatList
              data={brief?.images || []}
              horizontal
              renderItem={({item}) => {
                return (
                  <Image
                    style={{
                      height: 190,
                      width: Dimensions.get('screen').width / 1.5,
                      borderColor: '#d35647',
                      borderRadius: 12,
                      resizeMode: 'cover',
                      margin: 8,
                    }}
                    source={{
                      uri: `https://shotwot-test.b-cdn.net/${item}`,
                    }}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        ) : null}
        {brief?.shotwotIdeas?.length > 0 ? (
          <>
            <Text style={styles.title}>Shotwot ideas</Text>
            <FlatList
              data={brief?.shotwotIdeas || []}
              horizontal
              renderItem={({item}) => {
                return (
                  <View style={styles.ideaContainer}>
                    <Text
                      style={[styles.title, {color: colors.palette.grey800}]}>
                      {item?.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: colors.palette.gray500,
                      }}>
                      {item?.description}
                    </Text>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        ) : null}

        <Text style={styles.title}>Requirements</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.requirementsContainer}>
            <Text style={[styles.requirement, {}]}>
              Resolution {brief?.resolution}
            </Text>
          </View>
          <View style={styles.requirementsContainer}>
            <Text style={[styles.requirement, {}]}>{brief?.assets} Clips</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View style={styles.requirementsContainer}>
            <Text style={[styles.requirement, {}]}>
              {brief?.duration} Duration
              <Text style={{fontSize: 12, fontFamily: 'Poppins-Medium'}}>
                sec
              </Text>
            </Text>
          </View>
          <View style={styles.requirementsContainer}>
            <Text style={[styles.requirement, {}]}>
              Frame rate {brief?.frameRate}
            </Text>
          </View>
        </View>
        <CustomButton
          _pressed={{
            opacity: 80,
          }}
          placeholder="Apply"
          onPress={() => {
            customNavigation('ApplyBrief', {brief});
          }}
        />
      </ScreenContainer>
    </ScrollView>
  );
};

export default BriefDetailsScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
  },
  heading: {
    color: colors.palette.grey600,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    paddingRight: 5,
  },
  reward: {
    color: colors.palette.grey600,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  description: {
    color: colors.palette.gray500,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  budgetDuration: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  image: {
    height: 250,
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
  },
  ideaContainer: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 7,
    borderRadius: 10,
    borderColor: colors.palette.grey100,
    width: Dimensions.get('screen').width / 1.8,
    marginRight: 15,
  },
  requirementsContainer: {
    borderWidth: 1,
    paddingVertical: 5,
    marginVertical: 7,
    borderRadius: 5,
    borderColor: colors.palette.grey100,
    width: '48%',
    alignItems: 'center',
  },
  requirement: {
    fontSize: 16,
    color: colors.palette.grey600,
    fontFamily: 'Poppins-Bold',
  },
});
