import React from 'react';
import AppNavigation from './navigation';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView className="flex-1">
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
