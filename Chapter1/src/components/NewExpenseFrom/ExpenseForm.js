import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

  const [enteredTitle, SetTitleHandler] = useState('')
  const [entereAmount, SetamountHandler] = useState('')
  const [enteredDate, SetDateHandler] = useState('')
  
  const dateChangeHandler = (event) =>{
    SetTitleHandler(event.target.value)
    //console.log("Date Change Handler")
  }
  const amountChangeHandler = (event) =>{
    SetamountHandler(event.tager.value)
    //console.log("Amount Change Handler")
  }

  const titleChangeHandler = (event) =>{
    SetDateHandler(event.tager.value)
    //console.log("Title Change Handler")
  }

  const formSubmitHandler = (event) =>{
    //console.log("From Submit Handler")
    event.preventDefault();
    const updatedData = {
      title: enteredTitle,
      amount: enteredDate,
      date: entereAmount
    }

    console.log(updatedData)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'  onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;