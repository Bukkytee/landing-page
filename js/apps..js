// VARIABLES
let form = document.querySelector('#book-form'),
    title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    tableBody = document.querySelector('#book-list')

let error = true // initially both the fields are blank


// EVENT LISTENERS
title.addEventListener('blur', validation);
author.addEventListener('blur', validation);
form.addEventListener('submit', addBookToList);
tableBody.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', init);


//FUNCTIONS
function validation() {
    if(this.value != '') {
        this.className = 'form-control is-valid';
        error = false;
    }
    else{
        this.className = 'form-control is-invalid';
        error = true;
        this.nextElementSibling.className = 'invalid-feedback';
        this.nextElementSibling.textContent = 'Field can\'t be left blank';
    }
}

function addBookToList(e) {
    e.preventDefault();
    if(error == false) {
        let bookName = title.value,
            bookAuthor = author.value;

        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${bookName}</td>
        <td>${bookAuthor}</td>
        <td><a href= '#' class= 'btn btn-danger btn-sm'>X</a></td>
        `
        tableBody.appendChild(tr);

        form.reset();
        title.className = 'form-control';
        author.className = 'form-control';

        addtoLocalStorage(bookName, bookAuthor);
    }
}

function removeBook(e) {
    //console.log(e.target);
    if(e.target.classList.contains('btn-danger')) {
        //console.log(e.target.parentElement.parentElement.firstElementChild.textContent)
        //remove from Local Storage
        removeBookFromLocalStorage(e.target.parentElement.parentElement.firstElementChild.textContent);
        // remove from DOM
        e.target.parentElement.parentElement.remove();
    }
}

function removeBookFromLocalStorage(book) {
    let books =JSON.parse(localStorage.getItem("books"));
    Object.keys(books).forEach(function(book, index){
        if(book.book === book) {
            books.splice(index, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify('books'));
}

function getFromLocalStorage() {
    if(localStorage.getItem('books') == null) {
        localStorage.setItem('books', '[]');
        return JSON.parse(localStorage.getItem('books'));
    }
    else {
        return JSON.parse(localStorage.getItem('books'));
    }
}

function addtoLocalStorage() {
    let obj = {
        book: "bookName",
        author: "authorName"
    };

    let obj_serialized = JSON.stringify(obj);
    //let ls = getFromLocalStorage();
    //console.log(getFromLocalStorage);
    //let obj = [];
    //ls.push(obj);
    localStorage.setItem("obj", obj_serialized);
    //localStorage.setItem('obj', JSON.stringify('obj'));
    JSON.parse(localStorage.getItem('obj'));
}


function init(bookName, authorName) {
    //let book = getFromLocalStorage();
    let books = JSON.parse(localStorage.getItem('books'));
    let obj = {
        book: "bookName",
        author: "authorName"
    }
    const keys = Object.keys(obj);

    console.log(keys)
    keys.forEach((book, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML =`
        <td>${book.book}</td>
        <td>${book.author}</td>
        <td><a href = '#' class = 'btn btn-danger btn-sm'>X</a></td>
        `
        tableBody.appendChild(tr);
    })
        

}