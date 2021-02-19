import React from "react";
import { List, Typography, Divider, Card } from "antd";
import "./index.css";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
export default function SiteMap() {
  return (
    <div>
      <h1 className="maptitle">Liang's Personal Blog SiteMap</h1>

      <div className="articlelist">
        <Divider orientation="left">New Articles</Divider>
        <List
          size="large"
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
      <div className="articletags">
        <Card title="Tags">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </div>
    </div>
  );
}
