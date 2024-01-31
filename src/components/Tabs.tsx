import React from 'react';
import {TabItem} from '@components';
import {Text} from 'react-native';
import {
  RootState,
  setIsOpenSheet,
  setSelectedSection,
  useAppDispatch,
  useAppSelector,
} from 'store';

interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (selectedTab: string) => void;
}

const Tabs: React.FC<TabBarProps> = ({routeName, navigate, selectedTab}) => {
  const dispatch = useAppDispatch();
  const isOpenSheet = useAppSelector(
    (state: RootState) => state.selectedSection.isOpenSheet,
  );

  return isOpenSheet ? (
    <></>
  ) : selectedTab === 'Detalles' ? (
    routeName === 'Leídos' ? (
      <TabItem
        onPress={() => {
          dispatch(setSelectedSection('Prestar'));
          dispatch(setIsOpenSheet(true));
        }}
        children={<Text className={'text-black'}>Prestar</Text>}
      />
    ) : (
      <TabItem
        onPress={() => {
          dispatch(setSelectedSection('Borrar'));
          dispatch(setIsOpenSheet(true));
        }}
        children={<Text className={`text-black`}>Borrar</Text>}
      />
    )
  ) : (
    <TabItem
      onPress={() => {
        dispatch(setSelectedSection(routeName));
        navigate(routeName);
      }}
      children={
        <Text
          className={`text-black ${selectedTab === routeName && 'font-bold'}`}>
          {routeName}
        </Text>
      }
    />
  );
};

export default Tabs;
