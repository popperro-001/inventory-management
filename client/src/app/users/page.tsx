"use client";

import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useGetUsersQuery } from "@/state/api";
import { Header } from "../(components)/Header";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", minWidth: 90, flex: 1 },
  { field: "name", headerName: "Name", minWidth: 200, flex: 1 },
  { field: "email", headerName: "Email", minWidth: 200, flex: 1 },
];

const UsersPage = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) return <div className="py-4">Loading...</div>;

  if (isError || !users)
    return (
      <div className="text-center text-red-500 py-4">Fialed to fetch users</div>
    );

  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default UsersPage;
