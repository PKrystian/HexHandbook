import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopContent from './components/top/TopContent';
import MainContent from './components/main/MainContent';
import BottomContent from './components/bottom/BottomContent';

const App = () => {
  return (
    <View style={styles.container}>
      <TopContent />
      <MainContent />
      <BottomContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
