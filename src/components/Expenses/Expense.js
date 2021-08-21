import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import '../Styles/Expense.css';

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  // pass func to child and get value from dropdown.
  const expenseYearChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  // return all rendered ExpenseItems Components
  // const renderExpenseList = props.expenseList.map(item => {
  //   return (
  //     <ExpenseItem
  //       key={item._id}
  //       id={item._id}
  //       price={item.expenseItemPrice}
  //       name={item.expenseItemName}
  //       purchasedDate={item.itemPurchaseDate}
  //     />
  //   )
  // })

  const filteredExpenses = props.expenseList.filter(expense => {
    return expense.itemPurchaseDate.getFullYear().toString() === filterYear;
  });

  const renderExpenseList = filteredExpenses.map(item => {
    return (
          <ExpenseItem
            key={item._id}
            id={item._id}
            price={item.expenseItemPrice}
            name={item.expenseItemName}
            purchasedDate={item.itemPurchaseDate}
          />
        )
  })

  return (
    <div className='expense'>
      <ExpenseFilter selected={filterYear} onChangeExpenseYear={expenseYearChangeHandler} />
      {renderExpenseList.length === 0 ? <p className='no-expense__paragraph'>No Expense Found</p> : renderExpenseList}
    </div>
  )
}

export default Expense;