import Button from "@mui/material/Button";
import { ChangeEvent } from "react";

type savingTarget = {
  setSavingTargt: (key: number) => void
}

export function SetTargetWrapper ({ setSavingTargt }: savingTarget) {

  const handleTraget = (e: any) => {
    let target = e.target.value
    console.log("I catch Target: ", target);
    setSavingTargt(target);
  };

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
        <progress id="target" value="40" max="100" />
        <label id="target">Saving progress:{40}%</label>

        <Button type="reset" color="success" variant="contained">
          Rest
        </Button>
      </form>
      <br />
    </div>
  );
}
