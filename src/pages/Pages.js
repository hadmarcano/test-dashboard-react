import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import Logo from "../assets/img/Logo-back-white.svg";
import NavBar from "../components/Nav-header";
import SideMenu from "../components/Side-menu";
import "../assets/css/pages.css";

const { Header, Content, Sider } = Layout;

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("home");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <Layout>
      <Header className="header-container">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-container">
            <NavBar />
          </div>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <SideMenu />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <h1>Home</h1>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Page;
