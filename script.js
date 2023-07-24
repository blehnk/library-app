//---------INITIALIZATION----------//
const addBookBtn = document.querySelector('.addBookBtn');
let library = document.querySelector('.library');
let myLibrary = [];
let book = {};
let serial = 0;
let index;
let removeBookBtn = document.querySelectorAll('.remove');

//constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


//--------------------FUNCTIONS-------------------//

//function to add books to myLibrary
function addBookToLibrary(e){

        e.preventDefault();

        book = Object.create(Book);
        myLibrary.push(book);

        book.title = document.querySelector("input[id='title']").value;
        book.author = document.querySelector("input[id='author']").value;
        book.pages = document.querySelector("input[id='pages']").value;
        book.read = document.querySelector("input[id='read']").value; 
        book.serial = serial;

        serial++;
        index =  book.serial;
}

//Display the new books on the website
function displayBook() {

    //Create the structure to display the book
    let divCard = document.createElement('div');
    divCard.classList.add("bookCard");
    divCard.dataset.index = index;

    let removeBtn = document.createElement('button');
    removeBtn.classList.add("remove");
    removeBtn.textContent = "Remove Book";

    for(let i = 0; i < 4; i++){
        let divBlock = document.createElement('div');
        divBlock.classList.add("block");
       
        for(let i = 0; i < 2; i++){
            divBlock.appendChild(document.createElement('span'));
        }

        divCard.appendChild(divBlock);
    }
    divCard.appendChild(removeBtn);

    library.appendChild(divCard);  

    //fill the textContent of the book to display
    divCard.children[0].firstElementChild.textContent = "Title: ";
    divCard.children[1].firstElementChild.textContent = "Author: ";
    divCard.children[2].firstElementChild.textContent = "Number of Pages: ";
    divCard.children[3].firstElementChild.textContent = "Did you read it?: ";

    divCard.children[0].lastElementChild.textContent = book.title;
    divCard.children[1].lastElementChild.textContent = book.author;
    divCard.children[2].lastElementChild.textContent = book.pages;
    divCard.children[3].lastElementChild.textContent = book.read;


    //event to remove books
    removeBtn.addEventListener('click', removeBook);
}


//function to remove a book from the page
function removeBook(e) {
    let bookIndex;
    for(let book of myLibrary){
        if(book.serial == e.target.parentElement.dataset.index){
            console.log(book.serial);
            bookIndex = myLibrary.indexOf(book);
        }
    }
    console.log(bookIndex);
    e.target.parentElement.style.display = "none";
    myLibrary.splice(bookIndex, 1);
}



//------------------EVENTS-----------------//

//add new books to myLibrary after clicking the submit button
addBookBtn.addEventListener('click', addBookToLibrary);

//event to display books
addBookBtn.addEventListener('click', displayBook);
