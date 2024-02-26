import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  NavigationContainer,
  createNavigationContainerRef,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {colors} from './src/theme/colors';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {
  LOCAL_STORAGE_KEYS,
  getItemFromAsyncStorage,
  setItemInAsyncStorage,
} from './src/hooks/useStorage';
import {useEffect} from 'react';
import {dispatch, store, useSelector} from './src/store';
import {getUserAPI} from './src/services/Auth';
import {handleUserLogin, resetState} from './src/store/slice/userSlice';
import AuthNavigator from './src/navigators/AuthNavigator';
import ScreensNavigator from './src/navigators/ScreenNavigator';
import messaging from '@react-native-firebase/messaging';
import NotificationController from './Notification';

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();

export function customNavigation(name: string, params?: object) {
  if (navigationRef.isReady()) {
    (navigationRef.navigate as any)(name, params);
  }
}

function CustomNavigation() {
  const {user, isUserLoggedIn, userLoading} = useSelector(state => state.user);
  const accessToken = getItemFromAsyncStorage(LOCAL_STORAGE_KEYS.accessToken);
  const localUser = getItemFromAsyncStorage(LOCAL_STORAGE_KEYS.userId);

  const checkAuth = async () => {
    console.log(accessToken);
    try {
      if (accessToken) {
        try {
          if (localUser) {
            const res = await getUserAPI(localUser?.id);
            if (res?.data) {
              console.log(res?.data);
              dispatch(handleUserLogin(res?.data));
            }
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch(resetState());
      }
    } catch (error) {
      console.error('Error in checkAuth:', error);
    }
  };

  //Effects
  useEffect(() => {
    checkAuth();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return () => {
      unsubscribe;
    };
  }, []);

  // useEffect(() => {
  //   if (!userLoading) {
  //     SplashScreen.hide();
  //   }
  // }, [userLoading]);

  if (!isUserLoggedIn) {
    return <AuthNavigator />;
  } else {
    return <ScreensNavigator />;
  }
}

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NotificationController />
      {/* <StatusBar backgroundColor={colors.palette.white} /> */}
      <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <NativeBaseProvider>
              <Provider store={store}>
                <NavigationContainer
                  theme={{
                    ...DefaultTheme,
                    colors: {
                      ...DefaultTheme.colors,
                    },
                  }}
                  ref={navigationRef}>
                  <CustomNavigation />
                </NavigationContainer>
              </Provider>
            </NativeBaseProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaView>
      <SafeAreaView edges={['bottom']} style={styles.bottomView} />
    </SafeAreaProvider>
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
