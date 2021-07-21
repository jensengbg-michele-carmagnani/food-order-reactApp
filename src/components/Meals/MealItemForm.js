import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./MealItem.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const sumbmitHanlder = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddtoCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={sumbmitHanlder}>
      <Input
        ref={amountInputRef}
        label="Amaount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button>+ Add</Button>
      {!amountIsValid && <p>Please entere a valid amount(1-5) </p>}
    </form>
  );
};

export default MealItemForm;
