import React, {Component} from "react";
import Header, {
	Logo,
	Tray
} from "@jetbrains/ring-ui/components/header/header";
import Footer from "@jetbrains/ring-ui/components/footer/footer";
import hubLogo from "@jetbrains/logos/hub/hub.svg";
import PropTypes from "prop-types";

import {Button, Link, QueryAssist} from "@jetbrains/ring-ui";
import {Route} from "react-router-dom";

import Display from "../display";
import Menu from "../menu/menu";


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
				<Header theme="dark" spaced className={appRootCss.header}>
					<Logo
						glyph={hubLogo}
						size={Logo.Size.Size48}
					/>
					<div style={{width: 250, paddingTop: 16}}>
						<QueryAssist
							dataSource={state.source}
							theme="dark"
							glass
						/>
					</div>
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
					<Route
						path="/:type/:detail"
						render={props => (
							<React.Fragment>
								<Menu {...props} />
								<Display {...props} />
							</React.Fragment>
						)}
					/>
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
