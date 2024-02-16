import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { colors } from '../theme/colors';

interface HomeScreenProps { }

const HomeScreen = (props: HomeScreenProps) => {
    return (
        <ScreenContainer style={{ paddingTop: 10 }}>
            <Text
                style={styles.title}
            >Shotwot</Text>
            <View style={styles.profileContainer}>
                <Text style={{
                    color: "#3C77F1",
                    fontFamily: 'Poppins-Medium',
                }}>Setup your profile</Text>
                <Text style={{
                    color: colors.palette.grey800,
                    fontSize: 12,
                    fontFamily: "Poppins-Regular",
                    textAlign: 'left'
                }}>Craft a captivating profile that reflects your unique creative journey</Text>
            </View>
        </ScreenContainer>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {},
    title: {
        color: colors.palette.grey800, fontSize: 24, fontFamily: "Poppins-Bold"
    },
    profileContainer: {
        backgroundColor: "#E4F0FF",
        padding: 10,
        borderRadius: 10
    }
});
