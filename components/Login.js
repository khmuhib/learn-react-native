import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'

const Login = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Login Page</Text>
            <Button title="Go Home Page" onPress={() => props.navigation.navigate('Home')} />
            <StatusBar style="auto" />
        </View>
    )
}


export default Login