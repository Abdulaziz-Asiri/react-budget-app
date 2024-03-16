import { useState } from "react";
import { Income, IncomeWrapper } from "./Components/IncomeWrapper";
import { Expense, ExpenseWrapper } from "./Components/ExpenseWrapper";
import { TrasferAmountWrapper } from "./Components/TransferAmountWrapper";
import { SetTargetWrapper } from "./Components/setTargetWrapper";

import "./App.css";
type Saving = {
  saving: number;
};

export default function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [savingTargt, setSavingTargt] = useState(0);

  const [currentSaving, setCurrentSaving] = useState<Saving[]>([]);
  const [transferAmount, setTransferAmount] = useState({ saving: 0 });


  //TODO Calculate the total of the current saving and the percentage of the current saving amount / target of saving.✅
  //TODO Add a delete button to remove items in income and expense sources.
  // TODO Fix the balance and transfer bug✅
  //TODO Fix type of variable
  //TODO Implement routing
  //TODO Style using MUI

  const handleDeleteIncome = (id: number) => {
    
    //1. allocate form which array we want to delete
    
    //2. Get which ID we want to delete
    //3. FILTER from the source array which is inocmes
    const updatedIncome = incomes.filter((income) => {
      return income.id !== id;
    });
    //4. Update the incomes array
    setIncomes(updatedIncome);
  };
  ;
const handleDeleteExpense = (id: number) => {
  //1. allocate form which array we want to delete

  //2. Get which ID we want to delete
  //3. FILTER from the source array which is inocmes
  const updateExpense = expenses.filter((expense) => {
    return expense.id !== id;
  });
  //4. Update the incomes array
  setExpenses(updateExpense);
};
  const sumIncomes = incomes.reduce((acc, curr) => {
    return acc + Number(curr.IncomeAmount);
  }, 0);
  const sumExpenses = expenses.reduce((acc, curr) => {
    // accumulator is "sumIncomes" and current object is "income"
    return acc + Number(curr.expenseAmount);
  }, 0);

  //? 
  const totleTrnasfer = currentSaving.reduce((acc, curr) => {
    return acc + Number(curr.saving);
  }, 0);

  
  const balance = sumIncomes - sumExpenses - totleTrnasfer;
  console.log("Balance", balance);

  return (
    <>
      <div className="heading">
        <h1>Budget App</h1>
        <p>
          The more your money works for you, the less you have to work for
          money.
        </p>
      </div>

      <div className="formDesign">
        <IncomeWrapper
          incomes={incomes}
          setIncomes={setIncomes}
          handleDeleteIncome={handleDeleteIncome}
        />
      </div>

      <div className="formDesign">
        <ExpenseWrapper
          expenses={expenses}
          setExpenses={setExpenses}
          handleDeleteExpense={handleDeleteExpense}
        />
      </div>
      <div className="formDesign1">
        <TrasferAmountWrapper
          transferAmount={transferAmount}
          setTransferAmount={setTransferAmount}
          currentSaving={currentSaving}
          setCurrentSaving={setCurrentSaving}
          balance={balance}
        />
      </div>

      <div className="formDesign2">
        <SetTargetWrapper
          setSavingTargt={setSavingTargt}
          savingTargt={savingTargt}
          totleTrnasfer={totleTrnasfer}
        />
      </div>

      <div className="span1">
        {" "}
        <span>Current Balance:{balance} </span>
        <span>Current Saving:{totleTrnasfer} </span>
        <span>Target: {savingTargt} </span>{" "}
      </div>
    </>
  );
}
