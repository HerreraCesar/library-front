import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {RootState, setIsOpenSheet, useAppDispatch, useAppSelector} from 'store';

const BorrowBook = () => {
  const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(
    (state: RootState) => state.selectedBook.book,
  );

  return (
    <View className="flex items-start justify-evenly py-6 px-16 h-full w-full">
      <Text className="text-base">
        {`¿A quién prestaste `}
        <Text className="font-bold">{selectedBook?.title}</Text>
        {`?`}
      </Text>
      <TextInput
        className="w-full"
        mode="outlined"
        label="Nombre"
        placeholder="Pepito Pérez"
        // value={text}
        // onChangeText={text => setText(text)}
      />
      <Text className="text-md">¿Cuándo lo prestaste?</Text>
      <TextInput
        className="w-full"
        mode="outlined"
        label="Fecha"
        placeholder="DD/MM/AAAA"
        maxLength={10}
        // value={date}
        // onChangeText={text => setDate(text)}
      />
      <View className="flex flex-row w-full justify-evenly">
        <Button mode="text" onPress={() => dispatch(setIsOpenSheet(false))}>
          Cancelar
        </Button>
        <Button mode="text" onPress={() => console.log('Pressed')}>
          Guardar
        </Button>
      </View>
    </View>
  );
};

export default BorrowBook;
