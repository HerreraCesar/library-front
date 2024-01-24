import {GeneralLayout} from 'layouts';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const HomeScreen = ({navigation}: any) => {
  return (
    <GeneralLayout>
      <View className="flex-1 items-center justify-center h-screen">
        <Text>HomeScreen</Text>
        <Button
          mode="contained-tonal"
          onPress={() => navigation.navigate('Detalles')}>
          Detalles
        </Button>
      </View>
    </GeneralLayout>
  );
};

export default HomeScreen;
