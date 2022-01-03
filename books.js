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

console.log(checkStatus.checked)

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
        //exp. creates a delete button on entry
        let delBtn = document.createElement('BUTTON');
        delBtn.innerHTML = 'Delete Entry'
        myDisplay.appendChild(delBtn)
        console.log('display works')
    }
 }

 function refreshDisplay() {
    const clearBook = document.querySelectorAll('.newEntry');
    clearBook.forEach(book => book.remove());
 }

//prototype has to include 'this.object'
book.prototype.info = function() {
    return this.title + " by " + this.author +'. ' + "Pages: " + this.pages + '. ' + this.read
};

const theHobbit = new book('The Hobbit', 'JRR Tolken', 'alot', 'yes, I have read it')
console.log(theHobbit.info())

//notes
//in displayTiles have each book/tile increase with the counter, and pull from myLibrary
//ex. myLibrary[i].title/pages/author/read
// use myLibrary[0].info() to get full thing
//need to have the display not add previous entries.
//-in the submit button, have it pass the next index to displayTiles in a way that doesn't make it repeat.
//- have a counter in submit that increases myLibrary[].info each time it is pressed
//give each DOM element a data-attribute that corresponds to the index nof the library array.

function openForm() {
    document.getElementById("formPopup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("formPopup").style.display = "none";
    clearStatus();
  }



  function formFill() {
    if(document.getElementById("title").value==="" || document.getElementById("author").value==="" || document.getElementById("pages").value==="") { 
           document.getElementById('submit').disabled = true; 
       } else { 
           document.getElementById('submit').disabled = false;
       }
   }