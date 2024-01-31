import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';

const CircleItem = ({
  children,
  onPress,
  styles,
  disabled = false,
}: {
  children: React.JSX.Element;
  onPress: any;
  styles?: string;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      className={`h-[60] w-[60] rounded-full items-center justify-center bg-white bottom-[30] ${styles}`}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        elevation: 2,
      }}>
      <Animated.View className="shadow-md">{children}</Animated.View>
    </TouchableOpacity>
  );
};

export default CircleItem;
