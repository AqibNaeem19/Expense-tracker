import ExpenseDate from './ExpenseDate';
import '../Styles/ExpenseItem.css';

export default function ExpenseItem(props) {
  return (
      <div className='expense-item'>
        <ExpenseDate date={props.purchasedDate} />
        <div className='expense-item__description'>
          <h2> {props.name} </h2>
          <div className='expense-item__price'>$ {props.price}</div>
        </div>
      </div>
  )
}