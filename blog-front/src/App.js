import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Home from "./components/home";
import Map from "./pages/map";
import Blog from "./pages/blog";
import NewBlog from "./pages/newblog";
import Head from "./components/head";
import Foot from "./components/foot";
import { Layout } from "antd";
import { ctx } from "./pages/context";

import "antd/dist/antd.css";
import "./app.css";

const { Header, Content, Footer } = Layout;

const App = (props) => {
  const [tag, settag] = useState("all");
  const [keyword, setkeyword] = useState("");

  //handle tag changing
  const handleTag = (tag) => {
    settag(tag);
  };
  //handle tag `all`
  const handleAllTag = () => {
    props.history.push("/");
    settag("all");
  };
  //handle keyword
  const handleKeyword = (keyword) => {
    setkeyword(keyword);
  };

  return (
    <div className="app">
      <ctx.Provider
        value={{
          tag,
          keyword,
          handleAllTag,
          handleTag,
          handleKeyword,
        }}
      >
        <Layout>
          <Header>
            <Head />
          </Header>
          <Content className="body">
            <Switch>
              <Route path="/map" component={Map} />
              <Route path="/home/" component={Home} />
              <Route path="/blog/:id" component={Blog} />
              <Route path="/newblog" component={NewBlog} />
              <Redirect to="/home/" />
            </Switch>
          </Content>
          <Footer>
            <Foot />
          </Footer>
        </Layout>
      </ctx.Provider>
    </div>
  );
};

export default withRouter(App);
