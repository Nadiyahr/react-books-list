const BASE_URL = 'https://my-json-server.typicode.com/Nadiyahr/db-json';

export const requestBooks = () => {
  return fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};
