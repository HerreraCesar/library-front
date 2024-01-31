import React from 'react';
import {View, Text} from 'react-native';

const Error = ({type}: {type: 500 | 503 | 504}) => {
  return (
    <View className="w-screen h-screen flex items-center justify-center">
      <Text>Error {type}</Text>
    </View>
  );
};

export default Error;
