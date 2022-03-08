import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState])
  }
  return  (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
