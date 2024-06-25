import { TableCell, TableHead, TableRow } from "@mui/material";

type Props = {
  collumns: string[];
};
export const TableHeader: React.FC<Props> = ({ collumns }) => {
  return (
    <>
      <TableHead>
        <TableRow>
          {collumns.length &&
            collumns.map((col) => <TableCell key={col}>{col}</TableCell>)}
        </TableRow>
      </TableHead>
    </>
  );
};
