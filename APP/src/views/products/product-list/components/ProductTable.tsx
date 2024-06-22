import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { TableHeader } from "./TableHeader";
import { TableBody } from "@mui/material";
import { ProductRow } from "./ProductRow";

export const ProductTable = () => {
  const list = useContext(ProductContext);

  const tableColumns = ["Name", "Price", "Category", "Rate"];

  return (
    <>
      <TableHeader collumns={tableColumns} />
      <TableBody>
        {list.length && list.map((product) => <ProductRow product={product} />)}
      </TableBody>
    </>
  );
};
