import React from 'react';
import {Text, View} from 'react-native';
import GeneralLayout from '../layouts/GeneralLayout';

const BorrowedBooksScreen = () => {
  return (
    <GeneralLayout>
      <View className="flex-1 items-center justify-center h-screen">
        <Text>BorrowedBooksScreen</Text>
      </View>
    </GeneralLayout>
  );
};

export default BorrowedBooksScreen;
