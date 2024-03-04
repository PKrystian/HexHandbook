import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BottomContent = ({ textStyle }) => {
  return (
    <View style={styles.content}>
      <Text style={textStyle}>Bottom Navigation Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {    
    flex: 1,
    backgroundColor: '#00171F',
  },
});

export default BottomContent;
