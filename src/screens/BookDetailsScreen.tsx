import React from 'react';
import {Image, Text, View} from 'react-native';
import GeneralLayout from '../layouts/GeneralLayout';
import {Avatar, Divider, FAB, IconButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Octicons';
import {BlurView} from '@react-native-community/blur';

const BookDetailsScreen = ({navigation}: any) => {
  return (
    <GeneralLayout>
      <View className="flex-1 items-start justify-start min-h-screen p-6 pt-24 gap-4">
        <IconButton
          icon={'chevron-left'}
          size={30}
          onPress={() => navigation.navigate('Inicio')}
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
          onPress={() => console.log('Pressed')}
        />
        <View className="mb-4 flex w-full flex-row justify-start">
          <Image
            source={{uri: 'https://placehold.co/600x900/webp'}}
            className="h-[225] w-[150] mr-4 rounded-2xl"
          />
          <View>
            <Text className="text-3xl">Book Title</Text>
            <Text className="text-2xl">Book Author</Text>
            <Text className="text-lg">Book Year</Text>
            <Text className="text-lg">Book Pages</Text>
          </View>
        </View>
        <Text className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam
          dicta facere ad placeat aliquam tempora odit nisi ullam nihil
          asperiores impedit officia provident, eaque enim architecto
          repellendus unde. Aliquam.
        </Text>
        <Divider className="w-[95%]" bold={true} />
        <Text className="text-md">Book borrowed to NAME on DATE</Text>
        <Divider className="w-[95%] mb-4" bold={true} />
        <View className="bg-gray-200 rounded-2xl p-5 flex w-[95%] min-h-[150] self-center">
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
            height: 250,
            width: 'auto',
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
          colors={['rgba(250, 250, 250, 0.1)', 'rgba(230, 230, 230, 0.85)']}
          className={
            'absolute bottom-0 left-0 w-screen h-[260] flex items-center justify-center'
          }>
          <Text className="text-lg text-gray-800 italic font-light">
            proximamente...
          </Text>
        </LinearGradient>
      </View>
    </GeneralLayout>
  );
};

export default BookDetailsScreen;
