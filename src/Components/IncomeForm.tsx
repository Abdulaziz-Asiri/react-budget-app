import { Button } from "./Button";

export function Incomeform() {
    
  return (
    <form>
      <div>
        <label htmlFor="resource" id="resource">
          Income Soucrce
        </label>
        <input type="text" name="resource" placeholder="Enter Your Income" />
      </div>
      <div>
        <label htmlFor="amount" id="amount">
          Expenses
        </label>
        <input type="text" name="amount" placeholder="Enter Your Expenses" />
      </div>
      <div>
        <label htmlFor="datename"> Date</label>
        <input type="date" name="datename" id="dataname" />
      </div>
      <Button label="Add income" />
    </form>
  );
}
