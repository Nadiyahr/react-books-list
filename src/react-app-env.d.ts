/// <reference types="react-scripts" />

type Book = {
  id: number,
  title: string,
  author: string,
  category: string[] | string,
  ISBN: string,
  year: number
};

type Errors = {
  title: string,
  author: string,
  category: string,
  ISBN: string,
  year: string
};
