import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../Styles/NewExpense.css';

const NewExpense = ( props ) => {
  const saveNewExpenseData = ( newExpenseData ) => {
    const newExpense = {
      ...newExpenseData
    }
    props.addNewExpense(newExpense);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm saveNewExpense={saveNewExpenseData} />
    </div>
  )
}

export default NewExpense;