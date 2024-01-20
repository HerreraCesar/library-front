import React from 'react';
import AppNavigation from './navigation';
import {PaperProvider} from 'react-native-paper';

const App = (): React.JSX.Element => {
  return (
    <PaperProvider>
      <AppNavigation />
    </PaperProvider>
  );
};

export default App;
