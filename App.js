import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { Router } from './src/router/Router';
import { CustomTheme } from './src/hooks/useTheme';
import Authentication from './src/hooks/useAuthentication';

const App = () => {
  return (
    <Provider store={store}>
      <CustomTheme>
        <Authentication>
          <Router />
        </Authentication>
      </CustomTheme>
    </Provider>
  );
};

export default App;
