import React from "react";
import PropTypes from "prop-types";
import {Markdown} from "@jetbrains/ring-ui";

export default class ReadMe extends React.Component {
	static get propTypes() {
		return {
			markdown: PropTypes.string
		};
	}

	render() {
		return (
			<Markdown source={this.props.markdown} />
		);
	}
}
