import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainContent = ({ textStyle }) => {
  return (
    <View style={styles.content}>
      <Text style={textStyle}>Main Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#00171F',
  },
});

export default MainContent;
