import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#24479e',
  },
})

export default ({ text }) => <Text style={styles.header}>{text}</Text>
