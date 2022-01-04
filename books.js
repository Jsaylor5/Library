let myLibrary = []

function book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

let displayTitle = document.getElementById("title");
let displayAuthor = document.getElementById("author");
let displayPages = document.getElementById("pages");
let checkStatus = document.getElementById("check");

const addBookToLibrary = () => {
    let title = displayTitle.value;
    let author = displayAuthor.value;
    let pages = displayPages.value;
    let read = readStatus();
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
};

//submit button
const submitButtton = document.querySelector('#submit')
submitButtton.addEventListener('click', () => {
    addBookToLibrary();
    clearStatus();
    refreshDisplay();
    displayTiles(myLibrary.length);
    document.getElementById('submit').disabled = true;
    console.log('submit works')
});


const clearStatus = () => {
    displayTitle.value = '';
    displayAuthor.value = '';
    displayPages.value = '';
    checkStatus.checked = false;
};

const readStatus = () => {
    if (checkStatus.checked == true) {
        return 'Yes, I have read it.';
        
    } else {
        return 'No, I have not read it.';
    }
};
 
const myDisplay = document.querySelector('#myDisplay');

function displayTiles(displayLength){
    for (let i=0; i < displayLength; i++){
        const individualBook = document.createElement('div');
        individualBook.innerHTML = myLibrary[i].info();
        individualBook.classList.add('newEntry');
        myDisplay.appendChild(individualBook);
        createDel(i);
    }
};

function refreshDisplay() {
    const clearBook = document.querySelectorAll('.newEntry');
    clearBook.forEach(book => book.remove());
    const clearDel = document.querySelectorAll('#delBtn')
    clearDel.forEach(btn => btn.remove());

};

//prototype has to include 'this.object'
book.prototype.info = function() {
    return this.title + " by " + this.author +'. ' + "Pages: " + this.pages + '. ' + this.read
};

function openForm() {
    document.getElementById("formPopup").style.display = "block";
};
  
function closeForm() {
    document.getElementById("formPopup").style.display = "none";
    clearStatus();
};

//create delete button
function createDel(i) {
    let delBtn = document.createElement('BUTTON');
    delBtn.innerHTML = 'Delete Entry';
    delBtn.id = 'delBtn';
    delBtn.addEventListener('click', () => {
        console.log('del clicked');
        deleteBtn(delBtn.dataset.indexNumber);
    });
    delBtn.dataset.indexNumber = i;
    myDisplay.appendChild(delBtn);
};
//delete function
function deleteBtn(delNum) {
    myLibrary.splice(delNum, 1);
    refreshDisplay();
    displayTiles(myLibrary.length);
}


//disables input if fields are not present
function formFill() {
    if(document.getElementById("title").value==="" || document.getElementById("author").value==="" || document.getElementById("pages").value==="") { 
           document.getElementById('submit').disabled = true; 
       } else { 
           document.getElementById('submit').disabled = false;
       }
};

//prefilled books
const bookOne = new book('The Name of the Wind', 'Patrick Rothfuss', 662, 'Yes, I have read it.')
myLibrary.push(bookOne)

const bookTwo = new book('The Way of Shadows', 'Brent Weeks', 668, 'Yes, I have read it.')
myLibrary.push(bookTwo)

const bookThree = new book('Darkness at Noon', 'Arthur Koestler', 228, 'Yes, I have read it.')
myLibrary.push(bookThree)

const bookFour = new book('Red Storm Rising', 'Tom Clancy', 656, 'Yes, I have read it.')
myLibrary.push(bookFour)

displayTiles(myLibrary.length);
