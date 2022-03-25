/* eslint-disable no-console */
const BASE_URL = 'http://localhost:3004/books';

export const requestBooks = () => {
  return fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
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
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const deleteBook = (id: number) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};
