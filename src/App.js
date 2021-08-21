import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import {generateRandomId} from './Helper/GenerateRandomId';

function App() {
  // array containing objects for various expense items.
  const ExpenseItems = [
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 67.8, 
      expenseItemName: 'Toilet Paper', 
      itemPurchaseDate: new Date() 
    },
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 15.77, 
      expenseItemName: 'Skimmed Milk', 
      itemPurchaseDate: new Date() 
    },
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 203.99, 
      expenseItemName: 'Groceries', 
      itemPurchaseDate: new Date()
    },
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 500, 
      expenseItemName: 'Health Insuranse', 
      itemPurchaseDate: new Date()
    },
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 55.06, 
      expenseItemName: 'Jogging Shoes', 
      itemPurchaseDate: new Date()
    }
  ]

  const addNewExpenseHandler = newExpensedData => {
    const newExpense = {...newExpensedData,
      _id: generateRandomId()
    };
    console.log(newExpense);
  }

  return (
    <div className="App">
      <NewExpense addNewExpense={addNewExpenseHandler} />
      <Expense expenseList={ExpenseItems}/>
    </div>
  );
}

export default App;
