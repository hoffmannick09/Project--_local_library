const { getBorrowersForBook } = require("./books")

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let counter = 0
  for (let i = 0; i < books.length; i++){
     for (let j = 0; j < books[i].borrows.length; j++){
        if (books[i].borrows[j].returned === false){
          counter ++
      }
     }
    }
    return counter
  }

function getMostCommonGenres(books) {
  let commonGenres = []
  let genresArray = books.map((book) => book.genre);
  genresArray.forEach(genre => {
    let exists = commonGenres.find(bookGenre => bookGenre.name === genre)
    if (!exists){
      commonGenres.push({name: genre, count: 1})
    }
    else {exists.count++}
  })
  commonGenres.sort((genreA, genreB) => (genreB.count > genreA.count ? 1 : -1))

  commonGenres.splice(5)

  return commonGenres
}


/*
loop through books array
looks at genre, counts genre
order from most to least
return in an array that is no longer than 5 as a key value pair with 'name" and 'count'
*/


function getMostPopularBooks(books) {
  let popularBooks = []
  books.forEach( (book) => {
    let exists = popularBooks.find(title => title.name === book.id)
    if (!exists){
      popularBooks.push({name: book.title, count: book.borrows.length})
    }
  })
  popularBooks.sort((bookA, bookB) => (bookB.count > bookA.count ? 1 : -1))

  popularBooks.splice(5)

  return popularBooks
}


function getMostPopularAuthors(books, authors) {
  
  //establish empty array to recieve result
   let authorsResult = [];

  //find the top author by matching the id, and further - the most borrowed book, by using borrows.length
  let popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
     popularAuthor.forEach((book) => {
       
       //the author match 
      let author = authors.find((author) => author.id === book.authorId);
      
       //push the full name and count to the result array 
      authorsResult.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });

  //return in one whole line - the sort based on count and then splice the top 5
  return (authorsResult.sort((countA, countB) => countA.count < countB.count ? 1 : -1)).slice(0, 5);
  
  
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
