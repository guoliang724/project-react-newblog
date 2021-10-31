import React, { useContext } from "react";
import "./index.css";
import { Button } from "antd";
import RandomTags from "../../pages/randomtags";
import Hot from "../../pages/hot";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Blogs from "../../pages/blogs";
import Notfound from "../../pages/notfound";
import Login from "../../pages/login";
import { ctx } from "../../pages/context";
import { getUser } from "../../utli/storage";

const Home = (props) => {
  var user = getUser();
  const { tag } = useContext(ctx);

  return (
    <div className="container">
      {user ? (
        <Button
          type="primary"
          className="create-button"
          onClick={() => {
            props.history.push("/newblog");
          }}
        >
          new blog
        </Button>
      ) : (
        ""
      )}
      <div className="content-left ">
        <Switch>
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
    </div>
  );
};

export default withRouter(Home);
