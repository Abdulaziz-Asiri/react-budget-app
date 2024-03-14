import { useState } from "react";
import { Income, IncomeWrapper } from "./Components/IncomeWrapper";
import { Expense, ExpenseWrapper } from "./Components/ExpenseWrapper";
import { TrasferAmountWrapper } from "./Components/TransferAmountWrapper";
import { SetTargetWrapper } from "./Components/setTargetWrapper";

import "./App.css";

export default function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [savingTargt, setSavingTargt] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);
  
  // let sumIncomes = 0;
  // incomes.forEach((income) => {
  //   sumIncomes += income.amount;
  // });
  
  const sumIncomes = incomes.reduce((acc, curr) => {
    return acc + curr.amount;
  },0);
  const sumExpenses = expenses.reduce((acc, curr) => {
    // accumulator is "sumIncomes" and current object is "income"
    return acc + curr.expenseAmount;
  }, 0);
  // console.log("Totale number" + sumExpenses);
  
  const balance = sumIncomes - sumExpenses - currentSaving;
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
        <SetTargetWrapper setSavingTargt={setSavingTargt} />
      </div>

      <div class="span1">
        {" "}
        <span>Current Balance:{balance} </span>
        <span>Current Saving:{currentSaving} </span>
        <span>Target: {savingTargt} </span>{" "}
      </div>
    </>
  );
}
