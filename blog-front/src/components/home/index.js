import React, { Component } from "react";
import "./index.css";
import { Button } from "antd";
import RandomTags from "../../pages/randomtags";
import Hot from "../../pages/hot";
import About from "../../pages/about";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Blogs from "../../pages/blogs";

import Notfound from "../../pages/notfound";
import Login from "../../pages/login";
import { ctx } from "../../pages/context";
import { getUser } from "../../utli/storage";
class Home extends Component {
  state = {
    tag: "",
  };

  //handle tag changing
  handleTag = (tag) => {
    this.setState({ tag });
  };
  //handle tag `all`
  handleAllTag = () => {
    this.props.history.push("/");
    this.setState({ tag: "" });
  };
  render() {
    var user = getUser();
    var { tag } = this.state;

    return (
      <div className="container clearfix">
        <ctx.Provider
          value={{ handleAllTag: this.handleAllTag, handleTag: this.handleTag }}
        >
          {user ? (
            <Button
              type="primary"
              className="create-button"
              onClick={() => {
                this.props.history.push("/newblog");
              }}
            >
              new blog
            </Button>
          ) : (
            ""
          )}
          <div className="content-left ">
            <Switch>
              <Route path="/home/about" component={About} />

              <Route path="/home/login" component={Login} />
              <Route
                path="/home/"
                render={() => {
                  console.log("here", tag);
                  return <Blogs tag={tag} />;
                }}
              />
              <Route path="/notfound" component={Notfound} />
              <Redirect to="/notfound" />
            </Switch>
          </div>
          <div className="content-right ">
            <RandomTags></RandomTags>
            <Hot></Hot>
          </div>
        </ctx.Provider>
      </div>
    );
  }
}
export default withRouter(Home);
