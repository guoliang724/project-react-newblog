import React from "react";
import "antd/dist/antd.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Map from "./pages/map";
import Blog from "./pages/blog";
import NewBlog from "./pages/newblog";
import "./app.css"


export default function App() {
  return (
    <div>
      <Header className="header"/>
      <div className="body">
      <Switch>
        <Route path="/map" component={Map} />
        <Route path="/home/" component={Home} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/newblog" component={NewBlog} />
        <Redirect to="/home/" />
      </Switch>
      </div>
      <Footer className="footer"/>
    </div>
  );
}
