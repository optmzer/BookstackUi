
// https://bookstakapi.azurewebsites.net/api/Books/2 - GetBookById(bookId: int)


export const BOOKS_URI = 'https://bookstakapi.azurewebsites.net/api/Books'
export const BOOKS_UI_URI = 'http://localhost:3000'

const headers: Headers = new Headers({
    "Content-Type": "text/plain; charset=utf-8",
    'accept': 'application/json'
  });

export async function getAllBooks(): Promise<any> {
  const res = await fetch(BOOKS_URI, {
    headers,
    method: "GET",
  });
  return res.json();
}

export async function getBookById(bookId: number): Promise<any> {
  const BOOKS_URI_BY_ID = BOOKS_URI + "/" + bookId
  const res = await fetch(BOOKS_URI_BY_ID, {
    headers,
    method: "GET",
  });
  return res.json();
}

export async function submitBook(formData: any): Promise<any> {
  const BOOKS_URI_UPLOAD =  BOOKS_URI + "/upload"
  const res = await fetch(BOOKS_URI_UPLOAD, {
    body: formData,
    method: "POST",
  });
  // return res.json();
  return res;
}

export async function editBook(book: any): Promise<any> {
  console.log("L29 BookService submitBook = ", book);
  const BOOKS_URI_EDIT =  BOOKS_URI + "/" + book.id

  const res = await fetch(BOOKS_URI_EDIT, {
    body: JSON.stringify(book),
    headers: new Headers({
      "Content-Type": "application/json-patch+json",
      "accept": "application/json"
    }),
    method: "PUT",
  });
  // return res.json();
  return res;
}

export async function deleteBook(bookId: number): Promise<any> {
  const BOOKS_URI_BY_ID = BOOKS_URI + "/" + bookId
  const res = await fetch(BOOKS_URI_BY_ID, {
    headers,
    method: "DELETE",
  });
  return res.json();
}

export async function getBookByTitle(title: string): Promise<any> {
  const BOOKS_URI_BY_TITLE = BOOKS_URI + "/Search/" + title
  const res = await fetch(BOOKS_URI_BY_TITLE, {
    headers,
    method: "GET",
  });
  return res.json();
}