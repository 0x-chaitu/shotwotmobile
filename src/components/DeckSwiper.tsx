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

interface DeckSwiperProps {
  cards: Array<any>;
  getCards: () => void;
  cardIndex: number;
}

const DeckSwiper = ({cards, getCards, cardIndex}: DeckSwiperProps) => {
  const renderCard = (card: any) => {
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
            alignItems: 'center',
          }}>
          <View></View>
          <View
            style={{
              paddingBottom: 10,
              width: '100%',
              paddingLeft: 15,
            }}>
            <Text style={styles.cardTitle}>{card?.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.price}>${card?.reward}</Text>
              <Text style={styles.deadline}>Ends in 23 days</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Swiper
      backgroundColor={'white'}
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
      stackSeparation={0}
      stackScale={0}
      stackSize={10}
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
    flex: 1,
    borderRadius: 12,
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
