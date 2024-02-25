/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Constant from '../utils/Constant';
import {colors} from '../theme/colors';
import BellIcon from '../assets/icons/BellIcon';

type Props = {
  headerText?: string;
};

const Header: FC<Props> = ({headerText}) => {
  return (
    <View
      style={{
        height: '8%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <Text
        style={{
          fontFamily: 'Poppins',
          fontSize: 20,
          color: colors?.helpers?.BLUE_GRAY,
          fontWeight: '600',
        }}
        numberOfLines={1}>
        {headerText || Constant.APP_NAME}
      </Text>

      <BellIcon />
    </View>
  );
};

export default Header;
