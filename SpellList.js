import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, TouchableOpacity, Text as RNText, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  whiteColor: {
    color: '#fff'
  }
})

const WhiteText = (props) => <RNText style={[styles.whiteColor, props.style]}>{props.children}</RNText>

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
    )
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
              <WhiteText>{spell.name}</WhiteText>
              <WhiteText>Level: {spell.level}</WhiteText>
              <WhiteText>School: {spell.school}</WhiteText>
            </TouchableOpacity>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default SpellList
