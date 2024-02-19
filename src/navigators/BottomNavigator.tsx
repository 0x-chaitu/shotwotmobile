import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import HomeIcon from '../assets/icons/HomeIcon';
import MenuScreen from '../screens/MenuScreen';
import MenuIcon from '../assets/icons/MenuIcon';
import BriefIcon from '../assets/icons/BriefIcon';
import BriefScreen from '../screens/BriefScreen';

const Tab = createBottomTabNavigator();

const bottomTabs = [
  {name: 'Brief', component: BriefScreen, icon: BriefIcon},
  {name: 'Home', component: HomeScreen, icon: HomeIcon},
  {name: 'Menu', component: MenuScreen, icon: MenuIcon},
];

export default function BottomNavigator({drawerNavigation}: any) {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {bottomTabs.map((tab, i) => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({color, size, focused}: any) => {
              return <tab.icon color={focused ? '#3C77F1' : '#1C1B1F'} />;
            },
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 10,
                    color: focused ? '#3C77F1' : '#1C1B1F',
                    marginTop: -5,
                    marginBottom: 5,
                  }}>
                  {tab.name}
                </Text>
              );
            },
          }}
          key={i.toString()}
        />
      ))}
    </Tab.Navigator>
  );
}
