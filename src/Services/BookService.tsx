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
  console.log("L29 BookService submitBook = ", formData);
  const BOOKS_URI_UPLOAD =  BOOKS_URI + "/upload"
  const res = await fetch(BOOKS_URI_UPLOAD, {
    body: formData,
    headers: new Headers ({
      'Access-Control-Allow-Origin': '*, http://localhost',
      'Content-Type': 'multipart/form-data',
      'accept': 'application/json',
      'cache-control':'no-cache',
      'mode': "no-cors" // cors, no-cors
    }),
    method: "POST",
  });
  // return res.json();
  return res;
}

export async function deleteBook(bookId: number): Promise<any> {
  console.log("L39 BookService deleteBook = ", bookId);
  const BOOKS_URI_BY_ID = BOOKS_URI + "/" + bookId
  const res = await fetch(BOOKS_URI_BY_ID, {
    headers,
    method: "DELETE",
  });
  return res.json();
}
