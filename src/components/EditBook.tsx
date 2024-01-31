import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {RootState, setIsOpenSheet, useAppDispatch, useAppSelector} from 'store';

const EditBook = () => {
  const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(
    (state: RootState) => state.selectedBook.book,
  );

  return (
    <ScrollView>
      <View className="flex items-start justify-evenly pb-6 pt-2 px-14 h-full w-full gap-6">
        <TextInput
          className="w-full"
          mode="outlined"
          label="Portada"
          disabled={true}
          dataDetectorTypes={'link'}
          textContentType="URL"
          //   value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label={<Text className="text-gray-500">Título</Text>}
          value={selectedBook?.title}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label={<Text className="text-gray-500">Autor</Text>}
          value={selectedBook?.author}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label={<Text className="text-gray-500">Descripción</Text>}
          multiline={true}
          value={selectedBook?.description}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label={<Text className="text-gray-500">Año</Text>}
          value={selectedBook?.year?.toString()}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label={<Text className="text-gray-500">Páginas</Text>}
          value={selectedBook?.pages?.toString()}
          // onChangeText={text => setText(text)}
        />
        <View className="flex flex-row w-full justify-evenly mt-8">
          <Button mode="text" onPress={() => dispatch(setIsOpenSheet(false))}>
            Cancelar
          </Button>
          <Button mode="text" onPress={() => console.log('Pressed')}>
            Guardar
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditBook;
