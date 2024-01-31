import React from 'react';
import { SafeAreaView } from 'react-native';
import SpellTable from './SpellTable';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpellTable />
    </SafeAreaView>
  );
};

export default App;
