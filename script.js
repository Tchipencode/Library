const showDialog=document.querySelector("#dialog");
const dialogBtn=document.querySelector("#addBtn");
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
  card.classList.add("card");
  booksContainer.appendChild(card);  

  const bookContent=document.createElement("div");
  bookContent.classList.add("bookContent");
  card.appendChild(bookContent);

  const buttonsDiv=document.createElement("div");
  buttonsDiv.classList.add("buttonsDiv");
  card.appendChild(buttonsDiv);

  const bookTitle=document.createElement("h3");
  const bookAuthor=document.createElement("p");
  const bookPages=document.createElement("p");
//   const bookRead=document.createElement("p");

  bookContent.appendChild(bookTitle);
  bookContent.appendChild(bookAuthor);
  bookContent.appendChild(bookPages);
//   bookContent.appendChild(bookRead);

  bookTitle.textContent=book.title;
  bookAuthor.textContent="Author: "+book.author;
  bookPages.textContent="Pages: "+book.pages;
//   bookRead.textContent=book.read? "read":"Not read";

  const removeBtn=document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.textContent="Remove";
  buttonsDiv.appendChild(removeBtn);
  removeBtn.addEventListener("click", removeBook);

  const readBtn=document.createElement("button");
  readBtn.classList.add("changeRead");
  buttonsDiv.appendChild(readBtn);
  readBtn.textContent=book.read=="already read"? "Read":"No read";
  readBtn.addEventListener("click", ()=>{
   if(readBtn.textContent=="Read"){
      readBtn.textContent="No read";
   }
   else{
      readBtn.textContent="Read";
   }
});

//   const readBtn=document.createElement("button");
//   readBtn.classList.add('read-toggle');
//   readBtn.classList.add(book.read ? 'read' : 'unread');
//   readBtn.textContent=book.read ? 'Read' : 'Unread';
//   buttonsDiv.appendChild(readBtn);
//   readBtn.addEventListener("click",toggleRead);

// toggleRead(buttonsDiv);
  
  return card;
}

function displayLibrary(){
  booksContainer.textContent="";
  addBookToLibrary();
  myLibrary.forEach((book, item) =>{
   createCard(book, item);
   // const bookCard=createCard(book, item);
   // booksContainer.appendChild(bookCard);
  });
  clearDialog();
  showDialog.close();
}

function removeBook(e){
   let index=booksContainer.querySelectorAll(".card");
   myLibrary.splice(Number.parseInt(index), 1);
   e.target.parentElement.parentElement.remove();
}

// function toggleRead(container){
//    const readBtn=document.createElement("button");
//    readBtn.classList.add("changeRead");
//    // const index= booksContainer.querySelector(".card");
//    // const book= myLibrary[Number.parseInt(index)];
//    readBtn.textContent=readInput.value=="already read"? "read":"No read";
//    // if(readBtn.textContent=="read"){
//    //    readBtn.classList.toggle("active");
//    // }

//    readBtn.addEventListener("click", ()=>{
//       if(readBtn.textContent=="read"){
//          readBtn.textContent="No read";
//       }
//       else{
//          readBtn.textContent="read";
//       }
//    });
//    container.appendChild(readBtn);

//    // if(readInput.value=="already read"){
//    //    return "read";
//    // }
//    // else{
//    //    return"No read";
//    // }

   
//    // const index = booksContainer.querySelector("read-toggle");
//    // const book = myLibrary[Number.parseInt(index)];
//    // // book.toggleRead();

//    // e.classList = 'read-toggle'
//    // e.classList.add(book.read ? 'read' : 'unread');
//    // e.textContent = `${book.read ? 'Read' : 'Unread'}`;
// }

dialogBtn.addEventListener(("click"), ()=>{
  showDialog.showModal();
});
closeDialog.addEventListener("click", (e)=>{
  e.preventDefault();
  clearDialog();
  showDialog.close();
});
submitBtn.addEventListener(("click"), (e)=>{
  displayLibrary();
  e.preventDefault();
});
function clearDialog(){
  titleInput.value="";
  authorInput.value="";
  pagesInput.value="";
  readInput.value="default";
}