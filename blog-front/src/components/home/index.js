import React, { Component } from "react";
import "./index.css";
import RandomTags from "../../pages/randomtags";
import Hot from "../../pages/hot";
import About from "../../pages/about";
import NewComments from "../../pages/newcomments";
import { Switch, Route, Redirect } from "react-router-dom";
import Blogs from "../../pages/blogs";
import Message from "../../pages/message";
import Notfound from "../../pages/notfound";
import Login from "../../pages/login";
export default class Home extends Component {
  render() {
    return (
      <div className="container clearfix">
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
          <NewComments></NewComments>
        </div>
      </div>
    );
  }
}
