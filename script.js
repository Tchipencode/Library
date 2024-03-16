const showDialog=document.querySelector("#dialog");
const dialogBtn=document.querySelector("#add-book");
const closeDialog=document.querySelector("#close")
const submitBtn=dialog.querySelector("#submit");
const titleInput=document.querySelector("#title");
const authorInput=document.querySelector("#author");
const pagesInput=document.querySelector("#pages");
const readInput=dialog.querySelector("select");
const booksContainer=document.querySelector(".display-books");

const myLibrary = [];

function Book(title, author, pages, read){
   this.title= title
   this.author= author
   this.pages= pages
   this.read= read
  //  this.info= function(){
  //     return(this.title+", "+this.author+", "+this.pages+", "+this.read);
  //  }
}

function addBookToLibrary() {
  const title=titleInput.value;
  const author=authorInput.value;
  const pages=pagesInput.value;
  const read=readInput.value;
  const newBook= new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function createCard(book, item){
  const card=document.createElement("div");
  const bookContain=document.createElement("div");
  const bookTitle=document.createElement("h3");
  const bookAuthor=document.createElement("p");
  const bookPages=document.createElement("p");
  const bookRead=document.createElement("p");

  card.classList.add("card");
  bookContain.classList.add("bookContain");

  card.appendChild(bookContain);


  bookContain.appendChild(bookTitle);
  bookContain.appendChild(bookAuthor);
  bookContain.appendChild(bookPages);
  bookContain.appendChild(bookRead);
  // card.appendChild(btnRemove);
  bookTitle.textContent=book.title;
  bookAuthor.textContent="Author: "+book.author;
  bookPages.textContent="Pages: "+book.pages;
  bookRead.textContent=book.read;

  // booksContainer.appendChild(card);
  return card;
  // console.log(card);

}

function displayLibrary(){

  // const booksContainer=document.querySelector(".display-books")
  booksContainer.textContent="";
  addBookToLibrary();
  myLibrary.forEach((book, item) =>{
    // createCard(book, item);
    const bookCard=createCard(book, item);
    booksContainer.appendChild(bookCard);
  
  });
  clearDialog();
  showDialog.close();
}

function removeBook(){
  const btnRemove=document.createElement("button");
  btnRemove.classList.add("removeBtn");
  btnRemove.setAttribute("data-id", "+index+");
  btnRemove.textContent="remove";
  let bookItems;
  myLibrary.forEach(book, (index, value)=>{
    bookItems=[index];
    console.log(bookItems);

  });
  let i=$('.removeBtn').data('data-id');
  console.log(i);


  btnRemove.addEventListener("click",()=>{
    let i= parseInt($(this).data("data-id"));
    book.splice(i,1);
    booksContainer.removeChild(bookCard);
  });
}

dialogBtn.addEventListener(("click"), ()=>{
  showDialog.showModal();
})
closeDialog.addEventListener("click", (e)=>{
  e.preventDefault();
  clearDialog();
  showDialog.close();
  

})
submitBtn.addEventListener(("click"), (e)=>{
  displayLibrary();
  e.preventDefault();
  // dialog.close();
  // clearDialog();

})
function clearDialog(){
  titleInput.value="";
  authorInput.value="";
  pagesInput.value="";
  readInput.value="default";
}