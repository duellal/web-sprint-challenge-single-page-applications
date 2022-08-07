import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React, { useState, useEffect } from "react";

import OrderButton from './order'

export default function OrderForm(props) {
   const { values, change, errors, submit } = props

   const onChange = event => {
      const { name, value, checked, type } = event.target

      const valueToUse = type === 'checkbox' ? checked : value;

      change(name, valueToUse)
   }

   return (
      <form id="pizza-form" onSubmit={submit}>
         <h2>Build Your Own Pizza</h2>
         <div className="name">
            <h3>First and Last Name:</h3>
            <div className="error">{errors.name}</div>
            <input
               type="text"
               id="name-input"
               name="name"
               value={values.name}
               onChange={onChange}
            />
         </div>
         <div className="pickSize">
            <h3>Choice of Size</h3>
            <div className="errors">{errors.size}</div>
            <select
               name="size"
               id="size-dropdown"
               value={values.size}
               onChange={onChange}
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
                  checked={values.pepperoni}
                  onChange={onChange}
               />
               Pepperoni
            </label>
            <label>
               <input
                  type="checkbox"
                  name="ham"
                  checked={values.ham}
                  onChange={onChange}
               />
               Ham
            </label>
            <label>
               <input
                  type="checkbox"
                  name="mushrooms"
                  checked={values.mushrooms}
                  onChange={onChange}
               />
               Mushrooms
            </label>
            <label>
               <input
                  type="checkbox"
                  name="pineapple"
                  checked={values.pineapple}
                  onChange={onChange}
               />
               Pineapple
            </label>
            <label>
               <input
                  type="checkbox"
                  name="spinach"
                  checked={values.spinach}
                  onChange={onChange}
               />
               Spinach
            </label>
            <label>
               <input
                  type="checkbox"
                  name="olives"
                  checked={values.olives}
                  onChange={onChange}
               />
               Olives
            </label>
            <label>
               <input
                  type="checkbox"
                  name="garlic"
                  checked={values.garlic}
                  onChange={onChange}
               />
               Garlic
            </label>
            <label>
               <input
                  type="checkbox"
                  name="onion"
                  checked={values.onion}
                  onChange={onChange}
               />
               Onion
            </label>
            <label>
               <input
                  type="checkbox"
                  name="bellPepper"
                  checked={values.bellPepper}
                  onChange={onChange}
               />
               Bell Pepper
            </label>
            <label>
               <input
                  type="checkbox"
                  name="tomato"
                  checked={values.tomato}
                  onChange={onChange}
               />
               Tomato
            </label>
         </div>

         <div className="specialInstructions">
            <h3>Special Instructions:</h3>
            <div className="errors">{errors.special}</div>
            <input
               type='text'
               id='special-text'
               name='special'
               onChange={onChange}
               value={values.special}
            />
         </div>
         <div id="order-button">
            <button>Order</button>
         </div>
      </form>
   )
}