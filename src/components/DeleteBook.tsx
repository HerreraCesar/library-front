import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {
  RootState,
  setIsOpenSheet,
  setSelectedSection,
  useAppDispatch,
  useAppSelector,
  useDeleteBookMutation,
} from 'store';

const DeleteBook = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(
    (state: RootState) => state.selectedBook.book,
  );
  const [deleteBook] = useDeleteBookMutation();
  return (
    <View className="flex items-center justify-evenly p-6 h-full w-full">
      <Text className="text-base text-center font-neuton">
        {`¿Está seguro que desea eliminar `}
        <Text className="font-neuton-bold">{selectedBook?.title}</Text>
        {`?`}
      </Text>
      <View className="flex flex-row w-full justify-evenly">
        <Button mode="text" onPress={() => dispatch(setIsOpenSheet(false))}>
          No
        </Button>
        <Button
          mode="text"
          onPress={() => {
            if (selectedBook?.id) deleteBook(selectedBook?.id);
            dispatch(setIsOpenSheet(false));
            dispatch(setSelectedSection('Inicio'));
            // @ts-ignore
            navigation.navigate('Inicio');
          }}>
          Sí
        </Button>
      </View>
    </View>
  );
};

export default DeleteBook;
