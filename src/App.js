import ExpenseItem from './components/ExpenseItem';

// Array holds all the assigned ExpenseIds.
let usedIds = [];

// Function to generate and validate the ExpenseId.
function generateRandomId(){

  let ExpenseId = '';
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  //selects random characters from alphabets array and concatinates them.
  for(let i = 0; i < 10; i++){
    let selectRandomCharacter = alphabets[Math.floor(Math.random() * alphabets.length ) ];
    ExpenseId = ExpenseId + selectRandomCharacter;
  }

  // validate wheather theres already existing id or not
  if( usedIds.includes(ExpenseId)){
    console.log("Similar Id found to be already existing!!. Creating a new Id.");
    generateRandomId();
  } else {
    console.log("Created a uique Id, pushing it to id record");
    usedIds.push(ExpenseId);
  }

  return ExpenseId;
}


function App() {
  // array containing objects for various expense items.
  const ExpenseItems = [
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 67.8, 
      expenseItemName: 'Toilet Paper', 
      itemPurchaseDate: new Date().toDateString() 
    },
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 15.77, 
      expenseItemName: 'Skimmed Milk', 
      itemPurchaseDate: new Date().toDateString() 
    },
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 203.99, 
      expenseItemName: 'Groceries', 
      itemPurchaseDate: new Date().toDateString() 
    },
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 500, 
      expenseItemName: 'Health Insuranse', 
      itemPurchaseDate: new Date().toDateString() 
    },
    { 
      _id: generateRandomId(), 
      expenseItemPrice: 55.06, 
      expenseItemName: 'Jogging Shoes', 
      itemPurchaseDate: new Date().toDateString() }
  ]

  // return all rendered ExpenseItems Components
  const passEachExpenseItemAsProp = ExpenseItems.map( item => {
    return (
      <ExpenseItem 
        key = {item._id}
        id = {item._id} 
        price = {item.expenseItemPrice} 
        name = {item.expenseItemName} 
        purchasedDate = {item.itemPurchaseDate} 
      />
    )
  })


  return (
    <div className="App">
      <h1>Hello from React Js</h1>
      <p>I am the paragraph</p>
      <hr />
      { passEachExpenseItemAsProp }
    </div>
  );
}

export default App;
