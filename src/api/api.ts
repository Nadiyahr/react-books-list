const BASE_URL = 'http://localhost:3004/books';
const TAPICODE_URL = 'https://my-json-server.typicode.com/Nadiyahr/db-json';

export const requestBooks = () => {
  return fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        fetch(TAPICODE_URL)
          .then(res => {
            if (!res.ok) {
              throw new Error(`${res.status} - ${res.statusText}`);
            }

            return res.json();
          });
      }

      return response.json();
    });
};

export const addBook = (data: Book) => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json());
};

export const deleteBook = (id: number) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};
