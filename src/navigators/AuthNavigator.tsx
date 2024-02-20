import React from 'react';
import {TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {SCREEN_NAMES} from './Constants';
import {Login, SplashScreen} from '../screens';
import {colors} from '../theme/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  const screens = [
    {
      id: 1,
      name: SCREEN_NAMES.SplashScreen,
      title: undefined,
      component: SplashScreen,
    },
    {
      id: 2,
      name: SCREEN_NAMES.LoginScreen,
      title: 'Login Screen',
      component: Login,
    },
  ];

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: {
        //   backgroundColor: colors?.palette?.white,
        // },
      }}>
      {screens.map(screen => (
        <Stack.Screen
          name={screen.name}
          key={screen?.id}
          options={({navigation}) => ({
            title: screen?.title,
            headerShown: !!screen?.title,
            headerTitleStyle: {
              fontSize: 20,
            },
            headerLeft: () =>
              screen?.title && (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{marginLeft: 20}}>
                  <Feather
                    name="arrow-left"
                    size={24}
                    color={colors?.palette?.black}
                  />
                </TouchableOpacity>
              ),
          })}>
          {() => <screen.component />}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
}
