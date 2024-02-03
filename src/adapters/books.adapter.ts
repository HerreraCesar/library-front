import {IBook, IBookResponse} from '@interfaces';
import {config} from 'config';

const adaptBooks = (data: IBookResponse[]): IBook[] => {
  return data
    .map((book): IBook => {
      return {
        id: book.id,
        cover: book.cover ?? config.urls.imagePlaceholder,
        title: book.title ?? 'Empty title',
        author: book.author ?? 'Empty author',
        description: book.description ?? undefined,
        year: book.year ?? undefined,
        pages: book.pages ?? undefined,
        read: book.read ?? false,
        readDate: book.readDate ?? undefined,
        borrowed: book.borrowed ?? false,
        borrowedTo: book.borrowedTo ?? undefined,
        borrowedAt: book.borrowedAt ?? undefined,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
};

export default adaptBooks;
