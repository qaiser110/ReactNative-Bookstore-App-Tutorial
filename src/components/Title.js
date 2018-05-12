import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    padding: 20,
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#434343',
  },
})

export default ({ text }) => <Text style={styles.header}>{text}</Text>
