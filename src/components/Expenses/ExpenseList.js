import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {

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

  const no_expense = <p className='no-expense__paragraph'>No Expense Found</p>
  
  return (
    <React.Fragment>
      {renderExpenseList.length === 0 ? no_expense : renderExpenseList}
    </React.Fragment>
  )
}
export default ExpenseList;