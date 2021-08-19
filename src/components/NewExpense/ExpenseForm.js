import React from 'react';
import '../Styles/ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number' min='1' step='1.0' defaultValue='5.0' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;