import {Book, Error, Loader} from 'components';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useGetBooksQuery} from 'store/apis/libraryBackSlice';

const HomeScreen = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const {data, isLoading} = useGetBooksQuery();

  if (isLoading) return <Loader />;
  if (data)
    return (
      <View className="flex-1 w-screen h-screen p-8 gap-4">
        <Text className="text-3xl font-bold">Mi biblioteca</Text>
        <Searchbar
          className="w-full"
          placeholder="Buscar"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <FlatList
          className="w-full pt-4 mb-16"
          data={data}
          renderItem={({item}) => <Book navigation={navigation} data={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          // eslint-disable-next-line react-native/no-inline-styles
          columnWrapperStyle={{
            gap: 45,
          }}
        />
      </View>
    );
  else return <Error type={503} />;
};

export default HomeScreen;
