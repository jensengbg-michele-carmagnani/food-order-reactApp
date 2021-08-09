import React from 'react';
const CardContex = React.createContext({
  items:[],
  totalAmaount: 0,
  addItem:(item)=>{},
  removeItem:(id)=>{},
  clearCartHandler:()=>{}
})
export default CardContex;