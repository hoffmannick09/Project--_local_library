function findAuthorById(authors, id) {
  let authorsId = authors.find((author) => author.id === id)
  return authorsId
}
console.log("is this here!!!")
/*
look through array of objects (books.authors)
check if id matches author object
if id matches author.id, return entire object
*/

function findBookById(books, id) {
  let booksId = books.find((book) => book.id === id)
  return booksId
}

/*
look through array of objects (books)
check for an id given in the function
check if id matches book id
if id in function matches book id, return that object
*/

function partitionBooksByBorrowedStatus(books) {
  //create two arrays that filter returned books and not returned books
  let isReturned = books.filter((book) => book.borrows[0].returned);
  let isNotReturned = books.filter((book) => !book.borrows[0].returned);
  

  //return arrays in order that test checks for them
  return [ isNotReturned, isReturned ]
  
} 

/*
loop through array (books)
check if is returned or not
if it is returned, push it into an array
if it is not returned, push into a different array
return both arrays
*/

function getBorrowersForBook(book, accounts) {
  let borrowList = [];
	let borrows = book.borrows;
	borrows.forEach((borrow) => {
    accounts.forEach((account) => {
      if (account.id === borrow.id) {
        account.returned = borrow.returned;
        borrowList.push(account);
      }
    });
	});
	return borrowList.slice(0,10);
}





module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
