import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Table, Row } from 'react-native-table-component'
import { tableStyles } from './styles/Table'

const SpellTable = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const jsonData = require('./spells.json')
    setTableData(jsonData)
  }, [])

  const tableHead = [
    'Name',
    'Level',
    'School'
  ]

  return (
    <ScrollView vertical={true} showsVerticalScrollIndicator={false} style={tableStyles.scrollView}>
      <View style={tableStyles.container}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#222831' }}>
          <Row data={tableHead} style={tableStyles.head} textStyle={tableStyles.headText} />
          {tableData.map((rowData, index) => {
            return (
              <Row
                key={index}
                data={[
                  rowData.name,
                  rowData.level,
                  rowData.school
                ]}
                textStyle={tableStyles.text}
                style={[tableStyles.row, index % 2 === 0 ? tableStyles.evenRow : tableStyles.oddRow]}
              />
            )
          })}
        </Table>
      </View>
    </ScrollView>
  )
}

export default SpellTable
