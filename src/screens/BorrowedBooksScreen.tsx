import React from 'react';
import {Text, View} from 'react-native';
import GeneralLayout from '../layouts/GeneralLayout';
import {Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

const BorrowedBooksScreen = () => {
  return (
    <GeneralLayout>
      <>
        <View className="flex w-screen h-screen p-8 gap-4">
          <Text className="text-3xl font-neuton">Libros prestados</Text>
          <View>
            <Chip
              className="w-full h-12 flex justify-center px-2 mb-2"
              mode="outlined"
              icon="account"
              onPress={() => console.log('Pressed')}>
              <Text className="text-lg font-normal font-neuton">NAME</Text>
            </Chip>
            <View className="flex flex-row items-center pl-5 mb-2">
              <Icon name="dot-fill" size={15} color={'black'} />
              <Text className="text-xl ml-4 font-neuton">
                Narnia - 17/01/24
              </Text>
            </View>
            <View className="flex flex-row items-center pl-5 mb-2">
              <Icon name="dot-fill" size={15} color={'black'} />
              <Text className="text-xl ml-4 font-neuton">
                Narnia - 17/01/24
              </Text>
            </View>
            <View className="flex flex-row items-center pl-5 mb-2">
              <Icon name="dot-fill" size={15} color={'black'} />
              <Text className="text-xl ml-4 font-neuton">
                Narnia - 17/01/24
              </Text>
            </View>
          </View>
          <View>
            <Chip
              className="w-full h-12 flex justify-center px-2 mb-2"
              mode="outlined"
              icon="account"
              onPress={() => console.log('Pressed')}>
              <Text className="text-lg font-normal font-neuton">NAME</Text>
            </Chip>
            <View className="flex flex-row items-center pl-5 mb-2">
              <Icon name="dot-fill" size={15} color={'black'} />
              <Text className="text-xl ml-4 font-neuton">
                Narnia - 17/01/24
              </Text>
            </View>
            <View className="flex flex-row items-center pl-5 mb-2">
              <Icon name="dot-fill" size={15} color={'black'} />
              <Text className="text-xl ml-4 font-neuton">
                Narnia - 17/01/24
              </Text>
            </View>
          </View>
        </View>
        <BlurView
          blurType="light"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          blurAmount={2}
        />
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.05)', 'rgba(200, 200, 200, 0.9)']}
          className={
            'absolute bottom-0 left-0 right-0 w-screen h-screen flex items-center justify-center'
          }>
          <Text className="text-lg text-gray-500 font-neuton-italic mb-14">
            próximamente...
          </Text>
        </LinearGradient>
      </>
    </GeneralLayout>
  );
};

export default BorrowedBooksScreen;
