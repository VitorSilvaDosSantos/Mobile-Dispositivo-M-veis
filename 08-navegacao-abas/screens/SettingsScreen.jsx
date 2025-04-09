import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configurações</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
})
