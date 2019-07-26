import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Home from './pages/Home';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator({
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
    })
  );
