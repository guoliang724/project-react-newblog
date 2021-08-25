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
  const { handleAddComment, article_id } = props;

  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  const handleSubmit = async () => {
    const { name, comment } = form1.getFieldsValue();
    //insert comment to database
    var result = await addComments(name, comment, article_id);
    if (result) {
      var value = result.data.data;
      handleAddComment && handleAddComment(value); //update comment in the lists
      message.success("success!");
      form1.setFieldsValue({
        name,
        comment: "",
      });
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
            value={value}
            placeholder="@who:comment"
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
