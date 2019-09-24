import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import PollsScreen from '../screens/PollsScreen';
import PollDetailScreen from '../screens/PollDetailScreen';

const AppStack = createStackNavigator({
    PollsScreen: { screen: PollsScreen },
    PollDetailScreen: { screen : PollDetailScreen }
}, {
    headerMode: 'float'
});

const AuthStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen }
}, {
    headerMode: 'none',
    initialRouteName: 'LoginScreen'
});

const AppNavigator = createSwitchNavigator({
    SplashScreen: SplashScreen,
    Auth: AuthStack,
    App: AppStack
});

const App = createAppContainer(AppNavigator);

export default App;