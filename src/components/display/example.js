import React from "react";
import PropTypes from "prop-types";

import xhr from "../../utils/axios";
import link from "@jetbrains/ring-ui/components/link/link";

export default class Example extends React.Component {
	static get propTypes() {
		return {
			main: PropTypes.object.isRequired,
			dependencies: PropTypes.array
		};
	}

	constructor(props) {
		super(props);
		if (props.main.javascript) {
			this.loadFile();
		}
	}

	loadFile() {

	}
}
