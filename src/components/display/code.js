import React from "react";
import PropTypes from "prop-types";
import {Markdown} from "@jetbrains/ring-ui";

export default class Code extends React.Component {
	static get propTypes() {
		return {
			code: PropTypes.string
		};
	}

	render() {
		return (
			<Markdown source={`\`\`\`js\n${this.props.code}\`\`\``} />
		);
	}
}
