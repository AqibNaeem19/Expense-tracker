import React from 'react';

const ExpenseFilter = (props) => {

  let expenseYearsArray = [2020];

  // generates the years from 2020 to current year and save it to Array.
  // used to generate dynamically options for select tag.
  const _renderOptionsListDynamically = () => {
    const year = new Date().getFullYear();
    while (year > expenseYearsArray[0]) {
      const nextYear = expenseYearsArray[0] + 1;
      expenseYearsArray.unshift(nextYear);
    }
  }

  _renderOptionsListDynamically();

  // sent value to parent and set state to current value.
  const expenseYearDropDownChange = event => {
    props.onChangeExpenseYear(event.target.value);
  };

  // render options through array of years.
  const renderExpenseYearFilter = expenseYearsArray.map( (item, index) => {
    return (
      <option key={index} value={`${item}`}>{item}</option>
    )
  })

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={expenseYearDropDownChange} >
          {renderExpenseYearFilter}
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter