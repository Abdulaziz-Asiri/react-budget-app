import React from "react";
import { IncomeWrapper } from "./Components/IncomeWrapper";
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import {Target_Balance} from "./Components/Target&Balance"
import "./Budget.css";

export default function App() {

  
  return (
    <div>
      <div class="heading">
        <h1>Budget App</h1>
        <p>
          The more your money works for you, the less you have to work for
          money.
        </p>{" "}
      </div>

      <div class="formDesign">
        <IncomeWrapper />
      </div>

      <div class="formDesign">
        <ExpenseWrapper />
      </div>
      <div class= "formDesign1">
      <Target_Balance/>
      </div>
    </div>
  );
}
