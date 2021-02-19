import React from "react";
import "./index.css";
import { Skeleton, Switch, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { List } from "antd/lib/form/Form";
import CommentList from "../../components/comment";

const { Meta } = Card;
export default function About() {
  const loading = true;
  return (
    <div>
      <div className="self-info">
        <Card
          style={{ width: 600, marginTop: 16, borderRadius: "2rem" }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Skeleton avatar paragraph={{ rows: 4 }}>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </div>
      <div className="comments">
        <CommentList></CommentList>
      </div>
    </div>
  );
}
