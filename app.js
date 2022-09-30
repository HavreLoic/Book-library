

let test = document.querySelector(".book-container");

test.addEventListener("click", function(e){
    if(e.target.className == "delete") {
        const dElement = e.target.parentElement;
        dElement.parentElement.removeChild(dElement);
    }
})

let form = document.forms["form"];

form.addEventListener("submit", function(e){
    e.preventDefault();
    const addValue = form.querySelector(`input[type="text"]`).value;
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.setAttribute("class", "book-list");
    button.setAttribute("class", "delete");


    div.appendChild(p);
    div.appendChild(button);
    test.appendChild(div);
    
    p.textContent = addValue;
    button.textContent = "delete"
})

const checkBox = document.querySelector("#hide");

checkBox.addEventListener("change", function(e){
    if(checkBox.checked){
        test.style.display = "none";
    } else {
        test.style.display = "initial";
    }
})

const search = document.querySelector("#search");
const bookList = document.querySelector(".book-list");
const bookListAll = document.querySelector(".book-container .book-list")

search.addEventListener("keyup", function(e){
    const searchTerm = e.target.value.toLowerCase();
    const compare = test.getElementsByTagName("p");

    Array.from(compare).forEach(function(bookList){
        const bookTitle = bookList.firstElementChild.textContent;

        if(bookTitle.toLowerCase().indexOf(searchTerm) != -1){
            bookListAll.style.display ="flex";
        } else {
            bookListAll.style.display ="none";
        }
    })
})