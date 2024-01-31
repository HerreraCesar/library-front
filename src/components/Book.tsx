import {IBook} from 'interfaces';
import React from 'react';
import {Text} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {setSelectedSection} from 'store';
import {setSelectedBook} from 'store/features/selectedBookSlice';
import {useAppDispatch} from 'store/hooks';

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
          loadingIndicatorSource={require('../assets/image-placeholder.png')}
          source={{uri: data.cover}}
          className="h-[220] w-[150] rounded-2xl object-cover"
        />
        <Text className="mt-4 text-md text-center">{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Book;