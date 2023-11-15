import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'

export const About = (props) => {
    console.warn(props.route.params)
    return (
        <View>
            <Text>About Screen</Text>
            <Text>Params: {props.route.params.name}</Text>
        </View>

    )
}
