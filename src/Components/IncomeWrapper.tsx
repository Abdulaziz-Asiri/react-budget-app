import { useState } from "react";
import {ChangeEvent} from "react"
import { Incomeform } from "./IncomeForm";
import Button from "@mui/material/Button";

// rfc
export type Income ={
  id: number
  IncomeSource : string
  IncomeAmount: number
  IncomeDate:  string
};

type IncomeWrapperType = {
  incomes: Income[]
  setIncomes: (key: Income[]) => void
}
export function IncomeWrapper({ incomes, setIncomes }: IncomeWrapperType) {
  // Create generic type

  // const [incomes, setIncomes] = useState<Income[]>([]);
  const [income, setIncome] = useState<Income>({
    id: +new Date(),
    IncomeSource: "",
    IncomeAmount: 0,
    IncomeDate: new Date().toLocaleDateString(),
  });

  const handleChangeSource = (e: ChangeEvent<HTMLInputElement>) => {
    let incomeSource = e.target.value;
    setIncome({ ...income, IncomeSource: incomeSource });
  };
  const handleChangeAmount = (e:any) => {
    let incomeAmount = e.target.value;

    setIncome({ ...income, IncomeAmount: incomeAmount });
  };
  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    let incomeDate = e.target.value;

    setIncome({ ...income, IncomeDate: incomeDate });
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIncomes([...incomes, income]);

    console.log("The New income", income);
  };

  return (
    <div>
      <Incomeform
        handleChangeSource={handleChangeSource}
        handleChangeAmount={handleChangeAmount}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />
      <ul>
        {incomes.map((income) => {
          return (
            <li key={income.id}>
              <p>Income Source: {income.IncomeSource}</p>
              <p>Income Amount: {income.IncomeAmount}</p>
              <p>Date: {income.IncomeDate}</p>
              <Button color="error" variant="contained">
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
