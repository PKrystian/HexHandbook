import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import spellsData from '../../data/dnd-spells-static.json';

const MainContent = ({ textStyle }) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.content}>
        {spellsData.map((spell) => (
          <View key={spell.id} style={styles.spellContainer}>
            <Text style={[textStyle, styles.spellName]}>{spell.name}</Text>
            {spell.tag ? (
              <View style={styles.tagContainer}>
                {spell.tag.split(',').map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={[textStyle, styles.tagText]}>{tag.trim()}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#00171F',
  },
  content: {
    padding: 10,
  },
  spellContainer: {
    backgroundColor: '#00171F',
    borderWidth: 2,
    borderColor: '#007EA7',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  spellName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#007EA7',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 2,
  },
  tagText: {
    color: '#fff',
  },
});

export default MainContent;
