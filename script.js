let title;
let count = 0;

const addBook = document.querySelector(".addBook");


//Array to to store book info
let myLibrary =[];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

addBook.addEventListener("click", function(e) {
    title = document.querySelector("input[id='title']").value;
    author = document.querySelector("input[id='author']").value;
    pages = document.querySelector("input[id='pages']").value;
    read = document.querySelector("input[id='read']").value;

    myLibrary[count] = new Book(title, author, pages, read);
    count++;

    document.querySelector("input[id='title']").value = '';
    document.querySelector("input[id='author']").value = '';
    document.querySelector("input[id='pages']").value = '';
    document.querySelector("input[id='read']").value = '';

    e.preventDefault();
})

