/**
 * @format
 */

import {AppRegistry} from 'react-native';
import bgMessaging from './bgMessaging';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
