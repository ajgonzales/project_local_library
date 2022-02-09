function getTotalBooksCount(books) {
  //return the number of elements(book objects) in the books array
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //return the number of elements(account objects) in the accounts array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //use .filter method to search through each book object
  //check within the borrows object if the first object has the returned property stated as true
  // return the length of the filtered array
  return books.filter(book => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  //using the .reduce method create an array of filtered books that have the genre and the number of times the genre is used
  //use conditional statements and .find method to format each element
  const genreArray = books.reduce((arr, book) => {
    let genreExist = arr.find(item => item.name === book.genre);
   if(genreExist){
     genreExist.count++
   } else {
     let obj = {name: book.genre, count: 1}
     arr.push(obj);
   }
    return arr;
  },[]);
  //pass through helper method (_getTopFive) to sort and slice elements
  return _getTopFive(genreArray);
}

function getMostPopularBooks(books) {
  //using .map method to create an array that has the title of the book, and the number of the times said book has been borrowed
  let result = books.map(book => {
    return {name: book.title, count: book.borrows.length}; 
  });
  //pass through helper method (_getTopFive) to sort and slice elements
  return _getTopFive(result);
}

function getMostPopularAuthors(books, authors) {
  //initialize an empty array as a placeholder 
  //using .forEach method to add elements(author, and number of times books by the author have been borrowed) to the placeholder array
  let result = [];
  authors.forEach(author => {
    //intialize a placeholder object to build the element to push into array
    let popAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };

    //using .forEach and conditional statement to build placeholder object
    books.forEach(book => {
      if(book.authorId === author.id) {
        popAuthor.count += book.borrows.length;
      }
    })

    //pushing elements into
    result.push(popAuthor);
  })
  //pass through helper method (_getTopFive) to sort and slice elements
  return _getTopFive(result);
}

function _getTopFive (arr) {
  //helper method that sorts and slices books in an array to get top five
  return arr.sort((a,b) => b.count - a.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
