import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {

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
      {renderExpenseList}
    </React.Fragment>
  )
}

export default Expense;