import { TableCell, TableRow } from "@mui/material";
import { Product } from "../../../../products/models";

type Props = {
  product: Product;
};

export const ProductRow: React.FC<Props> = ({ product }) => {
  return (
    <>
      <TableRow
        key={product.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {product.title}
        </TableCell>
        <TableCell align="right">{product.price}</TableCell>
        <TableCell align="right">{product.category}</TableCell>
        <TableCell align="right">{product.rating.rate}</TableCell>
      </TableRow>
    </>
  );
};
