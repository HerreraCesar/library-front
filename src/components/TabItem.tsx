import React from 'react';
import {TouchableOpacity, Animated} from 'react-native';

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

export default TabItem;
