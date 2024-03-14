import { useState } from "react";
import { Button, Typography } from "@mui/material";

// type TransferAccountProps = {
//   setTransferAmount: (key: number) => void;
//   setcurrentSaving: (key: number) => void;
//   transferAmount: (key: number)  => void;
// };

export function TrasferAmountWrapper({
  setTransferAmount,
  transferAmount,
  setCurrentSaving,
  currentSaving,
  balance,
}) {
  const [transferError, setTransferError] = useState("");

  const handleTransfer = (e: any) => {
    let transfer = e.target.value;
    setTransferAmount({ saving: +transfer });
  };

  const handleSumbit = (e: any) => {
    e.preventDefault();
    setCurrentSaving([...currentSaving, transferAmount]);
    // if (transferAmount <= balance) {
    //   // setCurrentSaving((transferAmount ));

    //   setCurrentSaving((previousState) => {
    //     return previousState + transferAmount
    //   })
    //   console.log("setcurrentSaving:", currentSaving);

    //   setTransferError("");
    // } else {
    //   setTransferError("Not  enough Balance");
    // }

    // setTransferAmount(0);

    // console.log("I handl trasfer: ", transferAmount);
  };

  return (
    // <Target_Transfer
    //   handleTraget={handleTraget}
    //   handleTransfer={handleTransfer}
    // />
    <div>
      <form onSubmit={handleSumbit}>
        <label htmlFor="transfer" id="target">
          Transfer to saving account
        </label>
        <input
          type="text"
          name="transfer"
          placeholder="Enter the transfer amount"
          onChange={handleTransfer}
        />
        {/* Display Error message */}
        {transferError && (
          <Typography color="error">{transferError}</Typography>
        )}
        <Button
          type="submit"
          color="success"
          variant="contained"
          onClick={handleSumbit}
        >
          Transfer
        </Button>
      </form>
    </div>
  );
}
