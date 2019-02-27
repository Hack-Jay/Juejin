import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Header from '../src/components/Header'
import Home from "./views/Home";
import './style/index.less';

export default () => {
	return (
		<Router>
			<Switch>
				<Header>
					<Route exact path="/"  render={()=> <Redirect to="/index" push/> } />
					<Route exact path="/index" component={Home} />
				</Header>
			</Switch>
		</Router>
	);
};
