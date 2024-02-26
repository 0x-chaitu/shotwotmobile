import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {FC, useEffect} from 'react';

import HangoutVideoSvg from '../assets/icons/HangoutVideoSvg';
import {AllBriefProps} from '../utils/TyescriptProps';
import {colors} from '../theme/colors';
import EmptyComp from './EmptyComp';
import CustomButton from './CustomButton';
import {dispatch, useSelector} from '../store';
import {fetchAppliedBriefs} from '../store/slice/briefSlice';
import Header from './Header';
import {customStyles} from '../theme/style';
import {CountDaysLeft} from '../helper/DaysLeft';

type Props = {
  title: string;
  onPress: () => void;
  items: Array<any>;
};

const Carousel: FC<Props> = ({title, onPress, items = []}) => {
  const renderItems = ({item}: {item: AllBriefProps}) => {
    return (
      <View style={styles.cardContainer}>
        <ImageBackground
          style={styles.imageStyle}
          imageStyle={{
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#D1D5DB',
          }}
          source={{
            uri: `https://shotwot-test.b-cdn.net/${item?.brief?.cardImage}`,
          }}
        />
        <Text style={customStyles.semiBoldtitle}>{item?.brief?.title}</Text>
        <Text style={customStyles.semiBoldtitle}>
          ${item?.brief?.reward}
          <Text style={customStyles.mediumTitle}> reward</Text>
        </Text>
        <Text style={customStyles.mediumTitle}>
          Ends in {CountDaysLeft(item?.brief?.expiry)} days
        </Text>
      </View>
    );
  };

  return (
    <View style={{}}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title || 'NA'}</Text>
        <CustomButton
          buttonText="See all"
          backgroundColor={colors?.helpers?.GRAYISH_WHITE}
          buttonTextColor={colors?.palette?.black}
          borderColor={colors?.helpers?.SILVER_GRAY}
          isLoading={false}
          width={'25%'}
          onPress={onPress}
        />
      </View>
      <FlatList
        data={items}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<EmptyComp text="No Briefs available" />}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
    color: colors?.helpers?.BLUE_GRAY,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardContainer: {
    borderRadius: 12,
    borderColor: '#E8E8E8',
    width: Dimensions.get('window').width - 120,
    backgroundColor: 'white',
    gap: -4,
    marginRight: 5,
  },
  imageStyle: {width: '100%', height: 160, marginBottom: 5},
});
