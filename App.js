import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import { About } from './components/About';
import TabOne from './components/TabOne';
import TabTwo from './components/TabTwo';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();

export default function App() {
  const btnPress = () => {
    console.warn("Button Pressed")
  }
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Home} options={{
    //       title: 'Homo Screen',
    //       headerRight: () => (
    //         <Button onPress={btnPress} title="Info" />
    //       ),
    //     }} />
    //     <Stack.Screen name="About" component={About} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="TabOne" component={TabOne} />
        <Tab.Screen name="TabTwo" component={TabTwo} />
      </Tab.Navigator> */}

    </NavigationContainer>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonStyle: {
//     width: 200,
//     height: 50,
//     fontSize: 20
//   }
// });
