import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  BookDetailsScreen,
  BorrowedBooksScreen,
  HomeScreen,
  ReadBooksScreen,
} from 'screens';
import CustomTabBar from 'components/CustomTabBar';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Borrowed" component={BorrowedBooksScreen} />
        <Stack.Screen name="Read" component={ReadBooksScreen} />
        <Stack.Screen name="Details" component={BookDetailsScreen} />
      </Stack.Navigator>
      <CustomTabBar />
    </NavigationContainer>
  );
};

export default AppNavigation;
