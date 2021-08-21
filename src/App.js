import React, { useState } from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import {generateRandomId} from './Helper/GenerateRandomId';


const initialExpenseData = [
  { 
    _id: generateRandomId(), 
    expenseItemPrice: 67.8, 
    expenseItemName: 'Toilet Paper', 
    itemPurchaseDate: new Date(2021, 6, 23)
  },
  { 
    _id: generateRandomId(), 
    expenseItemPrice: 15.77, 
    expenseItemName: 'Skimmed Milk', 
    itemPurchaseDate: new Date(2021, 3, 12)
  },
  { 
    _id: generateRandomId(), 
    expenseItemPrice: 203.99, 
    expenseItemName: 'Groceries', 
    itemPurchaseDate: new Date(2021, 5, 16)
  },
  { 
    _id: generateRandomId(), 
    expenseItemPrice: 500, 
    expenseItemName: 'Health Insuranse', 
    itemPurchaseDate: new Date(2021, 5, 4)
  },
  { 
    _id: generateRandomId(), 
    expenseItemPrice: 55.06, 
    expenseItemName: 'Jogging Shoes', 
    itemPurchaseDate: new Date(2021, 10, 12)
  }
]


function App() {
  const [expenses, setExpenses] = useState(initialExpenseData);

  // Update List function.
  const addNewExpenseHandler = newExpensedData => {

    const newExpense = {...newExpensedData,
      _id: generateRandomId()
    };

    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    })
    
  }

  return (
    <div className="App">
      <NewExpense addNewExpense={addNewExpenseHandler} />
      <Expense expenseList={expenses} />
    </div>
  );
}

export default App;
