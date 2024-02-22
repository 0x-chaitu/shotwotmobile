import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import ScreenContainer from '../ScreenContainer';
import {colors} from '../../theme/colors';
import FilterIcon from '../../assets/icons/FilterIcon';
import Swiper from 'react-native-deck-swiper';
import {getBriefsAPI} from '../../services/Brief';
import DeckSwiper from '../../components/DeckSwiper';

interface BriefScreenProps {}

const BriefScreen = (props: BriefScreenProps) => {
  const swiperRef = useRef(null);
  const [briefs, setBriefs] = useState([]);
  const [cardIndex, setCardIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getBriefs = async () => {
    setLoading(true);
    try {
      const res = await getBriefsAPI();
      console.log(res);

      // @ts-ignore
      if (res?.success) {
        setBriefs(briefs.concat(res?.data));
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBriefs();
  }, []);

  useEffect(() => {
    console.log(cardIndex);
  }, [cardIndex]);

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
        {briefs?.length > 0 && !loading ? (
          <DeckSwiper
            cards={briefs}
            getCards={() => {
              getBriefs();
            }}
            cardIndex={cardIndex}
          />
        ) : (
          <Text style={{color: 'black'}}>Loading</Text>
        )}
      </View>
    </ScreenContainer>
  );
};

export default BriefScreen;

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
