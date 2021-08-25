import React, { Component } from "react";
import "./index.css";
import { Button } from "antd";
import RandomTags from "../../pages/randomtags";
import Hot from "../../pages/hot";
import About from "../../pages/about";

import { Switch, Route, Redirect } from "react-router-dom";
import Blogs from "../../pages/blogs";
import Message from "../../pages/message";
import Notfound from "../../pages/notfound";
import Login from "../../pages/login";
export default class Home extends Component {
  render() {
    return (
      <div className="container clearfix">
        <Button
          type="primary"
          className="create-button"
          onClick={() => {
            this.props.history.push("/newblog");
          }}
        >
          new blog
        </Button>
        <div className="content-left ">
          <Switch>
            <Route path="/home/about" component={About} />
            <Route path="/home/message" component={Message} />
            <Route path="/home/login" component={Login} />
            <Route path="/home/" component={Blogs} />
            <Route path="/notfound" component={Notfound} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
        <div className="content-right ">
          <RandomTags></RandomTags>
          <Hot></Hot>
        </div>
      </div>
    );
  }
}
