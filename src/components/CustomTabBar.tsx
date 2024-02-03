/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {
  BookDetailsScreen,
  BorrowedBooksScreen,
  HomeScreen,
  ReadBooksScreen,
} from 'screens';
import Icon from 'react-native-vector-icons/Octicons';
import Snackbar from 'react-native-snackbar';
import {CircleItem, Tabs, BottomSheet} from '@components';
import {
  RootState,
  setIsOpenSheet,
  setSelectedSection,
  useAppDispatch,
  useAppSelector,
} from 'store';

const CustomTabBar = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const selectedSection = useAppSelector(
    (state: RootState) => state.selectedSection.section,
  );
  const selectedBook = useAppSelector(
    (state: RootState) => state.selectedBook.book,
  );
  const isOpenSheet = useAppSelector(
    (state: RootState) => state.selectedSection.isOpenSheet,
  );

  return (
    <>
      <CurvedBottomBar.Navigator
        screenOptions={{
          headerShown: false,
        }}
        style={{
          width: '100%',
          marginBottom: !isOpenSheet
            ? 0
            : selectedSection === 'Borrar'
            ? 249
            : selectedSection === 'Prestar'
            ? 349
            : '75%',
          zIndex: 10,
          borderBottomWidth: 0,
          paddingBottom: 0,
        }}
        type="DOWN"
        height={60}
        circleWidth={57}
        bgColor="white"
        initialRouteName="Inicio"
        borderTopLeftRight
        renderCircle={({navigate}: {navigate: (selectedTab: string) => void}) =>
          isOpenSheet ? (
            <CircleItem
              children={<Icon name="chevron-down" size={30} color="black" />}
              onPress={() => dispatch(setIsOpenSheet(false))}
            />
          ) : selectedSection === 'Prestados' ||
            selectedSection === 'Leídos' ? (
            <CircleItem
              children={<Icon name="home" size={30} color="black" />}
              onPress={() => {
                dispatch(setSelectedSection('Inicio'));
                navigate('Inicio');
              }}
            />
          ) : selectedSection === 'Detalles' ? (
            <CircleItem
              styles={selectedBook?.read ? 'bg-green-500' : 'bg-white'}
              children={
                <Icon
                  name="check"
                  size={30}
                  color={selectedBook?.read ? 'white' : 'black'}
                />
              }
              onPress={() =>
                Snackbar.show({
                  text: 'Funcionalidad en desarrollo. Pronto vas a poder marcar aquellos libros que ya has leído.',
                  duration: Snackbar.LENGTH_SHORT,
                })
              }
            />
          ) : (
            <CircleItem
              children={<Icon name="plus" size={30} color="black" />}
              onPress={() => dispatch(setIsOpenSheet(true))}
            />
          )
        }
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={({routeName, navigate, selectedTab}) => (
          <Tabs
            navigate={navigate}
            routeName={routeName}
            selectedTab={selectedTab}
          />
        )}>
        <CurvedBottomBar.Screen
          name="Inicio"
          component={HomeScreen}
          position="CIRCLE"
        />
        <CurvedBottomBar.Screen
          name="Leídos"
          position="LEFT"
          component={ReadBooksScreen}
        />
        <CurvedBottomBar.Screen
          name="Prestados"
          component={BorrowedBooksScreen}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="Detalles"
          // eslint-disable-next-line react/no-unstable-nested-components
          component={() => <BookDetailsScreen navigation={navigation} />}
          position="CIRCLE"
        />
      </CurvedBottomBar.Navigator>
      {isOpenSheet && (
        <View className="w-full h-full bg-black/40 absolute top-0 left-0 z-0>">
          <View
            className={`w-full h-[250] bg-white absolute bottom-0 left-0 ${
              selectedSection === 'Borrar'
                ? 'h-[251]'
                : selectedSection === 'Prestar'
                ? 'h-[351]'
                : 'h-[75.1%]'
            }`}>
            <BottomSheet />
          </View>
        </View>
      )}
    </>
  );
};

export default CustomTabBar;
