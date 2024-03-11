import Button from "@mui/material/Button";

export function Target_Balance() {
  return (
    <>
      <div>
        <form>
          <label htmlFor="traget" id="traget">
            Set Traget
          </label>
          <input
            type="text"
            name="target"
            id="target"
            placeholder="Eenter your Traget"
          />
          <Button color="success" variant="contained" onClick="Submit">
            Rest
          </Button>
          <br />
          <span>Target:</span>
        </form>
      </div>

      <div>
        <form>
          <label htmlFor="transfer" id="target">
            Transfer to saving account
          </label>
          <input
            type="text"
            name="transfer"
            placeholder="Enter the transfer amount"
          />
          <Button color="success" variant="contained" onClick="Submit">
            Transfer
          </Button>
        </form>
      </div>

      <div>
        <span>Current Balance: </span>
        <br />
        <span>Current Saving: </span>
      </div>
    </>
  );
}
