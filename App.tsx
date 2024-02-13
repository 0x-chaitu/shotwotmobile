import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Login from "./src/screens/Login";
import { colors } from "./src/theme/colors";
import { NativeBaseProvider } from "native-base";

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <NativeBaseProvider>
              {/* <Provider > */}
              <NavigationContainer
                // theme={{
                //   ...DefaultTheme,
                //   colors: {
                //     ...DefaultTheme.colors,
                //     background: themeColor.tint,
                //   },
                // }}
                ref={navigationRef}>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}>
                  <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
                {/* <CustomNavigation /> */}
              </NavigationContainer>
              {/* </Provider> */}
            </NativeBaseProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaView>
      <SafeAreaView edges={['bottom']} style={styles.bottomView} />
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.palette.background,
    position: 'relative',
  },

  bottomView: {
    // backgroundColor: colors.palette.white,
  },
});

export default App;