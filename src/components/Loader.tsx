import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const Loader = () => {
  return (
    <View className="w-screen h-screen flex items-center justify-center">
      <ActivityIndicator animating={true} color={'purple'} size={'large'} />
    </View>
  );
};

export default Loader;
