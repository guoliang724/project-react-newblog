import React from "react";
import "antd/dist/antd.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Map from "./pages/map";
import Blog from "./pages/blog";
export default function App() {
  return (
    <div className="clear-fix">
      <Header />
      <Switch>
        <Route path="/map" component={Map} />
        <Route path="/home/" component={Home} />
        <Route path="/blog/:id" component={Blog} />
        <Redirect to="/home/" />
      </Switch>
    </div>
  );
}
