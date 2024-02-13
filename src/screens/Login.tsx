import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { colors } from '../theme/colors';
import InputField from '../components/InputField';

interface LoginProps { }

const Login = (props: LoginProps) => {
    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Text style={styles.header}>Create your account</Text>
                <InputField
                    placeholder="Enter Email"
                    label="E-mail Address"
                    // value={}
                    maxLength={128}
                    onChangeText={(): any => {
                    }}
                    variant={'outline'}
                    cardStyle={{}}
                    required={true}
                />
            </View>
        </ScreenContainer>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        gap: 10
    },
    header: {
        color: colors.palette.black,
        fontFamily: "Poppins-Medium",
        fontSize: 24
    }
});
