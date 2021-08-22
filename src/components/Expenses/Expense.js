import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import '../Styles/Expense.css';

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  // pass func to child and get value from dropdown.
  const expenseYearChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.expenseList.filter(expense => {
    return expense.itemPurchaseDate.getFullYear().toString() === filterYear;
  });

  return (
    <div className='expense'>
      <ExpenseFilter selected={filterYear} onChangeExpenseYear={expenseYearChangeHandler} />
      <ExpensesChart expense={filteredExpenses} />
      <ExpenseList expenseList={filteredExpenses} />
    </div>
  )
}

export default Expense;