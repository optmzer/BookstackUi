// https://bookstakapi.azurewebsites.net/api/Books/2 - GetBookById(bookId: int)


const BOOKS_URI = 'https://bookstakapi.azurewebsites.net/api/Books'

const headers: Headers = new Headers({
    "Content-Type": "text/plain; charset=utf-8",
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

export async function submitBook(bookId: number): Promise<any> {
  const BOOKS_URI_BY_ID = BOOKS_URI
  const res = await fetch(BOOKS_URI_BY_ID, {
    headers,
    method: "POST",
  });
  return res.json();
}