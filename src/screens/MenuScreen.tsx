//@ts-nocheck

import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ScreenContainer from './ScreenContainer';
import {colors} from '../theme/colors';
import InputField from '../components/InputField';
import GoBackIcon from '../assets/icons/GoBackIcon';
import {customNavigation} from '../../App';
import {dispatch, useSelector} from '../store';
import TextAreaField from '../components/TextAreaField';
import TouchableButton from '../components/TouchableButton';
import {resetState} from '../store/slice/userSlice';
import {
  LOCAL_STORAGE_KEYS,
  removeItemFromAsyncStorage,
} from '../hooks/useStorage';

interface MenuScreenProps {}

const MenuScreen = (props: MenuScreenProps) => {
  const {user, userLoading} = useSelector(state => state.user);
  console.log(user);

  return (
    <ScreenContainer style={{paddingTop: 10, gap: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <GoBackIcon
          style={{marginBottom: 6, marginRight: 10}}
          onPress={() => customNavigation('Home')}
        />
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{height: 100, width: 100, borderRadius: 1200}}
          source={{
            uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
          }}
        />
      </View>
      <Text style={[styles.title, {fontSize: 20}]}>Personal Details</Text>
      <InputField
        placeholder="email"
        rightElement={<Text style={styles.changeStyle}>Change</Text>}
        value={user?.email ?? ''}
        isDisabled
        _disabled={{
          opacity: 100,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <InputField
          width={'1/2'}
          placeholder="firstname"
          value={user?.firstname}
        />
        <View style={{width: 10}} />
        <InputField
          width={'1/2'}
          placeholder="lastname"
          value={user?.lastname}
        />
      </View>
      <InputField placeholder="username" value={user?.username} />
      <TextAreaField placeholder="Bio" />
      <TouchableButton
        placeHolder={'Sign Out'}
        style={{
          padding: 12,
          backgroundColor: colors.palette.theme,
        }}
        onPress={() => {
          dispatch(resetState());
          removeItemFromAsyncStorage(LOCAL_STORAGE_KEYS.accessToken);
          removeItemFromAsyncStorage(LOCAL_STORAGE_KEYS.userId);
        }}
      />
    </ScreenContainer>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.palette.grey800,
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  imageContainer: {
    alignItems: 'center',
  },
  changeStyle: {
    color: '#3C77F1',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginRight: 10,
  },
});
