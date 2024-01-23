/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Animated, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {BorrowedBooksScreen, HomeScreen, ReadBooksScreen} from 'screens';
import Icon from 'react-native-vector-icons/Octicons';

const CircleItem = ({
  children,
  onPress,
}: {
  children: React.JSX.Element;
  onPress: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-[60] w-[60] rounded-full items-center justify-center bg-white bottom-[30]"
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

const CustomTabBar = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const renderTabBar = ({
    routeName,
    navigate,
    selectedTab,
  }: {
    routeName: string;
    selectedTab: string;
    navigate: (selectedTab: string) => void;
  }) => {
    return (
      <TabItem
        onPress={() => navigate(routeName)}
        children={
          <Text
            className={`text-black ${
              selectedTab === routeName && 'font-bold'
            }`}>
            {!openSheet && routeName}
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
          marginBottom: openSheet ? '69%' : 0,
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
          // TODO: refactor
          // openSheet > down
          // !openSheet + Inicio > plus
          // !openSheet + Prestados || Leídos > home
          // !openSheet + Detalles > check ??

          selectedTab !== 'Inicio' ? (
            <CircleItem
              children={<Icon name="home" size={30} color="black" />}
              onPress={() => navigate('Inicio')}
            />
          ) : openSheet ? (
            <CircleItem
              children={<Icon name="chevron-down" size={30} color="black" />}
              onPress={() => setOpenSheet(false)}
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
          name="Inicio"
          component={HomeScreen}
          position="CIRCLE"
        />
      </CurvedBottomBar.Navigator>
      {openSheet && (
        <View className="w-full h-full bg-black/40 absolute top-0 left-0 z-0>">
          <View className="w-full h-[70%] bg-white absolute bottom-0 left-0 ">
            {/* TODO: render según sección */}
          </View>
        </View>
      )}
    </>
  );
};

export default CustomTabBar;
