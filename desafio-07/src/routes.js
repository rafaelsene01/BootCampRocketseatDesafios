import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Cart,
  })
);

export default Routes;
