import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

const SpellList = () => {
  const [spells, setSpells] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState(null);

  useEffect(() => {
    const jsonData = require('./spells.json');
    jsonData.sort((a, b) => {
      if (a.level === 'cantrip' && b.level !== 'cantrip') return -1;
      if (a.level !== 'cantrip' && b.level === 'cantrip') return 1;
      return a.level - b.level;
    });
    setSpells(jsonData);
  }, []);

  if (selectedSpell) {
    return (
      <View style={{ padding: 10, margin: 10, backgroundColor: '#222831' }}>
        <Text style={{ color: '#fff' }}>Name: {selectedSpell.name}</Text>
        <Text style={{ color: '#fff' }}>Level: {selectedSpell.level}</Text>
        <Text style={{ color: '#fff' }}>School: {selectedSpell.school}</Text>
        <Text style={{ color: '#fff' }}>Casting Time: {selectedSpell.casting_time}</Text>
        <Text style={{ color: '#fff' }}>Ritual: {selectedSpell.ritual ? 'Yes' : 'No'}</Text>
        <Text style={{ color: '#fff' }}>Range: {selectedSpell.range}</Text>
        <Text style={{ color: '#fff' }}>Duration: {selectedSpell.duration}</Text>
        <Text style={{ color: '#fff' }}>Components: {selectedSpell.components.raw}</Text>
        <Text style={{ color: '#fff' }}>Description: {selectedSpell.description}</Text>
        {
          selectedSpell.higher_level ?
          <Text style={{ color: '#fff' }}>Higher Level: {selectedSpell.higher_level}</Text>
          : null
        }
        <Text style={{ color: '#fff' }}>Classes: {selectedSpell.classes.join(', ')}</Text>
        <Text style={{ color: '#fff' }}>Tags: {selectedSpell.tags.join(', ')}</Text>
        <Text style={{ color: '#fff' }}>Type: {selectedSpell.type}</Text>
        <TouchableOpacity
          style={{ padding: 10, margin: 10, backgroundColor: '#ddd' }}
          onPress={() => setSelectedSpell(null)}
        >
          <Text style={{ color: '#222831' }}>Back to list</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      <View>
        {spells.map((spell, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{ padding: 10, margin: 10, backgroundColor: '#222831' }}
              onPress={() => setSelectedSpell(spell)}
            >
              <Text style={{ color: '#fff' }}>{spell.name}</Text>
              <Text style={{ color: '#fff' }}>Level: {spell.level}</Text>
              <Text style={{ color: '#fff' }}>School: {spell.school}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default SpellList;