import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';



const Stack = createNativeStackNavigator();

const screens: any = [
    { name: 'BottomNavigators', component: BottomNavigator },
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