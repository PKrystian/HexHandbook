import React, { useState, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'

const SpellList = () => {
  const [spells, setSpells] = useState([])

  useEffect(() => {
    const jsonData = require('./spells.json')
    jsonData.sort((a, b) => {
      if (a.level === 'cantrip' && b.level !== 'cantrip') return -1
      if (a.level !== 'cantrip' && b.level === 'cantrip') return 1
      return a.level - b.level
    })
    setSpells(jsonData)
  }, [])

  return (
    <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      <View>
        {spells.map((spell, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{ padding: 10, margin: 10, backgroundColor: '#222831' }}
            >
              <Text style={{ color: '#fff' }}>{spell.name}</Text>
              <Text style={{ color: '#fff' }}>Level: {spell.level}</Text>
              <Text style={{ color: '#fff' }}>School: {spell.school}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default SpellList
