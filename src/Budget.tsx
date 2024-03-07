import { useState } from "react";
import React from "react";
import "./Budget";
import { Incomeform } from "./Components/IncomeForm"


// rfc
export default function Budget() {

  // Create generic type 
  // type Income ={
  //   id: number
  //   source = String
  //   amount= Number
  //   date = String
  // }
  type Income ={
    source: string
    amount: number
    date: string
  }

  const [incomes, setIncomes] = useState <Income[]>([]);
 const [income, setIncome] = useState(
    
    {
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  
  
  
  const handleChangeSource = (e:any) => {
    let source = e.target.value
    setIncome({...income,source:source})
    console.log("I got you !!😁", source);
    
  }
  const handleChangeAmount =(e:any) => {
    let amount = e.target.value
    console.log("I got amoutn!!👌", amount);
    setIncome({...income,amount:amount})
  }
  const handleChangeDate = (e: any) =>{
    let date = e.target.value
    console.log("I got date!!🙌", date);
    setIncome({...income,date:date})
  }

  const handleSubmit= (e:any) =>{
    e.preventDefault()
    setIncomes([ ...incomes, income ]);
    
    
    console.log("The New income",income);
  }


  return (
    <>
      <div>
        <span>Budget App</span>
        <p>
          The more your money works for you, the less you have to work for
          money.
        </p>

        <Incomeform
          handleChangeSource={handleChangeSource}
          handleChangeAmount={handleChangeAmount}
          handleChangeDate={handleChangeDate}
          handleSubmit={handleSubmit}
        />
      </div>
      <ul>
        {incomes.map((income) => {
          return (
            <li>
              <p>{income.source}</p>
              <p>{income.amount}</p>
              <p>{income.date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
