import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  // pass func to child and get value from dropdown.
  const expenseYearChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  // return all rendered ExpenseItems Components
  const renderExpenseList = props.expenseList.map(item => {
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
    <React.Fragment>
      <ExpenseFilter selected={filterYear} onChangeExpenseYear={expenseYearChangeHandler} />
      {renderExpenseList}
    </React.Fragment>
  )
}

export default Expense;