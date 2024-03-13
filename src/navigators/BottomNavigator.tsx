import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import HomeIcon from '../assets/icons/HomeIcon';
import MenuScreen from '../screens/MenuScreen';
import MenuIcon from '../assets/icons/MenuIcon';
import BriefIcon from '../assets/icons/BriefIcon';
import BriefScreen from '../screens/Briefs/BriefDeckScreen';
import ExploreIcon from '../assets/icons/ExploreIcon';
import {colors} from '../theme/colors';
import CustomText from '../components/CustomText';
import InActiveExploreIcon from '../assets/icons/InAciveExploreIcon';
import InActiveBriefIcon from '../assets/icons/InActiveBriefIcon';
import InActiveMenuIcon from '../assets/icons/InActiveMenuIcon';

const Tab = createBottomTabNavigator();

const bottomTabs = [
  {
    name: 'Explore',
    component: HomeScreen,
    icon: ExploreIcon,
    inactiveIcon: InActiveExploreIcon,
  },
  {
    name: 'Brief',
    component: BriefScreen,
    icon: BriefIcon,
    inactiveIcon: InActiveBriefIcon,
  },
  {
    name: 'Menu',
    component: MenuScreen,
    icon: MenuIcon,
    inactiveIcon: InActiveMenuIcon,
  },
];

export default function BottomNavigator({drawerNavigation}: any) {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 71},
      }}>
      {bottomTabs.map((tab, i) => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({color, size, focused}: any) =>
              focused ? (
                <tab.icon
                  color={
                    focused ? colors.palette.theme : colors.palette.heading
                  }
                />
              ) : (
                <tab.inactiveIcon />
              ),
            tabBarLabel: ({focused}) => {
              return (
                <CustomText
                  textStyle={{
                    fontFamily: 'Lato-Regular',
                    fontSize: 12,
                    color: focused
                      ? colors.palette.theme
                      : colors.palette.heading,
                    marginTop: -12,
                    marginBottom: 12,
                  }}>
                  {tab.name}
                </CustomText>
              );
            },
          }}
          key={i.toString()}
        />
      ))}
    </Tab.Navigator>
  );
}
