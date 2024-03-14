import Button from "@mui/material/Button";

export function Incomeform({
  handleChangeSource,
  handleChangeAmount,
  handleChangeDate,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resource" id="resource">
          Income Soucrce
        </label>
        <input
          type="text"
          name="resource"
          placeholder="Enter Your Income"
          onChange={handleChangeSource}
        />
      </div>
      <div>
        <label htmlFor="amount" id="amount">
          Expenses
        </label>
        <input
          type="text"
          name="amount"
          placeholder="Enter Your Expenses"
          onChange={handleChangeAmount}
        />
      </div>
      <div>
        <label htmlFor="datename"> Date</label>
        <input
          type="date"
          name="datename"
          id="dataname"
          onChange={handleChangeDate}
        />
      </div>
      <Button variant="contained" color="success" onClick={handleSubmit}>
         
        Add Income
      </Button>
    </form>
  );
}
