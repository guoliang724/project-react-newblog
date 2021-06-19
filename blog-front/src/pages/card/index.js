import { Card, Avatar, h2 } from "antd";
import "./index.css";
import React, { Component } from "react";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export default class BlogCard extends Component {
  state = {
    title: "男生在男生宿舍可以全裸吗？",
    imgUrl:
      "https://pic3.zhimg.com/v2-359aebda1a8d0c6f798a670a47db7c26_400x224.png",
    content: `祝贺你啊！看到这篇回答你就完成了减肥的前10%的进程！帕梅拉姐姐真的是无敌无敌了！我三个月的时间瘦了整整20斤！我前期尝试了很多减肥视频，什么郑多燕、美丽芭蕾，虐腹等等，可效果根本不明显后来发现了比较火的帕梅拉，练了两周就明显瘦了，然后和闺蜜两个人一起互相打卡监督坚持了下来毫不夸张的讲，我的腰、腿、臀几个地方的肥肉无一幸免统统减少了一两圈
    作者：晴明 来源：知乎
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`,
    views: 100,
    pubilshed: "2021-01-1",
    tags: ["java", "html"],
  };
  componentDidMount = () => {};
  render() {
    return (
      <div className="blog-card">
        <h2 className="card-title">{this.state.title}</h2>
        <div className="card-content">
          <div className="card-img">
            <img src={this.state.imgUrl} alt="" />
          </div>
          <div className="card-content">{this.state.content}</div>
        </div>
        <div className="card-action">
          <LikeOutlined />

          <span>views</span>
          <span>published</span>
          <span>tags</span>
        </div>
      </div>
    );
  }
}
