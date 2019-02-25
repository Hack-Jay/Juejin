import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import './style/normalize.css'

ReactDom.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
		const App = require('./App.jsx').default
		ReactDom.render(<App />, document.getElementById('root'))
  })
}