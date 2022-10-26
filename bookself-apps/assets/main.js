const RENDER_EVENT = "render-book";
const SAVED_EVENT = "saved-book";
const MOVED_EVENT = "moved-book";
const DELETED_EVENT = "deleted-book";
const STORAGE_KEY = "BOOKS";
const books = [];

document.addEventListener(RENDER_EVENT, () => {
  const unfinishedBook = document.getElementById("unfinishedBook");
  unfinishedBook.innerHTML = "";

  const finishedBook = document.getElementById("finishedBook");
  finishedBook.innerHTML = "";

  for (const bookItem of books) {
    const bookElement = makeBookElement(bookItem);
    if (!bookItem.isComplete) {
      unfinishedBook.append(bookElement);
    } else {
      finishedBook.append(bookElement);
    }
  }
});

document.addEventListener(SAVED_EVENT, () => {
  const toast = new bootstrap.Toast(document.getElementById("savedEvent"));
  toast.show();
});
document.addEventListener(MOVED_EVENT, () => {
  const toast = new bootstrap.Toast(document.getElementById("movedEvent"));
  toast.show();
});
document.addEventListener(DELETED_EVENT, () => {
  const toast = new bootstrap.Toast(document.getElementById("deleteEvent"));
  toast.show();
});

const loadDataFromStorage = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data !== null) {
    for (const item of data) {
      books.push(item);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
};

const makeBookElement = (bookObject) => {
  const elementBookTitle = document.createElement("p");
  elementBookTitle.classList.add("fw-bold", "fs-4", "book-title");
  elementBookTitle.innerText = `${bookObject.title}`;

  const elementBookAuthor = document.createElement("p");
  elementBookAuthor.classList.add("item-writer");
  elementBookAuthor.innerHTML = `Penulis:  <span class="fw-semibold">${bookObject.author}</span>`;

  const elementBookYear = document.createElement("p");
  elementBookYear.classList.add("item-writer");
  elementBookYear.innerHTML = `Tahun:  <span class="fw-semibold">${bookObject.year}</span>`;

  const descContainer = document.createElement("div");
  descContainer.classList.add("col");
  descContainer.append(elementBookTitle, elementBookAuthor, elementBookYear);

  const container = document.createElement("div");
  container.classList.add("border", "p-3", "my-2", "row", "rounded-3", "list-book");
  container.append(descContainer);
  container.setAttribute("id", `book-${bookObject.id}`);

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("col-auto");

  if (bookObject.isComplete) {
    const returnBtn = document.createElement("button");
    returnBtn.classList.add("btn", "btn-warning", "fw-semibold");
    returnBtn.innerHTML = `<i class="bi bi-arrow-counterclockwise"></i>`;

    returnBtn.addEventListener("click", () => {
      returnBookFromFinished(bookObject.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "ms-2", "fw-semibold");
    deleteBtn.innerHTML = `<i class="bi bi-trash-fill"></i>`;

    deleteBtn.addEventListener("click", () => {
      deleteBook(bookObject.id);
    });

    actionContainer.append(returnBtn, deleteBtn);
    container.append(actionContainer);
  } else {
    const finishBtn = document.createElement("button");
    finishBtn.classList.add("btn", "btn-success", "fw-semibold");
    finishBtn.innerHTML = `<i class="bi bi-check2-circle"></i>`;

    finishBtn.addEventListener("click", () => {
      addBookToFinished(bookObject.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "ms-2", "fw-semibold");
    deleteBtn.innerHTML = `<i class="bi bi-trash-fill"></i>`;

    deleteBtn.addEventListener("click", () => {
      deleteBook(bookObject.id);
    });

    actionContainer.append(finishBtn, deleteBtn);
    container.append(actionContainer);
  }

  return container;
};

const saveData = () => {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event(SAVED_EVENT));
};

const moveData = () => {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event(MOVED_EVENT));
};

const addBookToFinished = (bookId) => {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  moveData();
};

const returnBookFromFinished = (bookId) => {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  moveData();
};

const findBook = (bookId) => {
  for (const bookItem of books) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }

  return null;
};

const deleteData = () => {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event(DELETED_EVENT));
};

const deleteBook = (bookId) => {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  deleteData();
};

const findBookIndex = (bookId) => {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }

  return -1;
};

const addBook = () => {
  const bookTitle = document.getElementById("bookTitle");
  const bookAuthor = document.getElementById("bookAuthor");
  const bookYear = document.getElementById("bookYear");
  const bookIsComplete = document.getElementById("bookIsComplete");
  let bookStatus;

  if (bookIsComplete.checked) {
    bookStatus = true;
  } else {
    bookStatus = false;
  }

  if (bookTitle.value == "" || bookAuthor.value == "" || bookYear.value == "") {
    const toast = new bootstrap.Toast(document.getElementById("nullForm"));
    toast.show();
  } else {
    books.push({
      id: +new Date(),
      title: bookTitle.value,
      author: bookAuthor.value,
      year: Number(bookYear.value),
      isComplete: bookStatus,
    });

    bookTitle.value = null;
    bookAuthor.value = null;
    bookYear.value = null;
    bookIsComplete.checked = false;

    console.log(books);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadDataFromStorage();

  const saveBook = document.getElementById("inputBook");
  saveBook.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
  });

  const searchForm = document.getElementById("formSearch");
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchBook();
  });
});

const searchBook = () => {
  const searchInput = document.getElementById("searchBook").value.toLowerCase();
  const bookItems = document.getElementsByClassName("list-book");

  for (let i = 0; i < bookItems.length; i++) {
    const itemTitle = bookItems[i].querySelector(".book-title");
    if (itemTitle.textContent.toLowerCase().includes(searchInput)) {
      bookItems[i].classList.remove("d-none");
    } else {
      bookItems[i].classList.add("d-none");
    }
  }
};
