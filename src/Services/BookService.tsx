
const BOOKS_URI = 'https://bookstakapi.azurewebsites.net/api/Books'

const headers: Headers = new Headers({
    "Content-Type": "text/plain; charset=utf-8",
  });

export function getAllBooks(): Promise<any> {
    return fetch(BOOKS_URI, {
      headers,
      method: "GET",
    })
    .then(
      (res) => res.json(), // Have to have this in order to get to the body.
    );
  }