import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import { AppContainer } from 'react-hot-loader'

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
