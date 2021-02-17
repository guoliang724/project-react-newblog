import React from "react";
import "antd/dist/antd.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
