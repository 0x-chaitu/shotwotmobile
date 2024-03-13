/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Constant from '../utils/Constant';
import {colors} from '../theme/colors';
import BellIcon from '../assets/icons/BellIcon';
import {customStyles} from '../theme/style';

type Props = {
  headerText?: string;
};

const Header: FC<Props> = ({headerText}) => {
  return (
    <View
      style={{
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <Text
        style={[customStyles.heading5, {fontFamily: 'Lato-Bold'}]}
        numberOfLines={1}>
        {headerText || Constant.APP_NAME}
      </Text>

      <BellIcon />
    </View>
  );
};

export default Header;
