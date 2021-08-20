import React, { useState } from 'react';
import '../Styles/ExpenseForm.css';

const ExpenseForm = () => {
  
  const initialState = {
    title: '',
    price: '',
    date: ''
  }

  const [userInput, setUserInput] = useState(initialState);

  const clearFormAfterSubmit = () => {
    setUserInput({...initialState});
  }

  const expenseInputHandler = ( event ) => {
    setUserInput({ ...userInput, 
      [event.target.name]: event.target.value
    });
  }

  const formSubmitHandler = event  => {
    event.preventDefault();
    clearFormAfterSubmit();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>

        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' 
            name='title' 
            value={userInput.title} 
            placeholder='Tissue Box' 
            onChange={ expenseInputHandler } 
          />
        </div>

        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number' 
            name='price' 
            value={userInput.price} 
            min='1' 
            step='1.0' 
            placeholder='5.0'
            onChange={ expenseInputHandler } 
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' 
            name='date' 
            value={userInput.date} 
            onChange={ expenseInputHandler }  
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