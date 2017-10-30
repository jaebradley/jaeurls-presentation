import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';

import Root from './containers/Root';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(Root)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root) })
}
