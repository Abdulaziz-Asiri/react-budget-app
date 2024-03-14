import Button from "@mui/material/Button";
import { ChangeEvent } from "react";

type savingTarget = {
  setSavingTargt: (key: number) => void;
  savingTargt: number
  currentSaving: (key: number) => void;
  totleTrnasfer:number
};

export function SetTargetWrapper({
  setSavingTargt,
  savingTargt,
  currentSaving,
  totleTrnasfer,
}: savingTarget) {

  const handleTraget = (e: any) => {
    let target = e.target.value;
    // console.log("I catch Target: ", target);
    setSavingTargt(target);
  };
  console.log("I catch currentSaving: ", currentSaving);

  //?
  const progress = (totleTrnasfer / savingTargt) * 100 || 0;

  console.log("progress: ", progress + "%");

  return (
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
          onChange={handleTraget}
        />
        <progress id="target" value={progress} max="100" />
        <label id="target">Saving progress:{progress}%</label>

        <Button type="reset" color="success" variant="contained">
          Rest
        </Button>
      </form>
      <br />
    </div>
  );
}
