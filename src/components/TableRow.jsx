import React from "react";

const TableRow = ({ product }) => {
  return (
    <tbody>
      <tr className="border-b border-border hover:bg-muted/50">
        <td className="p-4">
          <input type="checkbox" className="mr-2" />
        </td>
        <td className="p-4 flex items-center gap-2">
          <img src={product?.image} alt="shoe-icon" className="size-10 mr-2" />
          {product?.name}
        </td>
        <td className="p-4">{product.category}</td>
        <td className="p-4">{product.stock}</td>
        <td className="p-4">${product.price}</td>
      </tr>
    </tbody>
  );
};

export default TableRow;
