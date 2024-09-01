/* Feature Request -> 2 :
    Library Object Script:
        - Create a script that defines a library object containing an array of book objects and logs the library's details.
*/

const book1 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
};

const book2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

const library = {
  name: "Hogwarts",
  books: [book1, book2],
  logDetails: function () {
    console.log(`Library Name: ${this.name}`);
    console.log("Books:");
    this.books.forEach((book) =>
      console.log(`- ${book.title} by ${book.author} (${book.year})`)
    );
  },
};

library.logDetails();
