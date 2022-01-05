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
        return true;
        
    } else {
        return false;
    }
};
 
const myDisplay = document.querySelector('#myDisplay');

function displayTiles(displayLength){
    for (let i = 0; i < displayLength; i++){
        const individualBook = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const readBtn = document.createElement('button');
        const delBtn = document.createElement('button');

        myDisplay.appendChild(individualBook);

        individualBook.classList.add('newEntry');
        individualBook.dataset.indexNumber = i;

        bookTitle.innerHTML = myLibrary[i].title;
        bookTitle.classList.add('title');
        individualBook.appendChild(bookTitle);

        bookAuthor.innerHTML = myLibrary[i].author;
        bookAuthor.classList.add('author');
        individualBook.appendChild(bookAuthor);

        bookPages.innerHTML = myLibrary[i].pages;
        bookPages.classList.add('pages');
        individualBook.appendChild(bookPages);

        readBtn.classList.add('readBtn')
        individualBook.appendChild(readBtn)
        if (myLibrary[i].read === true){
            readBtn.innerHTML = 'Read'
        }
        else{
            readBtn.innerHTML = 'Not read'
        };
        readBtn.addEventListener('click', () => {
            if (myLibrary[i].read === true){
                myLibrary[i].read = false;
                readBtn.innerHTML = 'Not read';
            }
            else{
                myLibrary[i].read = true;
                readBtn.innerHTML = 'Read';
            }
        });

        delBtn.classList.add('delBtn');
        delBtn.innerHTML = 'Delete';
        delBtn.addEventListener('click', () => {
            console.log('del clicked');
            deleteBtn(delBtn.dataset.indexNumber);
        });
        individualBook.appendChild(delBtn);
        
    }
};


function refreshDisplay() {
    const clearBook = document.querySelectorAll('.newEntry');
    clearBook.forEach(book => book.remove());
    const clearDel = document.querySelectorAll('#delBtn')
    clearDel.forEach(btn => btn.remove());

};

//prototype has to include 'this.object'
//no longer used in this project
// book.prototype.info = function() {
//     return this.title + " by " + this.author +'. ' + "Pages: " + this.pages + '. ' + this.read
// };

function openForm() {
    document.getElementById("formPopup").style.display = "block";
};
  
function closeForm() {
    document.getElementById("formPopup").style.display = "none";
    clearStatus();
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
const bookOne = new book('The Name of the Wind', 'Patrick Rothfuss', 662, true)
myLibrary.push(bookOne)

const bookTwo = new book('The Way of Shadows', 'Brent Weeks', 668, true)
myLibrary.push(bookTwo)

const bookThree = new book('Darkness at Noon', 'Arthur Koestler', 228, true)
myLibrary.push(bookThree)

const bookFour = new book('Red Storm Rising', 'Tom Clancy', 656, true)
myLibrary.push(bookFour)

displayTiles(myLibrary.length);
