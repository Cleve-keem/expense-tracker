import ExpensesItem from "@/components/ExpensesItem";
import React from "react";
// import { IoMdTrash } from "react-icons/io";

export default function Expenses() {
  return (
    <div className="expenses-wrapper p-4">
      <h2 className="text-2xl font-extrabold mb-4">My Expenses</h2>
      <p className="mb-2 font-bold">Latest Expenses</p>
      <table>
        <thead>
          <tr className="">
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ExpensesItem />
          <ExpensesItem />
          <ExpensesItem />
          <ExpensesItem />
          <ExpensesItem />
          <ExpensesItem />
          <ExpensesItem />
          <ExpensesItem />
        </tbody>
      </table>
    </div>
  );
}
