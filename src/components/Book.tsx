import {IBook} from 'interfaces';
import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {setSelectedBook, setSelectedSection, useAppDispatch} from 'store';

const Book = ({navigation, data}: {navigation: any; data: IBook}) => {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setSelectedBook(data));
        dispatch(setSelectedSection('Detalles'));
        navigation.navigate('Detalles', data);
      }}>
      <View className="mb-6 w-[150]">
        <Image
          source={{uri: data.cover}}
          className="h-[210] w-[140] rounded-2xl object-cover"
        />
        <Text className="mt-4 text-md text-center font-neuton">
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Book;
