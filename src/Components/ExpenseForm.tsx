import Button from "@mui/material/Button";

export function ExpenseForm({
  handleChangeSource,
  handlChangeamount,
  handleChangeDate,
  handlSubmit,
}) {
  return (
    <form   onSubmit={handlSubmit}>
      <div>
        <label htmlFor="expense" id="expense">
          Expense Source
        </label>
        <input
          type="text"
          name="expense"
          placeholder="Enter Expenses"
          onChange={handleChangeSource}
        />
      </div>
      <label htmlFor="expense"></label>
      <div>
        <label htmlFor="amount" id="amount">
          Expenses amount
        </label>
        <input
          type="text"
          name="amount"
          placeholder="Enter Your Expenses"
          onChange={handlChangeamount}
        />
      </div>
      <div>
        <label htmlFor="datename"> Expenses Date</label>
        <input
          type="date"
          name="datename"
          id="dataname"
          onChange={handleChangeDate}
        />
      </div>
      <Button variant="contained" color="success" onClick={handlSubmit}>
        {" "}
        Add Expense{" "}
      </Button>
    </form>
  );
}
