import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import CurrentApp from './CurrentApp';

const store = configureStore({});

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CurrentApp />
      </Provider>
    );
  }
}

export default Root;
