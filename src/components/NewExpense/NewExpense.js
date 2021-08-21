import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../Styles/NewExpense.css';

const NewExpense = ( props ) => {
  const saveNewExpenseData = ( newExpenseData ) => {
    // prop from Parent App.js 
    props.addNewExpense(newExpenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm saveNewExpense={saveNewExpenseData} />
    </div>
  )
}

export default NewExpense;