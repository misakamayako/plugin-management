import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom";

import AppRoot from "../components/app/app-root";

function route() {
	return (
		<Router>
			<Switch>
				<Redirect path="/" to="/component" exact />
				<Route
					path="/"
					render={props => (
						<AppRoot {...props} />
					)}
				/>
			</Switch>
		</Router>
	);

}

export default route;
