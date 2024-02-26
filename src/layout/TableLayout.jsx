import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { getAllUsers } from "../service/api-users";
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

const TableLayout = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  console.log(data);

  return (
    <div className="container grid h-screen">
      {isLoading ? (
        <div className=" grid justify-center text-3xl font-bold p-2">
          Loading...
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <Table
          columns={columns}
          expandable={{
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={data}
        />
      )}
    </div>
  );
};
export default TableLayout;
