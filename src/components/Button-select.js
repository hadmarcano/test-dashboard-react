import React from "react";
import { Select } from "antd";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

const ButtonSelect = () => {
  return (
    <Select
      defaultValue="Español"
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Option value="Ingles">Ingles</Option>
      <Option value="Portugués">Portugues</Option>

      <Option value="Español">Español</Option>
    </Select>
  );
};

export default ButtonSelect;
