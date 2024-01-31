import React from 'react';
import {Image, Text, View} from 'react-native';
import {Avatar, Divider, FAB, IconButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Octicons';
import {BlurView} from '@react-native-community/blur';
import {IBook} from 'interfaces';
import {useRoute} from '@react-navigation/native';
import {setIsOpenSheet, setSelectedSection, useAppDispatch} from 'store';
import {GeneralLayout} from 'layouts';

const BookDetailsScreen = ({navigation}: {navigation: any}) => {
  const route = useRoute();
  const data = route.params as IBook;
  const dispatch = useAppDispatch();

  return (
    <GeneralLayout>
      <View className="flex-1 items-start justify-between min-h-screen px-6 pt-24 gap-4">
        <IconButton
          icon={'chevron-left'}
          size={30}
          onPress={() => {
            dispatch(setSelectedSection('Inicio'));
            navigation.navigate('Inicio');
          }}
          mode={'contained-tonal'}
          className="absolute top-4 left-4 "
        />
        <FAB
          icon="pencil"
          label="Editar"
          mode="flat"
          variant="secondary"
          customSize={40}
          className="absolute top-6 right-5"
          onPress={() => {
            dispatch(setSelectedSection('Detalles'));
            dispatch(setIsOpenSheet(true));
          }}
        />
        <View className="w-full">
          <View className="mb-4 flex w-screen flex-row justify-start">
            <Image
              source={{uri: data.cover}}
              className="h-[225] w-[150] mr-4 rounded-2xl"
            />
            <View className="w-[40%]">
              <Text className="text-2xl mb-2">{data.title}</Text>
              <Text className="text-xl">{data.author}</Text>
              <Text className="text-lg">{data.year}</Text>
              <Text className="text-lg">{data.pages}</Text>
            </View>
          </View>
          {data.description && (
            <Text className="text-sm">{data.description}</Text>
          )}
          {data.borrowed && (
            <>
              <Divider className="w-[95%]" bold={true} />
              <Text className="text-md">
                {`Book borrowed to ${data.borrowedTo} on ${data.borrowedAt}`}
              </Text>
            </>
          )}
        </View>
        <View className="relative w-[95%]">
          <Divider className="w-[95%] mb-4" bold={true} />
          <View className="bg-gray-200 rounded-2xl p-5 flex w-[95%] min-h-[150] self-center mb-12">
            <View className="flex flex-row justify-between items-start mb-4">
              <View className="flex flex-row justify-between items-center gap-4">
                <Avatar.Image
                  size={50}
                  source={{uri: 'https://placehold.co/300x300/webp'}}
                />
                <Text className="text-lg">Anónimo</Text>
              </View>
              <View className="flex flex-row">
                <Icon name="star-fill" size={16} color="gray" />
                <Icon name="star-fill" size={16} color="gray" />
                <Icon name="star-fill" size={16} color="gray" />
                <Icon name="star-fill" size={16} color="gray" />
                <Icon name="star" size={16} color="gray" />
              </View>
            </View>
            <Text className="text-gray-500 italic">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, minus aliquid blanditiis magnam, deleniti labore sequi
              laborum dolore voluptate dolor temporibus tenetur."
            </Text>
          </View>
          <BlurView
            blurType="light"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              transform: [{translateX: -24}],
              width: '120%',
              height: 230,
              backgroundColor: 'transparent',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            blurAmount={1}
          />
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.05)', 'rgba(210, 210, 210, 0.8)']}
            className={
              'absolute bottom-0 left-0 w-[140%] h-[200] flex items-center justify-center -translate-x-16'
            }>
            <Text className="text-lg text-gray-500 italic font-regular mb-14">
              próximamente...
            </Text>
          </LinearGradient>
        </View>
      </View>
    </GeneralLayout>
  );
};

export default BookDetailsScreen;
