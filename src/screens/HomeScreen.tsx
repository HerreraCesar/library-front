import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';

const Book = () => {
  return (
    <View className="mb-6">
      <Image
        source={{uri: 'https://placehold.co/600x900/webp'}}
        className="h-[200] w-[150] rounded-2xl"
      />
      <Text className="mt-4 text-md text-center">Book Title</Text>
    </View>
  );
};

const HomeScreen = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
    },
  ];

  return (
    <View className="flex-1 w-screen h-screen p-8 gap-4">
      <Text className="text-3xl font-bold">Mi biblioteca</Text>
      <Searchbar
        placeholder="Buscar"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate('Detalles')}>
        Detalles
      </Button>
      <FlatList
        className="w-full pt-4"
        data={DATA}
        renderItem={Book}
        keyExtractor={item => item.id}
        numColumns={2}
        // eslint-disable-next-line react-native/no-inline-styles
        columnWrapperStyle={{
          gap: 30,
        }}
      />
    </View>
  );
};

export default HomeScreen;
