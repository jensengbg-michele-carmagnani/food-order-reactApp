import React from "react";
import Input from '../UI/Input'
import Button from '../UI/Button'
import classes from "./MealItem.module.css";
const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input lable="Amaount" input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <Button>+ Add</Button>
    </form>
  );
};

export default MealItemForm;
