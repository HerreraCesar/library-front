import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {setIsOpenSheet, useAppDispatch} from 'store';

const AddBook = () => {
  const dispatch = useAppDispatch();
  return (
    <ScrollView>
      <View className="flex items-start justify-evenly pb-6 pt-2 px-14 h-full w-full gap-6">
        <TextInput
          className="w-full"
          mode="outlined"
          label="Portada"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Título"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Autor"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Descripción"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Año"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Páginas"
          // value={text}
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

export default AddBook;
