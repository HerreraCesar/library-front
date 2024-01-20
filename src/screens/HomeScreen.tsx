import {GeneralLayout} from 'layouts';
import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <GeneralLayout>
      <View className="bg-slate-900 min-w-screen min-h-screen flex justify-center items-center">
        <Text>My library</Text>
        <TextInput
          label="Email"
          value={'Texto de prueba'}
          onChangeText={text => console.log(text)}
        />
        <Icon name="down" size={30} color="#fff" />
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text className="text-blue-800">HomeScreen</Text>
      </View>
    </GeneralLayout>
  );
};

export default HomeScreen;
