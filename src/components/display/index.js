import React from "react";
import PropTypes from "prop-types";
import {Tabs, Tab} from "@jetbrains/ring-ui/components/tabs/tabs";

import xhr from "../../utils/axios";

const Code = React.lazy(() => import("./code"));
const Example = React.lazy(() => import("./Example"));
const Markdown = React.lazy(() => import("./markdown"));

export default class Display extends React.Component {
	static get propTypes() {
		return {
			location: PropTypes.object.isRequired,
			history: PropTypes.object
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			code: "",
			example: {},
			markdown: ""
		};
	}


	componentDidMount() {
		this.getDetail();
		// this.listener = this.props.location.listener(location => {
		// 	console.log(location);
		// });
	}

	listener = {};

	getDetail() {
		this.setState({
			loading: true
		});
		xhr({
			url: `/detail/${this.props.location.match}`
		}).then(({data}) => {
			this.setState({
				code: data.code,
				example: data.example,
				markdown: data.markdown,
				loading: false
			});
		});
	}

	render() {
		const state = this.state;
		return (
			<Tabs theme="dark">
				{state.markdown
					// eslint-disable-next-line max-len
					? <Tab title="文档"><Markdown markdown={state.markdown} /></Tab>
					: null
				}
				{state.code
					? <Tab title="代码"><Code code={state.code} /></Tab>
					: null
				}
				{state.example?.main
					? <Tab title="示例"><Example {...state.example} /></Tab>
					: null

				}
			</Tabs>
		);
	}
}
