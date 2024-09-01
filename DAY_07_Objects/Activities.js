/* Activity -> 1 : Object Creation and Access */

// Task_1 - Create an object representing a book with properties like title, author and year and log the object to the console.

const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
};

console.log(book);

// Task_2 - Access and log the title and author properties of the book object.

console.log("Title : ", book.title);
console.log("Author : ", book.author);

/* Activity -> 2 : Object Methods */

// Task_3 - Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

const book1 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
  name: function getTitleAuthor() {
    return this.title + " By " + this.author;
  },
};

console.log(book1.name());

// Task_4 - Add a method to the book object that takes a parameter (year)and update's the book's year property then log the updated object.

const book2 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
  updatedYear: function (newYear) {
    this.year = newYear;
  },
};

book2.updatedYear(2000);
console.log(book2);

/* Activity -> 3 : Nested Objects */

// Task_5 - Create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console.

const book3 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
};

const book4 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

const library = {
  name: "Hogwarts",
  books: [book3, book4],
};

console.log(library);

// Task_6 - Access and log the name of the library and the titles of all books in the library.

console.log("library name", library.name);

for (let i = 0; i < library.books.length; i++) {
  console.log("Book Title", library.books[i].title);
}

for (let key in library.books) {
  console.log(library.books[key].title);
}

for (let book of library.books) {
  console.log(book.title);
}

library.books.forEach((book) => {
  console.log("Book Title:", book.title);
});

/* Activity -> 4 : The 'this' Keyword */

// Task_7 - Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year and log the result of calling this method.

const book5 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
  TitleandYear: function () {
    return this.title + " In " + this.year;
  },
};

console.log(book5.TitleandYear());

/* Activity -> 5 : Object Iteration */

// Task_8 - Use a 'for...in' loop to iterate over the properties of book object and log the each property and its value.

const book6 = {
  title: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
  TitleandYear: function () {
    return this.title + " In " + this.year;
  },
};

for (let x in book6) {
  console.log(`${x} : ${book6[x]}`);
}

for (let key in book6) {
  if (book6.hasOwnProperty(key)) {
    // Check if the property is a direct property of the object
    if (typeof book6[key] === "function") {
      console.log(`${key}: [Function]`);
    } else {
      console.log(`${key}: ${book6[key]}`);
    }
  }
}

// Task_9 - Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.

const book7 = {
  title: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
  TitleandYear: function () {
    return this.title + " In " + this.year;
  },
};

const keys = Object.keys(book7);
console.log("Keys:");
keys.forEach((key) => console.log(key));

const values = Object.values(book7);
console.log("Values:");
values.forEach((value) => {
  if (typeof value === "function") {
    console.log("[Function]");
  } else {
    console.log(value);
  }
});
