import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'sanitize.css/sanitize.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/store-index'

const target = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker();
