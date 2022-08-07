import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup'
import { Route, Link, Switch } from 'react-router-dom';

import OrderForm from './components/form'
import formSchema from './validation/formSchema'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  ham: false,
  mushrooms: false,
  pineapple: false,
  spinach: false,
  olives: false,
  garlic: false,
  onion: false,
  bellPepper: false,
  tomato: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  special: ''
}

const initialOrders = []


const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [orders, setOrders] = useState(initialOrders)
  const [errors, setErrors] = useState(initialFormErrors)

  const changeInput = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: '' })
      })
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors })
      })

    setFormValues({ ...formValues, [name]: value })
  }

  const postNewOrder = (newOrder) => {
    axios
      .post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res.data)
        setOrders([res.data, ...orders])
      })
      .finally(setFormValues(initialFormValues))
      .catch(err => {
        console.log(err)
      })
  }

  const submitOrder = event => {
    event.preventDefault()

    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      ham: formValues.ham,
      mushrooms: formValues.mushrooms,
      pineapple: formValues.pineapple,
      spinach: formValues.spinach,
      olives: formValues.olives,
      garlic: formValues.garlic,
      onion: formValues.onion,
      bellPepper: formValues.bellPepper,
      tomato: formValues.tomato,
      special: formValues.special.trim()
    }

    postNewOrder(newOrder)
  }

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
            <button className="createPizzaBtn">Order Pizza</button>
          </Link>
        </div>

        {/* <Switch> */}
        <Route path={`/pizza`}>
          <OrderForm values={formValues} change={changeInput} errors={errors} submit={submitOrder} />
        </Route>
        {/* </Switch> */}
      </div>
    </>
  );
};
export default App;
