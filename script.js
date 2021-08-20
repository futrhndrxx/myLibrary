let myLibrary = [];
const libraryContainer = document.querySelector('.library-container');


function Book(book, author, pages) {
  this.book = book;
  this.author = author;
  this.pages = pages;
}
Book.prototype.addBookToLibrary = addBookToLibrary;

function addBookToLibrary(b) {
  myLibrary.push(b);
    }


let button = document.querySelector('button');
let input = document.querySelector('input');
let container = document.querySelector('.container');
button.addEventListener('click', () => {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    if (title.value != "" && author.value != "" && pages.value != "") {
      //let read = document.getElementById("read");
      let book1 = new Book(title.value, author.value, pages.value);
      addBookToLibrary(book1);
      let length = myLibrary.length;
      let bookContainer = document.createElement('div');
      bookContainer.classList.add('book-container');
      let bookTitle = document.createElement('div');
      bookTitle.classList.add('book-title');
      bookTitle.textContent =  `${title.value}`;
      let bookAuthor = document.createElement('div');
      bookAuthor.classList.add('book-author');
      bookAuthor.textContent =  `${author.value}`;
      let bookPages = document.createElement('div');
      bookPages.classList.add('book-pages');
      bookPages.textContent =  `${pages.value}`;
      libraryContainer.appendChild(bookContainer);
      bookContainer.appendChild(bookTitle);
      bookContainer.appendChild(bookAuthor);
      bookContainer.appendChild(bookPages);
    
    title.value = "";
    author.value = "";
    pages.value = "";
    console.log(myLibrary);
    }
});

function runThatShit() {
  console.log(`title: ${title.value} \n author: ${author.value} \n pages: ${pages.value}`)

}
