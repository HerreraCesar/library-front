import React from 'react';

import {RootState, useAppSelector} from 'store';
import {AddBook, BorrowBook, DeleteBook, EditBook} from '@components';

const BottomSheet = () => {
  const selectedSection = useAppSelector(
    (state: RootState) => state.selectedSection.section,
  );

  return selectedSection === 'Borrar' ? (
    <DeleteBook />
  ) : selectedSection === 'Prestar' ? (
    <BorrowBook />
  ) : selectedSection === 'Detalles' ? (
    <EditBook />
  ) : (
    <AddBook />
  );
};

export default BottomSheet;
