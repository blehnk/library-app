//---------INITIALIZATION----------//
const addBookBtn = document.querySelector('.addBookBtn');
let library = document.querySelector('.library');
let showForm = document.querySelector('.showForm');
let form = document.querySelector('form');
let display = document.querySelector('.display')
let myLibrary = [];
let book = {};
let serial = 0;
let index;
let readValue = "yes";

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
        book.serial = serial;

        serial++;
        index =  book.serial;
}

//Display the new books on the website
function displayBook() {

    form.classList.toggle('hidden');
    display.classList.toggle('filter');

    //Create the structure to display the book
    let divCard = document.createElement('div');
    divCard.classList.add("bookCard");
    divCard.dataset.index = index;

    //create remove button
    let removeBtn = document.createElement('button');
    removeBtn.classList.add("remove", "btn");
    removeBtn.textContent = "Remove Book";

    //create read button
    let readBtn = document.createElement('button');
    readBtn.classList.add("readStatus", "btn");
    readBtn.textContent = "Set Status";
    

    for(let i = 0; i < 3; i++){
        let divBlock = document.createElement('div');
        divBlock.classList.add("block");
       
        for(let i = 0; i < 2; i++){
            divBlock.appendChild(document.createElement('span'));
        }

        divCard.appendChild(divBlock);
    }

    let specialBlock = document.createElement('div');
    specialBlock.appendChild(document.createElement('span'));
    specialBlock.appendChild(readBtn);
    specialBlock.classList.add("specialBlock");


    divCard.appendChild(specialBlock);

    divCard.appendChild(removeBtn);

    library.appendChild(divCard);  

    //fill the textContent of the book to display
    divCard.children[0].firstElementChild.textContent = "Title:";
    divCard.children[1].firstElementChild.textContent = "Author:";
    divCard.children[2].firstElementChild.textContent = "Pages:";
    divCard.children[3].firstElementChild.textContent = "READ?";

    divCard.children[0].lastElementChild.textContent = book.title;
    divCard.children[1].lastElementChild.textContent = book.author;
    divCard.children[2].lastElementChild.textContent = book.pages;


    //event to remove books
    removeBtn.addEventListener('click', removeBook);

    //event to change read status
    readBtn.addEventListener('click', readStatus);   
}


//function to remove a book from the page
function removeBook(e) {
    let bookIndex;

    for(let book of myLibrary){

        if(book.serial == e.target.parentElement.dataset.index){
            bookIndex = myLibrary.indexOf(book);
        }
    }

    e.target.parentElement.style.display = "none";
    myLibrary.splice(bookIndex, 1);
}

//function to toggle read status
function readStatus(e) {
    let bookIndex;

    for(let book of myLibrary){

        if(book.serial == e.target.parentElement.parentElement.dataset.index){
            bookIndex = myLibrary.indexOf(book);
        }
    }
    e.target.previousSibling.classList.toggle("true");

    if(e.target.previousSibling.classList.contains(true)){
        myLibrary[bookIndex].read = "true";
        e.target.textContent = "Yes!";

        e.target.parentElement.parentElement.classList.toggle("read");
    } 
    
    else {
        myLibrary[bookIndex].read = "false";
        e.target.textContent = "No";

        e.target.parentElement.parentElement.classList.toggle("read");
    }
}


//------------------EVENTS-----------------//

//add new books to myLibrary after clicking the submit button
addBookBtn.addEventListener('click', addBookToLibrary);

//event to display books
addBookBtn.addEventListener('click', displayBook);

//event to display the form
showForm.addEventListener('click', () => {
    form.classList.toggle('hidden');
    display.classList.toggle('filter');
})