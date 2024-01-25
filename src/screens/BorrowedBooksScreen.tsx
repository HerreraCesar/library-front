import React from 'react';
import {Text, View} from 'react-native';
import GeneralLayout from '../layouts/GeneralLayout';
import {Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';

const BorrowedBooksScreen = () => {
  return (
    <GeneralLayout>
      <View className="flex w-screen h-screen p-8 gap-4">
        <Text className="text-3xl">Libros prestados</Text>
        <View>
          <Chip
            className="w-full h-12 flex justify-center px-2 mb-2"
            mode="outlined"
            icon="account"
            onPress={() => console.log('Pressed')}>
            <Text className="text-lg font-normal">NAME</Text>
          </Chip>
          <View className="flex flex-row items-center pl-5 mb-2">
            <Icon name="dot-fill" size={15} color={'black'} />
            <Text className="text-xl ml-4">Narnia - 17/01/24</Text>
          </View>
          <View className="flex flex-row items-center pl-5 mb-2">
            <Icon name="dot-fill" size={15} color={'black'} />
            <Text className="text-xl ml-4">Narnia - 17/01/24</Text>
          </View>
          <View className="flex flex-row items-center pl-5 mb-2">
            <Icon name="dot-fill" size={15} color={'black'} />
            <Text className="text-xl ml-4">Narnia - 17/01/24</Text>
          </View>
        </View>
        <View>
          <Chip
            className="w-full h-12 flex justify-center px-2 mb-2"
            mode="outlined"
            icon="account"
            onPress={() => console.log('Pressed')}>
            <Text className="text-lg font-normal">NAME</Text>
          </Chip>
          <View className="flex flex-row items-center pl-5 mb-2">
            <Icon name="dot-fill" size={15} color={'black'} />
            <Text className="text-xl ml-4">Narnia - 17/01/24</Text>
          </View>
          <View className="flex flex-row items-center pl-5 mb-2">
            <Icon name="dot-fill" size={15} color={'black'} />
            <Text className="text-xl ml-4">Narnia - 17/01/24</Text>
          </View>
        </View>
      </View>
    </GeneralLayout>
  );
};

export default BorrowedBooksScreen;
