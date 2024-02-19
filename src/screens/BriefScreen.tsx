import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import ScreenContainer from './ScreenContainer';
import {colors} from '../theme/colors';
import FilterIcon from '../assets/icons/FilterIcon';
import Swiper from 'react-native-deck-swiper';

interface BriefScreenProps {}

const BriefScreen = (props: BriefScreenProps) => {
  return (
    <ScreenContainer style={{paddingTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: colors.palette.grey800,
            fontFamily: 'Poppins-Medium',
            fontSize: 22,
          }}>
          Briefs
        </Text>
        <FilterIcon />
      </View>
      <View style={{flex: 1}}>
        <Swiper
          backgroundColor={'white'}
          cardHorizontalMargin={0}
          cardVerticalMargin={0}
          cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={card => {
            return (
              <View style={styles.card}>
                <ImageBackground
                  style={{flex: 1}}
                  source={{
                    uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    width: '90%',
                    height: '100%',
                    alignItems: 'center',
                  }}>
                  <View></View>
                  <View
                    style={{
                      paddingBottom: 10,
                    }}>
                    <Text style={styles.cardTitle}>
                      New York : Urban Stories in the City That Never Sleeps
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.price}>$122</Text>
                      <Text style={styles.deadline}>Ends in 23 days</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          onSwiped={cardIndex => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          stackSeparation={0}
          stackSize={10}></Swiper>
      </View>
    </ScreenContainer>
  );
};

export default BriefScreen;

const styles = StyleSheet.create({
  container: {},
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    width: Dimensions.get('window').width - 40,
    // justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 110,
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    paddingBottom: 5,
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#27DC8D',
  },
  deadline: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
});
