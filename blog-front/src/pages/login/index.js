import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { getUserInfo } from "../../api/request";
import { setUser } from "../../utli/storage";
const { Item } = Form;
function Login(props) {
  const formRef = useRef();
  const onFinish = async (values) => {
    const { username, password } = values;

    var result = await getUserInfo(username, password);

    if (result.data.status === 1) {
      console.log("data", result.data.data);
      setUser("token", result.data.data);
      message.success("login success");

      props.history.push("/home");
    } else {
      message.warn("sorry, you are not verified.Please try again");
    }
  };
  return (
    <div className="loginForm">
      <Form
        ref={formRef}
        labelCol={{ span: 6, offset: 1 }}
        wrapperCol={{ span: 10 }}
        onFinish={onFinish}
      >
        <Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            autoComplete="false"
          />
        </Item>
        <Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            placeholder="Password"
            autoComplete="false"
          />
        </Item>
        <Button type="primary" htmlType="submit" className="loginButton">
          Login
        </Button>
      </Form>
    </div>
  );
}
export default withRouter(Login);
