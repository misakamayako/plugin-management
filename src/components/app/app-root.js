import React, {Component} from "react";
import Header, {
  Logo,
  Tray,
} from "@jetbrains/ring-ui/components/header/header";
import Footer from "@jetbrains/ring-ui/components/footer/footer";
import hubLogo from "@jetbrains/logos/hub/hub.svg";
import PropTypes from "prop-types";

import "./app.css";
import {Button} from "@jetbrains/ring-ui";
import {Link} from "react-router-dom";

export default class AppRoot extends Component {
  propTypes: {
    children: PropTypes.element
  }
  componentDidMount() {
  }


  render() {
    return (
      <div>
        <Header theme="dark" spaced>
          <a href="/">
            <Logo
              glyph={hubLogo}
              size={Logo.Size.Size48}
            />
          </a>
          <Link to="/component">{"组件"}</Link>
          <Link to="/method">{"方法"}</Link>
          <Link to="/regexp">{"正则"}</Link>
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
        <Footer />
      </div>
    );
  }
}
