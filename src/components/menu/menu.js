import React from "react";
import PropTypes from "prop-types";
import {PopupMenu} from "@jetbrains/ring-ui";

export default class menu extends React.Component {
	static get propTypes() {
		return {
			menuList: PropTypes.array.isRequired
		};
	}

	render() {
		return (<PopupMenu data={this.props.menuList} />);
	}
}
