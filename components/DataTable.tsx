import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const DataTable = <T,>({
  columns,
  data,
  rowKey,
  tableClassName,
  headerRowClassName,
  headerCellClassName,
  bodyRowClassName,
  bodyCellClassName,
  headerClassName,
}: DataTableProps<T>) => {
  return (
    <Table className={cn("custom-scrollbar", tableClassName)}>
      <TableCaption>A list of your recent data.</TableCaption>

      <TableHeader className={headerClassName}>
        <TableRow className={cn("hover:bg-transparent!", headerRowClassName)}>
          {columns.map((column, i) => (
            <TableHead
              key={i}
              className={cn(
                "bg-dark-400b text-purple-100 py-4 first:pl-5 last:pr-5",
                headerCellClassName,
              )}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowKey(row, rowIndex)} className={cn("overflow-hidden rounded-lg border-b border-purple-100/5 hover:bg-dark-400/30! relative")}>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex} className={cn('py-4 first:pl-5 last:ptr-5')}>
                {column.cell(row, rowIndex)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={columns.length - 1}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default DataTable;
