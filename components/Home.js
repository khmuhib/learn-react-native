import { StatusBar } from "expo-status-bar"
import { Text } from "react-native"
import { Button } from "react-native"
import { View } from "react-native"

const Home = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Home</Text>
            <Button title="Go About Page" onPress={() => props.navigation.navigate('About', { name: 'Abhishek' })} />
            <StatusBar style="auto" />
        </View>
    )
}


export default Home