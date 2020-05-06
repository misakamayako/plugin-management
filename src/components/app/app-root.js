import React, {Component} from "react";
import Header, {
	Logo,
	Tray
} from "@jetbrains/ring-ui/components/header/header";
import Footer from "@jetbrains/ring-ui/components/footer/footer";
import hubLogo from "@jetbrains/logos/hub/hub.svg";
import PropTypes from "prop-types";

import {Button, Link, Select} from "@jetbrains/ring-ui";

import appRootCss from "./app-root.module.less";

import "./app.css";


export default class AppRoot extends Component {
	static get propTypes() {
		return {
			children: PropTypes.element,
			history: PropTypes.object,
			location: PropTypes.object
		};
	}

	constructor(props) {
		super(props);
		const firstLevel = props.location.pathname.split("/")[1];
		this.state = {
			active: firstLevel,
			source: [
				{
					label: "a",
					key: "1"
				}
			],
			selected: null
		};
	}


	componentDidMount() {
		this.props.history.listen(location => {
			const firstLevel = location.pathname.split("/")[1];
			this.setState({
				active: firstLevel
			});
		});
	}


	changeRoute(e, path) {
		e.preventDefault();
		this.props.history.push(path);
	}

	onSelected(selected) {
		this.setState({
			selected
		});
	}

	render() {
		const state = this.state;
		return (
			<div className={appRootCss.viewRoot}>
				<Header theme="dark" spaced>
					<Logo
						glyph={hubLogo}
						size={Logo.Size.Size48}
					/>
					<Select
						data={state.source}
						label="搜索组件、方法或者正则表达式"
						filter={{placeholder: "输入搜索条件"}}
						selected={state.selected}
						onSelect={this.onSelected.bind(this)}
						className={appRootCss.search}
					/>
					<Link
						href="/component"
						active={state.active === "component"}
						onClick={e => this.changeRoute(e, "/component")}
					>{"组件"}</Link>
					<Link
						href="/method"
						active={state.active === "method"}
						onClick={e => this.changeRoute(e, "/method")}
					>{"方法"}</Link>
					<Link
						href="/regexp"
						active={state.active === "regexp"}
						onClick={e => this.changeRoute(e, "/regexp")}
					>{"正则"}</Link>
					<Tray>
						<Button
							primary
						>
							{"登出"}
						</Button>
					</Tray>
				</Header>
				<div className="app-content">
					{this.props.children}
				</div>
				<Footer
					center={[{
						url: "https://teamcity.jetbrains.com/showAgreement.html",
						label: "License Under MIT",
						target: "_blank"
					}]}
				/>
			</div>
		);
	}
}
