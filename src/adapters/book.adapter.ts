import {IBook, IBookResponse} from '@interfaces';
import {config} from 'config';

const adaptBook = (data: IBookResponse[]): IBook[] => {
  return data.map((book): IBook => {
    return {
      id: book.id,
      cover: config.urls.imagePlaceholder,
      title: book.title ?? 'Empty title',
      author: book.author ?? 'Empty author',
      description: undefined,
      year: book.year,
      pages: undefined,
      read: book.read ?? false,
      readDate: undefined,
      borrowed: false,
      borrowedTo: undefined,
      borrowedAt: undefined,
    };
  });
};

export default adaptBook;
