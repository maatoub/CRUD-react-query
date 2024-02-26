import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: "John Brown",
    username: 32,
    email: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    username: 42,
    email: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    username: 29,
    email: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    username: 32,
    email: "Sydney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
  },
];
const TableLayout = () => (
  <Table
    columns={columns}
    expandable={{
      
      rowExpandable: (record) => record.name !== "Not Expandable",
    }}
    dataSource={data}
  />
);
export default TableLayout;
