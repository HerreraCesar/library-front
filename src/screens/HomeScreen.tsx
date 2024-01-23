import {GeneralLayout} from 'layouts';
import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <GeneralLayout>
      <View className="flex-1 items-center justify-center h-screen">
        <Text>HomeScreen</Text>
      </View>
    </GeneralLayout>
  );
};

export default HomeScreen;
