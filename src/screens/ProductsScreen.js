import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ProductsScreen</Text>
      <Button title='Go to Details' onPress={() => navigation.navigate("Details")} />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})