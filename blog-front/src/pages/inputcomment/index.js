import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import moment from "moment";
import { Comment, Avatar, Form, Button, List, Input, message } from "antd";
import { addComments } from "../../api/request";

const { TextArea } = Input;
const { Item } = Form;
export default function InputComment(props) {
  const [form1] = Form.useForm();
  const [value, setvalue] = useState("");
  const { toAuthor, comment_id, article_id, handleFold } = props;
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  const handleSubmit = async () => {
    handleFold(true);
    const { name, comment } = form1.getFieldsValue();
    //insert comment for article
    var result = await addComments(name, comment, article_id, comment_id);
    console.log(form1.getFieldsValue());
    if (result) {
      message.success("success!");
      handleFold(false);
    } else {
      message.warn("fail!");
    }
  };
  return (
    <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
      <Form form={form1} layout="inline">
        <Item
          name="name"
          rules={[{ required: true, message: "cannot be empty" }]}
        >
          <Input
            autoComplete="off"
            placeholder="name"
            style={{ width: "10rem", borderRadius: "1rem" }}
          />
        </Item>
        <Item
          name="comment"
          rules={[{ required: true, message: "cannot be empty" }]}
        >
          <TextArea
            rows={1}
            onChange={handleChange}
            placeholder={`to ${toAuthor}`}
            value={value}
            style={{ width: "30rem", borderRadius: "1rem" }}
          />
        </Item>
        <Item>
          <Button
            htmlType="submit"
            onClick={handleSubmit}
            type="primary"
            size="small"
            style={{ borderRadius: "1rem" }}
          >
            Comment
          </Button>
        </Item>
      </Form>
    </div>
  );
}
