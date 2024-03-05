import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import TopContent from './components/top/TopContent';
import MainContent from './components/main/MainContent';
import BottomContent from './components/bottom/BottomContent';

const App = () => {
  return (
    <View style={styles.content}>
      <View style={styles.top}>
        <TopContent textStyle={styles.text} />
      </View>
      <View style={styles.main}>
        <MainContent textStyle={styles.text} />
      </View>
      <View style={styles.bottom}>
        <BottomContent textStyle={styles.text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  top: {
    flex: 0.1,
  },
  main: {
    flex: 0.8,
  },
  bottom: {
    flex: 0.1,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default App;
