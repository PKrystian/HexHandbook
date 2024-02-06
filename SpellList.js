import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, TouchableOpacity, Text as RNText, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  whiteColor: {
    color: '#fff'
  }
})

const WhiteText = React.memo((props) => <RNText style={[styles.whiteColor, props.style]}>{props.children}</RNText>)
WhiteText.displayName = 'WhiteText'

WhiteText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

const SpellList = () => {
  const [spells, setSpells] = useState([])
  const [selectedSpell, setSelectedSpell] = useState(null)

  useEffect(() => {
    const jsonData = require('./spells.json')
    jsonData.sort((a, b) => {
      if (a.level === 'cantrip' && b.level !== 'cantrip') return -1
      if (a.level !== 'cantrip' && b.level === 'cantrip') return 1
      return a.level - b.level
    })
    setSpells(jsonData)
  }, [])

  if (selectedSpell) {
    return (
      <ScrollView>
        <View style={{ padding: 10, margin: 10, backgroundColor: '#222831' }}>
          <WhiteText>Name: {selectedSpell.name}</WhiteText>
          <WhiteText>Level: {selectedSpell.level}</WhiteText>
          <WhiteText>School: {selectedSpell.school}</WhiteText>
          <WhiteText>Casting Time: {selectedSpell.casting_time}</WhiteText>
          <WhiteText>Ritual: {selectedSpell.ritual ? 'Yes' : 'No'}</WhiteText>
          <WhiteText>Range: {selectedSpell.range}</WhiteText>
          <WhiteText>Duration: {selectedSpell.duration}</WhiteText>
          <WhiteText>Components: {selectedSpell.components.raw}</WhiteText>
          <WhiteText>Description: {selectedSpell.description}</WhiteText>
          {
            selectedSpell.higher_level
              ? <WhiteText>Higher Level: {selectedSpell.higher_level}</WhiteText>
              : null
          }
          <WhiteText>Classes: {selectedSpell.classes.join(', ')}</WhiteText>
          <WhiteText>Tags: {selectedSpell.tags.join(', ')}</WhiteText>
          <WhiteText>Type: {selectedSpell.type}</WhiteText>
          <TouchableOpacity
            style={{ padding: 10, margin: 10, backgroundColor: '#ddd' }}
            onPress={() => setSelectedSpell(null)}
          >
            <WhiteText style={{ color: '#222831' }}>Back to list</WhiteText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  return (
    <FlatList
      data={spells}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item: spell }) => (
        <TouchableOpacity
          style={{ padding: 10, margin: 10, backgroundColor: '#222831' }}
          onPress={() => setSelectedSpell(spell)}
        >
          <WhiteText>{spell.name}</WhiteText>
          <WhiteText>Level: {spell.level}</WhiteText>
          <WhiteText>School: {spell.school}</WhiteText>
        </TouchableOpacity>
      )}
    />
  )
}

export default SpellList
