import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

export default function Login({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>Login</Text>
            <Button title = 'Register' onPress = {()=> navigation.navigate('Register')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
})
