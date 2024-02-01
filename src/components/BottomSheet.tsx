import React from 'react';

import {RootState, useAppSelector} from 'store';
import {BookForm, BorrowBook, DeleteBook} from '@components';

const BottomSheet = () => {
  const selectedSection = useAppSelector(
    (state: RootState) => state.selectedSection.section,
  );

  const selectedBook = useAppSelector(
    (state: RootState) => state.selectedBook.book,
  );

  return selectedSection === 'Borrar' ? (
    <DeleteBook />
  ) : selectedSection === 'Prestar' ? (
    <BorrowBook />
  ) : selectedSection === 'Detalles' ? (
    <BookForm initialValue={selectedBook} />
  ) : (
    <BookForm />
  );
};

export default BottomSheet;
