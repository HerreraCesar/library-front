import {IBook, IBookResponse} from '@interfaces';
import {config} from 'config';

const adaptBook = (data: IBookResponse[]): IBook => {
  return {
    id: data[0].id,
    cover: data[0].cover ?? config.urls.imagePlaceholder,
    title: data[0].title ?? 'Empty title',
    author: data[0].author ?? 'Empty author',
    description: data[0].description ?? undefined,
    year: data[0].year ?? undefined,
    pages: data[0].pages ?? undefined,
    read: data[0].read ?? false,
    readDate: data[0].readDate ?? undefined,
    borrowed: data[0].borrowed ?? false,
    borrowedTo: data[0].borrowedTo ?? undefined,
    borrowedAt: data[0].borrowedAt ?? undefined,
  };
};

export default adaptBook;
