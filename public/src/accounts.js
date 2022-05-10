

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  let lastNameOrder = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return lastNameOrder
}

function getTotalNumberOfBorrows(account, books) {
  return numberOfBorrows = books.reduce((total, book) => {
    let idCount = book.borrows.filter(borrow => borrow.id === account.id).length;
    return total + idCount
  }, 0);
}


function getBooksPossessedByAccount(account, books, authors) {
//establish accountInfo 
  const accountInfo = account.id;

//HELPER FUNCTION TO USE WITH bookDetaails
  let booksPosessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);

//get details of the book including author
  let bookDetails = booksPosessed.map((detail) => ( {...detail, author: authors.find((author) => author.id === detail.authorId)}));

  //return whole object
  return bookDetails
}





/*
loop through array of objects
check if book is currently checked out by an id
put book into an array of objects
return array of objects INCLUDING author information
*/

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};