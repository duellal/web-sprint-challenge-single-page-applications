import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';
import { Route, Link } from 'react-router-dom';

export default function OrderButton(props) {

   return (
      <div>
         <button id="order-button">Order</button>
      </div>
   )
}