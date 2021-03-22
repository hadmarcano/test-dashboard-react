import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { HomeTwoTone, FileTwoTone } from "@ant-design/icons";

const { SubMenu } = Menu;

const SideMenu = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<HomeTwoTone />} title="Inicio">
        <Menu.Item key="1">Crear empresa</Menu.Item>
        <Menu.Item key="2">Buscar empresa</Menu.Item>
        <Menu.Item key="3">Actualizar empresa</Menu.Item>
        <Menu.Item key="4">Listar empresas</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<FileTwoTone />} title="Reportes">
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideMenu;
