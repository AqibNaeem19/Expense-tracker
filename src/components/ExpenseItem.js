import './ExpenseItem.css'

export default function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <div> {props.purchasedDate} </div>
      <div className='expense-item__description'>
        <h2> {props.name} </h2>
      </div>
      <div className='expense-item__price'>$ {props.price}</div>
    </div>
  )
}