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
    'ID',
    'Name',
    'Level',
    'School',
    'Casting Time',
    'Range',
    'Duration',
    'Ritual',
    'Classes',
    'Components',
    'Description',
    'Tags',
    'Type'
  ]

  return (
    <ScrollView vertical={true} showsVerticalScrollIndicator={false} style={tableStyles.scrollView}>
      <View style={tableStyles.container}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#393E46' }}>
          <Row data={tableHead} style={tableStyles.head} textStyle={tableStyles.headText} />
          {tableData.map((rowData, index) => {
            const descriptionWithHigherLevels = rowData.higher_levels
              ? `${rowData.description}\n\nHigher Levels: ${rowData.higher_levels}`
              : rowData.description

            return (
              <Row
                key={index}
                data={[
                  index + 1,
                  rowData.name,
                  rowData.level,
                  rowData.school,
                  rowData.casting_time,
                  rowData.range,
                  rowData.duration,
                  rowData.ritual ? 'Yes' : 'No',
                  rowData.classes.join(', '),
                  `${rowData.components.raw} ${rowData.components.materials_needed ? `(${rowData.components.materials_needed.join(', ')})` : ''}`,
                  descriptionWithHigherLevels,
                  rowData.tags.join(', '),
                  rowData.type
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
