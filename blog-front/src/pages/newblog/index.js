import React, { useState, useEffect } from "react";
import E from "wangeditor";
import { Form, Input, Button } from "antd";
import "./index.css";
import Avatar from "../upload";
import { createNewBlog } from "../../api/request";
const { Item } = Form;

let editor = null;
function NewBlog() {
  const [form1] = Form.useForm();
  const [content, setContent] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const cb = (imgUrl) => {
    setimgUrl(imgUrl);
  };
  const handleClick = async () => {
    var { title, img, tags } = form1.getFieldsValue();
    console.log("list", title, content, tags, img);
    var result = await createNewBlog(title, content, tags, img);
    console.log("result", result);
  };

  useEffect(() => {
    // 注：class写法需要在componentDidMount 创建编辑器
    editor = new E(document.querySelector(".editor"));

    editor.config.onchange = (newHtml) => {
      setContent(newHtml);
    };
    /**一定要创建 */
    editor.create();

    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy();
    };
  }, []);

  // 获取html方法1
  function getHtml() {
    alert(content);
  }

  // 获取html方法2
  function getHtml1() {
    alert(editor.txt.html());
  }

  // 获取text
  function getText() {
    alert(editor.txt.text());
  }

  return (
    <div className="newblog-table">
      <Form form={form1} wrapperCol={{ span: 10 }} labelCol={{ span: 4 }}>
        <Item label="Title" name="title">
          <Input autoComplete="off" />
        </Item>
        <Item label="Cover Image" name="img">
          <Avatar value={imgUrl} onchange={cb} />
        </Item>
        <Item label="Tags" name="tags">
          <Input />
        </Item>
        <Item label="Content" name="content">
          <div className="editor"></div>
        </Item>
        <Item>
          <Button htmlType="submit" onClick={handleClick}>
            提交
          </Button>
        </Item>
      </Form>

      <button onClick={getHtml} className="test">
        获取html
      </button>
      <button onClick={getHtml1}>获取html1</button>
      <button onClick={getText}>获取text</button>
    </div>
  );
}

export default NewBlog;
