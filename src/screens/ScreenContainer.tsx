import React from 'react';
import { StatusBar, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';


interface ScreenContainerProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export default function ScreenContainer({
    children,
    style = {},
}: ScreenContainerProps) {
    return <View style={[styles.screenWrapper, style]}>
        <StatusBar backgroundColor={colors.palette.blue50} />
        {children}</View>;
}

const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        backgroundColor: colors.palette.blue50,
        padding: 20,
        justifyContent: 'flex-start',
    },
});