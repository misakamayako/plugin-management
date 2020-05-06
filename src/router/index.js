import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import AppRoot from "../components/app/app-root";

function route() {
	return (
		<Router>
			<Redirect path="/" to="/component" exact />
			<Route
				path="/"
				to="/component"
				render={props => (
					<AppRoot {...props}>
						<div>{"d"}</div>
					</AppRoot>
				)}
			/>
		</Router>
	);

}

export default route;
