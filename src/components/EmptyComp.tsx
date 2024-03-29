/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../theme/colors';

type Props = {
  text: string;
};

const EmptyComp: FC<Props> = ({text}) => {
  return (
    <View style={{}}>
      <Text
        style={{
          color: colors?.helpers?.BLUE_GRAY,
          fontSize: 14,
        }}>
        {text || 'No Details'}
      </Text>
    </View>
  );
};

export default EmptyComp;
