import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";

export function ExpenseWrapper() {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    ex_source: "",
    ex_amount: 0,
    ex_date: new Date().toLocaleDateString(),
  });

  const handleChangeSource = (e: any) => {
    let e_source = e.target.value;
    setExpense({ ...expense, ex_source: e_source }); // the three dots mean keep old value and store new vavlue
  };

  const handlChangeamount = (e: any) => {
    let e_amount = e.target.value;
    setExpense({ ...expense, ex_amount: e_amount });
  };

  const handleChangeDate = (e: any) => {
    let e_date = e.target.value;
    setExpense({ ...expense, ex_date: e_date });
  };

  const handlSubmit = (e: any) => {
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
              <li>
                <p>Expense Source: {expens.ex_source}</p>
                <p>Expense Amount: {expens.ex_amount}</p>
                <p>Date: {expens.ex_date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
