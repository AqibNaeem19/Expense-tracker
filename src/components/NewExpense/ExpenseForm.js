import React, { useState } from 'react';
import '../Styles/ExpenseForm.css';

const ExpenseForm = ( props ) => {
  
  // Expense States
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expensePrice, setExpensePrice] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  // State Update Handlers
  const expenseTitleHandler = event => {
    setExpenseTitle(event.target.value);
  }

  const expensePriceHandler = event => {
    setExpensePrice(event.target.value);
  }

  const expenseDateHandler = event => {
    setExpenseDate(event.target.value);
  }

  // Submit Form
  const formSubmitHandler = event  => {
    event.preventDefault();
    const newExpenseData = {
      expenseItemName: expenseTitle,
      expenseItemPrice: expensePrice,
      itemPurchaseDate: new Date(expenseDate)
    };
    // Prop from Parent NewExpense.js
    props.saveNewExpense(newExpenseData);
    // Resetting Form Defaults
    setExpenseTitle('');
    setExpensePrice('');
    setExpenseDate('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>

        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' 
            name='title' 
            value={expenseTitle} 
            placeholder='Tissue Box' 
            onChange={ expenseTitleHandler } 
          />
        </div>

        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number' 
            name='price' 
            value={expensePrice} 
            min='1' 
            step='1.0' 
            placeholder='5.0'
            onChange={ expensePriceHandler } 
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' 
            name='date' 
            value={expenseDate} 
            onChange={ expenseDateHandler }  
          />
        </div>

      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;