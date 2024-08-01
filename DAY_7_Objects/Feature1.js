/* Feature Request -> 1 :
    Book Object Script:
        - Write a script that creates a book object, adds methods to it and logs its properties and method results.
*/

const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
  getTitleAuthor: function () {
    return this.title + " by " + this.author;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

console.log("Title: ", book.title);
console.log("Author: ", book.author);
console.log("Title and Author: ", book.getTitleAuthor());
book.updateYear(2000);
console.log("Updated Year: ", book.year);
