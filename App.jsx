// App.js

import * as React from 'react';
import StackNavigator from './navigation/Navigation';
import { Provider } from 'react-redux';
import store from './store/store.js';
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
     </Provider>
  );
};

export default App;
