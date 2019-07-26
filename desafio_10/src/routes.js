import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          screen: createStackNavigator(
            {
              Home,
            },
            {
              defaultNavigationOptions: {
                headerTransparent: true,
                headerTintColor: '#fff',
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
                headerLayoutPreset: 'center',
              },
            }
          ),
        }),
        App: createBottomTabNavigator({
          Home,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
