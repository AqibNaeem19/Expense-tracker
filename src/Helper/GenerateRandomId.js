// Array holds all the assigned ExpenseIds.
let usedIds = [];

// Function to generate and validate the ExpenseId.
function generateRandomId(){

  let ExpenseId = '';
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '&', '@', '#', '%'];

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

export {generateRandomId};