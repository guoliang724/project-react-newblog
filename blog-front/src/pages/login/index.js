import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { getUserInfo } from "../../api/request";
const { Item } = Form;
function Login(props) {
  const formRef = useRef();
  const onFinish = async (values) => {
    const { username, password } = values;
    console.log(username, password);
    var result = await getUserInfo(username, password);
    console.log(result);
    if (result.data.status === 1) {
      message.success("login success");
      props.history.push("/home");
    } else {
      message.warn("sorry, you are not verified.");
      props.history.push("/home");
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
