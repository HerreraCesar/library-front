/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Animated, ScrollView, TouchableOpacity, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {Button, Text, TextInput} from 'react-native-paper';
import {
  BookDetailsScreen,
  BorrowedBooksScreen,
  HomeScreen,
  ReadBooksScreen,
} from 'screens';
import Icon from 'react-native-vector-icons/Octicons';

const CircleItem = ({
  children,
  onPress,
  styles,
}: {
  children: React.JSX.Element;
  onPress: any;
  styles?: string;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`h-[60] w-[60] rounded-full items-center justify-center bg-white bottom-[30] ${styles}`}
      style={{
        elevation: 2,
      }}>
      <Animated.View className="shadow-md">{children}</Animated.View>
    </TouchableOpacity>
  );
};

const TabItem = ({
  children,
  onPress,
}: {
  children: React.JSX.Element;
  onPress: any;
}) => {
  return (
    <Animated.View className={'flex-1 items-center justify-center'}>
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </Animated.View>
  );
};

const CustomTabBar = ({navigation}: any) => {
  const [openSheet, setOpenSheet] = useState(false);
  const [section, setSection] = useState('Inicio');

  const renderTabBar = ({
    routeName,
    navigate,
    selectedTab,
  }: {
    routeName: string;
    selectedTab: string;
    navigate: (selectedTab: string) => void;
  }) => {
    return openSheet ? (
      <></>
    ) : selectedTab === 'Detalles' ? (
      routeName === 'Leídos' ? (
        <TabItem
          onPress={() => {
            setSection('Prestar');
            setOpenSheet(true);
          }}
          children={<Text className={'text-black'}>Prestar</Text>}
        />
      ) : (
        <TabItem
          onPress={() => {
            setSection('Borrar');
            setOpenSheet(true);
          }}
          children={<Text className={`text-black`}>Borrar</Text>}
        />
      )
    ) : (
      <TabItem
        onPress={() => {
          setSection(routeName);
          navigate(routeName);
        }}
        children={
          <Text
            className={`text-black ${
              selectedTab === routeName && 'font-bold'
            }`}>
            {routeName}
          </Text>
        }
      />
    );
  };

  return (
    <>
      <CurvedBottomBar.Navigator
        screenOptions={{
          headerShown: false,
        }}
        style={{
          width: '100%',
          marginBottom: !openSheet
            ? 0
            : section === 'Borrar'
            ? 249
            : section === 'Prestar'
            ? 349
            : '70%',
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
        renderCircle={({
          selectedTab,
          navigate,
        }: {
          selectedTab: string;
          navigate: (selectedTab: string) => void;
        }) =>
          openSheet ? (
            <CircleItem
              children={<Icon name="chevron-down" size={30} color="black" />}
              onPress={() => setOpenSheet(false)}
            />
          ) : selectedTab === 'Prestados' || selectedTab === 'Leídos' ? (
            <CircleItem
              children={<Icon name="home" size={30} color="black" />}
              onPress={() => {
                setSection('Inicio');
                navigate('Inicio');
              }}
            />
          ) : selectedTab === 'Detalles' ? (
            <CircleItem
              children={<Icon name="check" size={30} color="black" />}
              onPress={() => console.log('check')}
            />
          ) : (
            <CircleItem
              children={<Icon name="plus" size={30} color="black" />}
              onPress={() => setOpenSheet(true)}
            />
          )
        }
        tabBar={renderTabBar}>
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
          component={() => (
            <BookDetailsScreen
              setOpenSheet={setOpenSheet}
              navigation={navigation}
            />
          )}
          position="CIRCLE"
        />
      </CurvedBottomBar.Navigator>
      {openSheet && (
        <View className="w-full h-full bg-black/40 absolute top-0 left-0 z-0>">
          <View
            className={`w-full h-[250] bg-white absolute bottom-0 left-0 ${
              section === 'Borrar'
                ? 'h-[251]'
                : section === 'Prestar'
                ? 'h-[351]'
                : 'h-[70%]'
            }`}>
            <BottomSheet section={section} setOpenSheet={setOpenSheet} />
          </View>
        </View>
      )}
    </>
  );
};

const BottomSheet = ({
  section,
  setOpenSheet,
}: {
  section: string;
  setOpenSheet: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [date, setDate] = useState<string>('');

  return section === 'Borrar' ? (
    <View className="flex items-center justify-evenly p-6 h-full w-full">
      <Text>¿Está seguro que desea eliminar BOOK_NAME?</Text>
      <View className="flex flex-row w-full justify-evenly">
        <Button mode="text" onPress={() => console.log('Pressed')}>
          No
        </Button>
        <Button mode="text" onPress={() => console.log('Pressed')}>
          Sí
        </Button>
      </View>
    </View>
  ) : section === 'Prestar' ? (
    <View className="flex items-start justify-evenly py-6 px-16 h-full w-full">
      <Text>¿A quién prestaste BOOK_NAME?</Text>
      <TextInput
        className="w-full"
        mode="outlined"
        label="Nombre"
        placeholder="Pepito Pérez"
        // value={text}
        // onChangeText={text => setText(text)}
      />
      <Text>¿Cuándo lo prestaste?</Text>
      <TextInput
        className="w-full"
        mode="outlined"
        label="Fecha"
        placeholder="DD/MM/AAAA"
        maxLength={10}
        value={date}
        onChangeText={text => setDate(text)}
      />
      <View className="flex flex-row w-full justify-evenly">
        <Button mode="text" onPress={() => setOpenSheet(false)}>
          Cancelar
        </Button>
        <Button mode="text" onPress={() => console.log('Pressed')}>
          Guardar
        </Button>
      </View>
    </View>
  ) : section === 'Inicio' || section === 'Detalles' ? (
    <ScrollView>
      <View className="flex items-start justify-evenly pb-6 pt-2 px-14 h-full w-full gap-6">
        <TextInput
          className="w-full"
          mode="outlined"
          label="Portada"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Título"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Autor"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Descripción"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Año"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TextInput
          className="w-full"
          mode="outlined"
          label="Páginas"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <View className="flex flex-row w-full justify-evenly mt-8">
          <Button mode="text" onPress={() => setOpenSheet(false)}>
            Cancelar
          </Button>
          <Button mode="text" onPress={() => console.log('Pressed')}>
            Guardar
          </Button>
        </View>
      </View>
    </ScrollView>
  ) : (
    <></>
  );
};

export default CustomTabBar;
