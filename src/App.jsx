import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home";
import './style/index.less';

export default () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"  render={()=> <Redirect to="/index" push/> } />
				<Route exact path="/index" component={Home}/> } />
			</Switch>
		</Router>
	);
};
