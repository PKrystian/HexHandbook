import React from 'react'
import { SafeAreaView } from 'react-native'
import SpellList from './SpellList'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#393E46' }}>
      <SpellList />
    </SafeAreaView>
  )
}

export default App
