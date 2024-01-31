import { StyleSheet } from 'react-native'

const BACKGROUND_COLOR = '#222831'
const BACKGROUND_COLOR_ODD = '#393E46'
const TEXT_COLOR = '#EEEEEE'
const BORDER_COLOR = '#393E46'

export const tableStyles = StyleSheet.create({
  scrollView: { backgroundColor: BACKGROUND_COLOR },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: BACKGROUND_COLOR },
  head: { height: 40, backgroundColor: BORDER_COLOR, justifyContent: 'center', alignItems: 'center' },
  headText: { margin: 6, color: TEXT_COLOR, textAlign: 'center' },
  text: { margin: 6, color: TEXT_COLOR, textAlign: 'center' },
  row: { flexDirection: 'row', backgroundColor: BACKGROUND_COLOR },
  evenRow: { backgroundColor: BACKGROUND_COLOR },
  oddRow: { backgroundColor: BACKGROUND_COLOR_ODD }
})
