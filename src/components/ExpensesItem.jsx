import { LuTrash } from "react-icons/lu";

export default function ExpensesItem() {
  return (
    <tr>
      <td>Nike Shoes</td>
      <td>120</td>
      <td>20/04/2024</td>
      <td><LuTrash className="trash" /></td>
    </tr>
  );
}
