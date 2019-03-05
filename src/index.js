import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import App from './App.jsx';
import reducer from './redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
))

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
		const App = require('./App.jsx').default
		ReactDom.render(<App />, document.getElementById('root'))
  })
}