import { useState } from "react";
import React from "react";
import "./Budget";
import { Incomeform } from "./Components/incomeForm";


// rfc

export default function Budget() {
    const [income, setIncome] = useState({
      amount: 0,
      source: "",
      date: "",
    });
  return (
    <div>
      <span>Budget App</span>
      <p>
        
        The more your money works for you, the less you have to work for money.
      </p>

      <Incomeform />
    </div>
  );
}
