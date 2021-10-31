import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import "./index.css";
import { ctx } from "../../pages/context";
const { Search } = Input;

export default function Head() {
  const Ref = useRef();
  const { handleKeyword, handleTag } = useContext(ctx);
  const handleSearch = (value, event) => {
    console.log(event.value === "");
    handleTag("all");
    handleKeyword(value);
  };
  return (
    <div className="header">
      <div>
        <NavLink to="/home">Guoliang Zhang's blog</NavLink>
      </div>
      <div>LESS IS MORE</div>
      <div className="inputSearch">
        <Search
          ref={Ref}
          placeholder="keyword"
          enterButton="Search"
          bordered={false}
          onSearch={handleSearch}
          allowClear={true}
        ></Search>
      </div>
    </div>
  );
}
