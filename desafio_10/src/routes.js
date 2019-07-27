import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Home from './pages/Home';
import Meetups from './pages/Meetups';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator(
          {
            screen: createStackNavigator(
              {
                Home,
                Meetups,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: '#fff',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                  headerRightContainerStyle: {
                    marginRight: 20,
                  },
                },
                headerLayoutPreset: 'center',
              }
            ),
            screen2: createStackNavigator(
              {
                SignIn,
                SignUp,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: '#fff',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                  headerRightContainerStyle: {
                    marginRight: 20,
                  },
                },
                headerLayoutPreset: 'center',
              }
            ),
          },
          {
            resetOnBlur: true,
          }
        ),
        App: createBottomTabNavigator(
          {
            Home,
            Meetups,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#402845',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
