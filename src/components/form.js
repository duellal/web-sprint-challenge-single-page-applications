import React, { useState, useEffect } from "react";

import OrderButton from './order'

export default function OrderForm(props) {

   return (
      <form id="pizza-form">
         <h2>Build Your Own Pizza</h2>
         <div className="name">
            <h3>First and Last Name:</h3>
            <input
               type="text"
               id="name-input"
            />
         </div>
         <div className="pickSize">
            <h3>Choice of Size</h3>
            <p>Required</p>
            <select
               name="pickSize"
               id="size-dropdown"
            // value={}
            // onChange={}
            >
               <option value=''>Pick a Size</option>
               <option value='small'>Small</option>
               <option value='medium'>Medium</option>
               <option value='large'>Large</option>
            </select>
         </div>
         <div className="toppings">
            <h3>Pick Toppings</h3>
            <label>
               <input
                  type="checkbox"
                  name="pepperoni"
               // checked={}
               // onChange={}
               />
               Pepperoni
            </label>
            <label>
               <input
                  type="checkbox"
                  name="ham"
               // checked={}
               // onChange={}
               />
               Ham
            </label>
            <label>
               <input
                  type="checkbox"
                  name="mushrooms"
               // checked={}
               // onChange={}
               />
               Mushrooms
            </label>
            <label>
               <input
                  type="checkbox"
                  name="pineapple"
               // checked={}
               // onChange={}
               />
               Pineapple
            </label>
            <label>
               <input
                  type="checkbox"
                  name="spinach"
               // checked={}
               // onChange={}
               />
               Spinach
            </label>
            <label>
               <input
                  type="checkbox"
                  name="olives"
               // checked={}
               // onChange={}
               />
               Olives
            </label>
            <label>
               <input
                  type="checkbox"
                  name="garlic"
               // checked={}
               // onChange={}
               />
               Garlic
            </label>
            <label>
               <input
                  type="checkbox"
                  name="onion"
               // checked={}
               // onChange={}
               />
               Onion
            </label>
            <label>
               <input
                  type="checkbox"
                  name="bellPepper"
               // checked={}
               // onChange={}
               />
               Bell Pepper
            </label>
            <label>
               <input
                  type="checkbox"
                  name="tomato"
               // checked={}
               // onChange={}
               />
               Tomato
            </label>
         </div>

         <div className="specialInstructions">
            <h3>Special Instructions:</h3>
            <input
               type='text'
               id='special-text'
            />
         </div>
         <div id="order-button">
            <OrderButton />
         </div>
      </form>
   )
}