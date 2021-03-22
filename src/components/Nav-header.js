import React from "react";
import { Menu } from "antd";
import { SettingTwoTone, BellTwoTone } from "@ant-design/icons";
import ButtonSelect from "../components/Button-select";
import AvatarContainer from "../components/Avatar";

const NavBar = () => {
  return (
    <>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <ButtonSelect />
        </Menu.Item>
        <Menu.Item key="2">
          <BellTwoTone />
        </Menu.Item>
        <Menu.Item key="3">
          <SettingTwoTone />
        </Menu.Item>
        <Menu.Item key="3">
          <AvatarContainer />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default NavBar;
