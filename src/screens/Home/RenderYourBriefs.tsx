import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useEffect} from 'react';

import HangoutVideoSvg from '../../assets/icons/HangoutVideoSvg';
import {AllBriefProps} from '../../utils/TyescriptProps';
import {colors} from '../../theme/colors';
import EmptyComp from '../../components/EmptyComp';
import CustomButton from '../../components/TouchableButton';
import {dispatch, useSelector} from '../../store';
import {fetchAppliedBriefs} from '../../store/slice/briefSlice';
import Header from '../../components/Header';
import {customStyles} from '../../theme/style';
import {CountDaysLeft} from '../../helper/DaysLeft';
import {customNavigation} from '../../../App';
import CustomText from '../../components/CustomText';
import CircleRightIcon from '../../assets/icons/CircleRightIcon';
import LinearGradient from 'react-native-linear-gradient';
import WalletIcon from '../../assets/icons/WalletIcon';
import CircleTimerIcon from '../../assets/icons/CircleTimerIcon';

export const RenderYourBrief = ({
  renderProp,
  title = '',
  explore = '',
}: any) => {
  const {briefs, isLoading} = useSelector(state => state?.brief);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => customNavigation('UploadAsset', {brief: item})}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: `https://shotwot-test.b-cdn.net/${item?.brief?.cardImage}`,
        }}
      />
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
          {item?.brief?.type}
        </CustomText>
      </LinearGradient>
      <View style={styles.detailsContainer}>
        <CustomText
          textStyle={{...customStyles.heading8, fontFamily: 'Lato-Bold'}}>
          {item?.brief?.title}
        </CustomText>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <WalletIcon />
            <CustomText
              textStyle={{
                ...customStyles.bodyLabel,
                fontFamily: 'Lato-Regular',
                color: colors.palette.discountSucc,
              }}>
              ₹{item?.brief?.reward?.toLocaleString()}
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <CircleTimerIcon />
            <CustomText
              textStyle={{
                ...customStyles.bodyLabel,
                fontFamily: 'Lato-Regular',
              }}>
              {CountDaysLeft(item?.brief?.expiry)} Days
            </CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{}}>
      {renderProp()}
      <FlatList
        data={briefs}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<EmptyComp text="No Briefs available" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 6,
    borderColor: '#E8E8E8',
    width: 184,
    backgroundColor: 'white',
    marginRight: 12,
    height: 285,
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  linearGradient: {
    position: 'absolute',
    marginTop: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  detailsContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    gap: 7,
  },
});
