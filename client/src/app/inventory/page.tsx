"use client";

import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useGetProductsQuery } from "@/state/api";
import { Header } from "../(components)/Header";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", minWidth: 90, flex: 1 },
  { field: "name", headerName: "Product Name", minWidth: 200, flex: 1 },
  {
    field: "price",
    headerName: "Price",
    minWidth: 110,
    flex: 1,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    minWidth: 110,
    flex: 1,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    minWidth: 150,
    flex: 1,
    type: "number",
  },
];

const InventoryPage = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) return <div className="py-4">Loading...</div>;

  if (isError || !products)
    return (
      <div className="text-center text-red-500 py-4">
        Fialed to fetch products
      </div>
    );

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default InventoryPage;