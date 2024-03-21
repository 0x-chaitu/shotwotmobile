/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    androidClientId:
      '873491061375-rjl9upklaj162q8ruacisfo2ag5uvtku.apps.googleusercontent.com',
    webClientId:
      '873491061375-uu4vgu3igi6ilpau275o42c1j8cnduc2.apps.googleusercontent.com',

  });

AppRegistry.registerComponent(appName, () => App);
