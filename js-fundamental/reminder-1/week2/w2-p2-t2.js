const library = {
  name: "Library of good books",

  // Buat objects books
  books: [
    {
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
      available: true,
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      year: 2020,
      available: true,
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      year: 1997,
      available: false,
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      year: 1936,
      available: true,
    },
    { title: "Deep Work", author: "Cal Newport", year: 2016, available: false },
  ],

  // Method findByAuthor - return array buku dari author tersebut
  findByAuthor: function (author) {
    return this.books.find((a) => a.author === author);
  },

  // Method getAvailable() - return array buku yang available: true
  getAvailable: function () {
    return this.books.filter((b) => b.available);
  },

  // Method summary() - return string: "Library X punya N buku, M tersedia"
  summary: function () {
    return `Library ${library.name} punya ${library.books.length} buku, ${library.getAvailable().length} tersedia`;
  },
};

console.log(library.books[1].title);
console.log(library.findByAuthor("James Clear"));
console.log(library.getAvailable());
console.log(library.summary());
