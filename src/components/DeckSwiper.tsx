import {customNavigation} from '../../App';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {colors} from '../theme/colors';
import CustomText from '../components/CustomText';
import WalletIcon from '../assets/icons/WalletIcon';
import {customStyles} from '../theme/style';
import CircleTimerIcon from '../assets/icons/CircleTimerIcon';
import LinearGradient from 'react-native-linear-gradient';

interface DeckSwiperProps {
  cards: Array<any>;
  getCards: () => void;
  cardIndex: number;
}

const DeckSwiper = ({cards, getCards, cardIndex}: DeckSwiperProps) => {
  const renderCard = (card: any) => {
    console.log(card);

    return (
      <View style={styles.card}>
        <ImageBackground
          style={{flex: 1}}
          imageStyle={{borderRadius: 12}}
          source={{
            uri: `https://shotwot-test.b-cdn.net/${card?.cardImage}`,
          }}
        />
        <View
          style={{
            position: 'absolute',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '90%',
            height: '100%',
            // alignItems: 'center',
          }}>
          <View>
            <LinearGradient
              colors={['#E499FF', '#EFC1FF', '#EFC1FF']}
              useAngle={true}
              angle={95}
              locations={[0.4, 1, 1]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linearGradient}>
              <CustomText
                textStyle={{
                  color: colors.palette.body,
                  fontSize: 12,
                  fontFamily: 'Lato-Bold',
                }}>
                {card?.type}
              </CustomText>
            </LinearGradient>
          </View>
          <View
            style={{
              paddingBottom: 10,
              width: '100%',
              paddingLeft: 15,
            }}>
            <CustomText textStyle={styles.cardTitle}>{card?.title}</CustomText>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                <WalletIcon
                  color={colors.palette.white}
                  width={14}
                  height={14}
                />
                <CustomText
                  textStyle={{
                    ...customStyles.bodyLabel,
                    fontFamily: 'Lato-Regular',
                    color: colors.palette.white,
                  }}>
                  ₹{card?.reward?.toLocaleString()}
                </CustomText>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                <CircleTimerIcon
                  color={colors.palette.white}
                  width={14}
                  height={14}
                />
                <Text style={styles.deadline}>Ends in 23 days</Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                <CircleTimerIcon
                  color={colors.palette.white}
                  width={14}
                  height={14}
                />
                <Text style={styles.deadline}>
                  {card?.camera?.DSLR ? 'DSLR' : 'Camera'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Swiper
      containerStyle={{
        backgroundColor: 'transparent',
        marginTop: 10,
      }}
      cardHorizontalMargin={0}
      cardVerticalMargin={0}
      cards={cards}
      renderCard={renderCard}
      onSwipedAll={() => {
        getCards();
      }}
      onTapCard={cardIndex => {
        customNavigation('BriefDetails', {brief: cards[cardIndex]});
      }}
      onSwipedRight={index => {
        customNavigation('BriefDetails', {brief: cards[index]});
      }}
      // stackSeparation={20}
      // stackScale={0}
      // showSecondCard={false}
      // stackSize={3}
      key={cards.length}
      overlayLabels={{
        bottom: {
          title: 'BLEAH',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1,
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
        },
        left: {
          title: 'NOPE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1,
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: -30,
            },
          },
        },
        right: {
          title: 'LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1,
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: 30,
            },
          },
        },
        top: {
          title: 'SUPER LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1,
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
        },
      }}
      animateOverlayLabelsOpacity
      animateCardOpacity></Swiper>
  );
};

export default DeckSwiper;

const styles = StyleSheet.create({
  container: {},
  card: {
    flex: 0.95,
    borderRadius: 12,
    // borderWidth: 2,
    // borderColor: '#E8E8E8',
    width: Dimensions.get('window').width - 40,
    // justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 130,
  },
  cardTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.palette.white,
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
  linearGradient: {
    position: 'absolute',
    marginTop: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});
