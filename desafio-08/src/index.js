import React from 'react';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';

import Routes from './routes';
import NavigationService from './services/navigation';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}

export default App;
