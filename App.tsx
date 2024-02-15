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
import {
  LOCAL_STORAGE_KEYS,
  getItemFromAsyncStorage,
  setItemInAsyncStorage,
} from './src/hooks/useStorage';
import { useEffect } from "react";
import { dispatch, store, useSelector } from "./src/store";
import { getUserAPI } from "./src/services/Auth";
import { handleUserLogin, resetState } from "./src/store/slice/userSlice";

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();


function CustomNavigation() {
  const { user, isUserLoggedIn, userLoading } = useSelector(state => state.user);
  const accessToken = getItemFromAsyncStorage(LOCAL_STORAGE_KEYS.accessToken);
  const localUser = getItemFromAsyncStorage(LOCAL_STORAGE_KEYS.userId);

  const checkAuth = async () => {
    console.log(accessToken);
    try {
      if (accessToken) {
        try {
          if (localUser) {
            const res = await getUserAPI(localUser?.id)
            dispatch(handleUserLogin(res?.data?.user));
          }
        } catch (error) {

        }
      } else {
        dispatch(resetState())
      }
    } catch (error) {
      console.error('Error in checkAuth:', error);
    }
  };



  //Effects
  useEffect(() => {
    checkAuth();
    return () => {
    };
  }, []);

  // useEffect(() => {
  //   if (!userLoading) {
  //     SplashScreen.hide();
  //   }
  // }, [userLoading]);

  if (!isUserLoggedIn) {
    return <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>;
  }
  if (user) {
    // return <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    // </Stack.Navigator>;
  }
  return null;
}

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <NativeBaseProvider>
              <Provider store={store}>
                <NavigationContainer
                  // theme={{
                  //   ...DefaultTheme,
                  //   colors: {
                  //     ...DefaultTheme.colors,
                  //     background: themeColor.tint,
                  //   },
                  // }}
                  ref={navigationRef}>

                  <CustomNavigation />
                </NavigationContainer>
              </Provider>
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