import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import menuCss from "./menu.module.less";
import {loadCheerioRoot} from "enzyme/src/Utils";

export default class menu extends React.Component {
	static get propTypes() {
		return {
			location: PropTypes.object.isRequired,
			match: PropTypes.object.isRequired,
			history: PropTypes.object.isRequired
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			menuList: [
				{label: "ddd", key: 0, href: "ddd"},
				{label: "www", key: 1, href: "www"}
			],
			active: -1
		};
	}

	handleSelected(label) {
		this.setState({
			active: label.key
		});
	}

	listen = this.props.history.listen(() => {
		this.setState((state, props) => {
			const detail = props.match.params.detail;
			return {active: state.menuList.findIndex(t => t.label === detail)};
		});
	});

	render() {
		return (
			<div>
				{this.state.menuList.map(t => (
					<Link
						to={t.href}
						key={t.key}
						className={[
							menuCss.menu,
							(t.key === this.state.active) && menuCss.active
						].join(" ")}
					>
						{t.label}
					</Link>
				))}
			</div>
		);
	}
}
