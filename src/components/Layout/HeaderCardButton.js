import React from "react";
import {useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCardButton.module.css'


const HeaderCardButton = (props) => {
const cartCtx = useContext(CartContext)
const {items} = cartCtx

const numberOfCartItems = items.reduce((currentNumber, item) =>{
  return currentNumber + item.amount;
}, 0);
console.log('ctxCart ', numberOfCartItems)

const [btnIsHighlighted , setBtnIsHighlighted ] = useState(false)

const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`



useEffect(() =>{
  if(cartCtx.items.length === 0){
    return;
  }
  setBtnIsHighlighted(true)

  const timer = setTimeout(()=>{
    setBtnIsHighlighted(false)
  },300)

  //clean up function 
  return () => {
    clearTimeout(timer)
  }

}, [items])

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
