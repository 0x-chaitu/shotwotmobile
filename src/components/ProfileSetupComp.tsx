/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';

export default function ProfileSetupComp() {
  const completionPercentage = 15; // Set your completion percentage here

  return (
    <View
      style={{
        marginVertical: 6,
        height: '17%',
        // width:wp(90)
        backgroundColor: colors?.helpers?.GENTLE_BREEZE,
        borderRadius: 6,
        flexDirection: 'row',
        // overflow: "hidden",
      }}>
      <View
        style={{flex: 4.5, justifyContent: 'center', paddingHorizontal: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: colors?.palette?.primaryBlue,
          }}>
          Set up your profile
        </Text>
        <Text
          style={{
            marginTop: 6,
            fontSize: 12,
            color: colors?.palette?.grey800,
            fontWeight: '400',
          }}>
          Craft a captivating profile that reflects your unique creative journey
        </Text>
        <Text
          style={{
            marginTop: 14,
            fontSize: 12,
            color: colors?.palette?.grey800,
            fontWeight: '700',
          }}>
          Start
        </Text>
      </View>
      <View style={{flex: 1.5, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 3,
            borderColor: colors?.palette?.primaryBlue,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: colors?.palette?.primaryBlue,
              fontWeight: '700',
            }}>{`${completionPercentage}%`}</Text>
        </View>
      </View>
    </View>
  );
}
