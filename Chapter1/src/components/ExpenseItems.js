import React, {useState} from 'react';
import './ExpenseItems.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

  const [title, SetTitle] = useState(props.name)
  const clickHandler = () => {
    SetTitle("Updated Title!")
    //console.log(title)
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Here!!</button>
    </div>
  );
}

export default ExpenseItem;
