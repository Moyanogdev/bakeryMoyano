import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button title='Go to Categories' onPress={() => navigation.popToTop()}/>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})