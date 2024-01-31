import React from 'react';
import AppNavigation from './navigation';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from 'store/store';

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView className="flex-1">
      <PaperProvider>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
