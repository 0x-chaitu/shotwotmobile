/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Image} from 'react-native';
import React, {FC} from 'react';

import HangoutVideoSvg from '../assets/icons/HangoutVideoSvg';
import {AllBriefProps} from '../utils/TyescriptProps';
import {colors} from '../theme/colors';
import EmptyComp from './EmptyComp';
import CustomButton from './CustomButton';

type Props = {
  title: string;
  arrayData: any[];
  onPress: () => void;
};

const BriefsCarousel: FC<Props> = ({title, arrayData, onPress}) => {
  const renderItems = ({item}: {item: AllBriefProps}) => {
    return (
      <View
        style={{
          height: '40%',
          width: '80%',
          padding: 10,
          borderStartColor: 'red',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 20,
            zIndex: 1,
            left: 20,
          }}>
          <HangoutVideoSvg size={40} />
        </View>

        <View
          style={{
            borderRadius: 6,
            shadowColor: colors?.palette?.black,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 1,
            elevation: 2,
          }}>
          <Image
            source={{
              uri: item?.uri,
            }}
            style={{
              height: '22%',

              borderRadius: 6,
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
          }}>
          <Text
            style={{
              color: colors?.palette?.black,
              fontSize: 18,
              fontWeight: '600',
            }}
            numberOfLines={2}>
            {item?.title}
          </Text>
          <Text
            style={{
              color: 'green',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 8,
            }}
            numberOfLines={2}>
            {'$' + item?.cost}
          </Text>
          <Text
            style={{
              color: colors?.helpers?.GRAYISH_BLUE,
              fontSize: 12,
              fontWeight: '600',
              marginTop: 8,
            }}
            numberOfLines={2}>
            {'Ends in ' + item?.remainingDays + ' days'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        height: '50%',
        marginVertical: 10,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
            color: colors?.helpers?.BLUE_GRAY,
          }}>
          {title || 'NA'}
        </Text>
        <CustomButton
          buttonText="See all"
          buttonRadius={6}
          backgroundColor={colors?.helpers?.GRAYISH_WHITE}
          buttonTextColor={colors?.palette?.black}
          borderColor={colors?.helpers?.SILVER_GRAY}
          isLoading={false}
          width={'25%'}
          onPress={onPress}
        />
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <FlatList
          data={arrayData}
          renderItem={renderItems}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<EmptyComp text="No Briefs available" />}
        />
      </View>
    </View>
  );
};

export default BriefsCarousel;
