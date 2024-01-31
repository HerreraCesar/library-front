import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {RootState, setIsOpenSheet, useAppDispatch, useAppSelector} from 'store';

const DeleteBook = () => {
  const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(
    (state: RootState) => state.selectedBook.book,
  );
  return (
    <View className="flex items-center justify-evenly p-6 h-full w-full">
      <Text className="text-base text-center">
        {`¿Está seguro que desea eliminar `}
        <Text className="font-bold">{selectedBook?.title}</Text>
        {`?`}
      </Text>
      <View className="flex flex-row w-full justify-evenly">
        <Button mode="text" onPress={() => dispatch(setIsOpenSheet(false))}>
          No
        </Button>
        <Button mode="text" onPress={() => console.log('Pressed')}>
          Sí
        </Button>
      </View>
    </View>
  );
};

export default DeleteBook;
