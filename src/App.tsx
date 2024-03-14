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

  // let sumIncomes = 0;
  // incomes.forEach((income) => {
  //   sumIncomes += income.amount;
  // });
  //TODO Calculate the total of the current saving and the percentage of the current saving amount / target of saving.✅
  //TODO Add a delete button to remove items in income and expense sources.
  // TODO Fix the balance and transfer bug✅
  //TODO Fix type of variable
  //TODO Implement routing
  //TODO Style using MUI

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

  console.log("totleTrnasfer:", totleTrnasfer);
  const balance = sumIncomes - sumExpenses - totleTrnasfer;
  console.log("Balance", balance);

  return (
    <>
      <div class="heading">
        <h1>Budget App</h1>
        <p>
          The more your money works for you, the less you have to work for
          money.
        </p>
      </div>

      <div class="formDesign">
        <IncomeWrapper incomes={incomes} setIncomes={setIncomes} />
      </div>

      <div class="formDesign">
        <ExpenseWrapper expenses={expenses} setExpenses={setExpenses} />
      </div>
      <div class="formDesign1">
        <TrasferAmountWrapper
          transferAmount={transferAmount}
          setTransferAmount={setTransferAmount}
          currentSaving={currentSaving}
          setCurrentSaving={setCurrentSaving}
          balance={balance}
        />
      </div>

      <div class="formDesign2">
        <SetTargetWrapper
          setSavingTargt={setSavingTargt}
          savingTargt={savingTargt}
          totleTrnasfer={totleTrnasfer}
        />
      </div>

      <div class="span1">
        {" "}
        <span>Current Balance:{balance} </span>
        <span>Current Saving:{totleTrnasfer} </span>
        <span>Target: {savingTargt} </span>{" "}
      </div>
    </>
  );
}
