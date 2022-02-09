function findAuthorById(authors, id) {
  //using .find method to search through authors array for a specific author 
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  //using .find method to search through books array for a specific book
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //using .filter and .some methods to check within the borrows object to see if a book has not been returned
  //using .filter and .every methods to check within the borrows object to see if a book has been returned
  //using spreader operators to create two arrays and returning those values
  let borrowed = books.filter(book => book.borrows.some(borrow => borrow.returned === false));
  let notBorrowed = books.filter(book => book.borrows.every(borrow => borrow.returned === true));
  return [[...borrowed],[...notBorrowed]];
}

function getBorrowersForBook(book, accounts) {
  //using .map method to iterate through borrows object for each book 
  //initializing placeholder variable to find matching account within accounts array
  //returning the two elements using spreader operator to create a single object
  //using .slice method to take only ten values
  return book.borrows.map(borrowz => {
    let account = accounts.find(account => account.id === borrowz.id);
    return {...borrowz,...account};
  }).slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
