import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import BriefDetailsScreen from '../screens/Briefs/BriefDetailsScreen';
import ApplyBriefScreen from '../screens/Briefs/ApplyBriefScreen';
import UploadAssetScreen from '../screens/UploadAssetScreen';

const Stack = createNativeStackNavigator();

const screens: any = [
  {name: 'BottomNavigators', component: BottomNavigator},
  {name: 'BriefDetails', component: BriefDetailsScreen},
  {name: 'ApplyBrief', component: ApplyBriefScreen},
  {name: 'UploadAsset', component: UploadAssetScreen},
];

export default function ScreensNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
      }}>
      {screens.map((screen: any, i: any) => (
        <Stack.Screen
          name={screen.name}
          component={screen.component}
          key={i.toString()}
        />
      ))}
    </Stack.Navigator>
  );
}
