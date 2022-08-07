import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';
import { Route, Link } from 'react-router-dom';

import OrderButton from './order'

export default function OrderForm(props) {

   return (
      <div id="pizza-form">
         <h2>Build Your Own Pizza</h2>
         <div className="pickSize">
            <h3>Choice of Size</h3>
            <p>Required</p>
            {/* <select
               name="pickSize"
            // value={}
            // onChange={}
            >
               <option value=''>Pick a Size</option>
               <option value='small'>Small</option>
               <option value='medium'>Medium</option>
               <option value='large'>Large</option>
            </select> */}
         </div>

         <OrderButton />
      </div>
   )
}