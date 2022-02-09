function findAccountById(accounts, id) {
  //using .find method to search through accounts array to find a specific account
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //using .sort method to compare account names in combination with conditional and .toLowerCase method
  return accounts.sort((accA, accB) => accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
  //initializing a placeholder to count the number of times a book has been borrowed
  //using a nested for loop to check through the length of the borrows object for each book per account using a conditional statement
  let totalBorrows = 0;

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    for (let j = 0; j < book.borrows.length; j++) {
     if (account.id === book.borrows[j].id) {
      totalBorrows++;
      }
    }
  }
  
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  //intialize a placeholder array that will hold the value of the final result
  let result = [];

  //using the .forEach method iterate through the books array to build the final result
  books.forEach(item => {
     //initialize a book object as a copy from the books array
     //initialize a placeholder for the borrows object
     //deconstruct the book object to build the author and borrows elements
    const book = {...item};
    const borrowz = item.borrows; 
    const {id, title, genre, authorId, author, borrows} = book;

    //using .forEach method to build author and borrows elements using conditional statement
    borrowz.forEach(borrow => {
      if(borrow.id === account.id && !borrow.returned) {
        book.author = authors.find(auth => auth.id === book.authorId);
        //add element to final result
        result.push(book);
      }
    })
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
