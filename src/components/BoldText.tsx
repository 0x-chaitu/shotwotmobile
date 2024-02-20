/* eslint-disable react-native/no-inline-styles */

import {Text} from 'react-native';
import React, {FC} from 'react';

type TextProps = {
  text: string;
};

const BoldText: FC<TextProps> = ({text}) => {
  return (
    <Text
      style={{
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
      }}>
      {text ? text : 'NA'}
    </Text>
  );
};

export default BoldText;
