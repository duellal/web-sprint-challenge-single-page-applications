import React from "react";

import Toggle from './toggle'

export default function OrderForm(props) {
   const { values, change, errors, submit, disabled, isOn, handleToggle, onColor } = props

   const onChange = event => {
      const { name, value, checked, type } = event.target

      const valueToUse = type === 'checkbox' ? checked : value;

      change(name, valueToUse)
   }

   return (
      <form id="pizza-form" onSubmit={submit}>
         <h2>Build Your Own Pizza</h2>
         <p>To order a cheese pizza, please submit your name and the size of the pizza only.</p>
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
         <div className="glutenFree">
            <h3>Gluten Free Crust?</h3>
            <label>
               <Toggle
                  isOn={isOn}
                  handleToggle={handleToggle}
                  onColor={onColor}
               />
            </label>
         </div>
         <div className="pickSize">
            <h3>Pick a Size</h3>
            <div className="errors">{errors.size}</div>
            <select
               name="size"
               id="size-dropdown"
               value={values.size}
               onChange={onChange}
            >
               <option value='Pick a Size'>Pick a Size</option>
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
                  id="pepperoni"
                  name="pepperoni"
                  checked={values.pepperoni}
                  onChange={onChange}
               />
               Pepperoni
            </label>
            <label>
               <input
                  type="checkbox"
                  id="ham"
                  name="ham"
                  checked={values.ham}
                  onChange={onChange}
               />
               Ham
            </label>
            <label>
               <input
                  type="checkbox"
                  id="mushrooms"
                  name="mushrooms"
                  checked={values.mushrooms}
                  onChange={onChange}
               />
               Mushrooms
            </label>
            <label>
               <input
                  type="checkbox"
                  id="pineapple"
                  name="pineapple"
                  checked={values.pineapple}
                  onChange={onChange}
               />
               Pineapple
            </label>
            <label>
               <input
                  type="checkbox"
                  id="spinach"
                  name="spinach"
                  checked={values.spinach}
                  onChange={onChange}
               />
               Spinach
            </label>
            <label>
               <input
                  type="checkbox"
                  id="olives"
                  name="olives"
                  checked={values.olives}
                  onChange={onChange}
               />
               Olives
            </label>
            <label>
               <input
                  type="checkbox"
                  id="garlic"
                  name="garlic"
                  checked={values.garlic}
                  onChange={onChange}
               />
               Garlic
            </label>
            <label>
               <input
                  type="checkbox"
                  id="onion"
                  name="onion"
                  checked={values.onion}
                  onChange={onChange}
               />
               Onion
            </label>
            <label>
               <input
                  type="checkbox"
                  id="bellPepper"
                  name="bellPepper"
                  checked={values.bellPepper}
                  onChange={onChange}
               />
               Bell Pepper
            </label>
            <label>
               <input
                  type="checkbox"
                  id="tomato"
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
            <button className="orderBtn" disabled={disabled}>Order</button>
         </div>
      </form>
   )
}