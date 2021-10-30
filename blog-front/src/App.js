import React from "react";
import {NavLink} from "react-router-dom"
import "antd/dist/antd.css";

import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Map from "./pages/map";
import Blog from "./pages/blog";
import NewBlog from "./pages/newblog";
import "./app.css";
import { Layout, Input } from "antd";

const { Header, Content, Footer } = Layout;
const { Search } = Input;
export default function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="header">
          <div><NavLink to="/home">Guoliang Zhang's blog</NavLink></div>
          <div>LESS IS MORE</div>
          <div className="inputSearch">
            <Search
              placeholder="keyword"
              enterButton="Search"
              bordered={false}
              // onSearch={this.onSearch}
            ></Search>
          </div>
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
        <Footer className="footer">
          <div>
            <MailOutlined /> Email:zhangguoliang@cvte.com
          </div>
          <div>
            <PhoneOutlined /> Phone:15903410831
          </div>
        </Footer>
      </Layout>
    </div>
  );
}
