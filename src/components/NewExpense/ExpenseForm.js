import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandle = (e) => {
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandle = (e) => {
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandle = (e) => {
    setEnteredDate(e.target.value)
  }

  // const changeHandler = (e) => {
  //   setExpense((prevState) => {
  //     return { ...prevState, [e.target.name]: e.target.value }
  //   });
  // }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseObj = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseObj);

    clearStates()
  }

  const clearStates = () => {
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  const cancelHandler = (e) => {
    e.preventDefault()

    props.onCancelClick()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandle}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm