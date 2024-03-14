import { useState } from "react";
import {ChangeEvent} from "react"
import { ExpenseForm } from "./ExpenseForm";
import Button from "@mui/material/Button";


export type Expense = {
    id: number
    expenseSource: string
    expenseAmount: number
    expenseDate: string
}
type ExpenseWrapper ={
    expenses: Expense[]
    setExpenses: (key: Expense[]) => void
}

export function ExpenseWrapper({expenses, setExpenses}: ExpenseWrapper ) {
//   const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState<Expense>({
    id: +new Date(),
    expenseSource: "",
    expenseAmount: 0,
    expenseDate: new Date().toLocaleDateString(),
  });

  const handleChangeSource = (e:   ChangeEvent<HTMLInputElement>) => {
    let expensesource = e.target.value;

    setExpense({ ...expense, expenseSource: expensesource }); // the three dots mean keep old value and store new vavlue
  };

  const handlChangeamount = (e:any) => {
    let expenseamount = e.target.value;
    setExpense({ ...expense, expenseAmount: expenseamount });
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    let expensedate = e.target.value;
    setExpense({ ...expense, expenseDate: expensedate });
  };

  const handlSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setExpenses([...expenses, expense]);
  };
  return (
    <>
      <div>
        <ExpenseForm
          handleChangeSource={handleChangeSource}
          handlChangeamount={handlChangeamount}
          handleChangeDate={handleChangeDate}
          handlSubmit={handlSubmit}
        />

        <ul>
          {expenses.map((expens) => {
            return (
              <li key={expens.id}>
                <p>Expense Source: {expens.expenseSource}</p>
                <p>Expense Amount: {expens.expenseAmount}</p>
                <p>Date: {expens.expenseDate}</p>
                <Button color="error" variant="contained">
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
