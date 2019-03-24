import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Header from '../src/components/Header'
import Home from "./views/Home";
import Post from './views/Post'
import './style/normalize.css'
import './style/index.less';

export default () => {
	return (
		<Router>
			<Switch>
				<Header>
					<Route exact path="/"  render={()=> <Redirect to="/index" push/> } />
					<Route exact path="/index" component={Home} />
					<Route exact path="/post/:id" component={Post} />
				</Header>
			</Switch>
		</Router>
	);
};
