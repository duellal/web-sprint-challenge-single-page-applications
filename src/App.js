import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';
import { Route, Link, Switch } from 'react-router-dom';

import OrderForm from './components/form'



const App = () => {


  return (
    <>
      <div className="">
        <header>
          <h1>Lambda Eats</h1>
          <nav>
            <Link to={`/`} id="order-pizza">
              <button className="home-btn">Home</button>
              <button className="help-btn">Help</button>
            </Link>
          </nav>
        </header>

        <div>
          <Link to={`/pizza`} id="order-pizza">
            <button>Order</button>
          </Link>
        </div>

        <Switch>
          <Route path={`/pizza`}>
            <OrderForm />
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default App;
