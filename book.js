const catalogue = document.querySelector("#catalogue");
const titleInput = document.querySelector("#book-name");
const authorInput = document.querySelector("#book-author-name");
const pagesInput = document.querySelector("#book-pages");
const readInput = document.querySelector("#book-read-status");
const bookAddForm = document.querySelector("#add-book-form");
const submitBut = document.querySelector(".submit-button");
const delBookBut = document.querySelector(".delete-book");
const readCheckBut = document.querySelector(".read-check");


let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
}

function appendToCatalogue(book, id){
  let myBookTitle = book.title;
  let myBookAuthor = book.author;
  let myBookPages = book.pages;
  let myBookRead = book.read;

  if (myBookRead){
    myBookRead = "Read";
  }else{
    myBookRead = "Unread";
  }

  let myBook = document.createElement("div")
  myBook.setAttribute("class", "book");
  myBook.setAttribute("data-id", id);
  myBook.innerHTML = `
    <div class="book-options">
      <img class="read-check" src="./${myBookRead}.png"  onClick="toggleReadStatus(this, ${id})" alt="Change read status" title="Change read status">
      <img class="delete-book" onClick="deleteBook(${id})" src="./delete.png" alt="Delete book icon" title="Delete this book">
    </div>
    <div class="book-info">
      <div class="book-name">${myBookTitle}</div>
      <div class="author">${myBookAuthor}</div>
      <div class="pages">${myBookPages} pages</div>
      <div class="read-status">${myBookRead}</div>
    </div>
                    `
  catalogue.appendChild(myBook);
}

function addBookToLibrary(e) {
  e.preventDefault();
  let myBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)
  myLibrary.unshift(myBook);
  initShowBooks();
}

function initShowBooks() {
  catalogue.innerHTML = "";
    myLibrary.forEach((book, id) => {
      appendToCatalogue(book, id);
    });
}

function deleteBook(id){
  myLibrary.splice(id, 1);
  initShowBooks();
}

function toggleReadStatus(elm, id){
  let statusText = document.querySelector(`.book[data-id='${id}'] .read-status`);
  if (myLibrary[id].read){
    elm.src = "./Unread.png";
    myLibrary[id].read = false;
    statusText.innerText = "Unread";
  }else {
    elm.src = "./Read.png";
    myLibrary[id].read = true;  
    statusText.innerText = "Read";
  }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", 34, false);
let book2 = new Book("Forestt Gump", "Miua", 12, true);

myLibrary.unshift(book1);
myLibrary.unshift(book2);
console.log(myLibrary, book1, book2)
initShowBooks();


bookAddForm.addEventListener("submit", addBookToLibrary);