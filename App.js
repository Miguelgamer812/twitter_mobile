import FirebaseStage from './context/firebase/firebaseStage';
import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import feed from './views/feed';
import newTweet from './views/newTweet';
import progresTwitt from './views/progresTwitt';
//importar el Stage context
import PedidosStage from './context/pedidos/pedidosStage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseStage>

        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: "#FFDA00",
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: "#000"
          }}
          >
            <Stack.Screen
              name="newTweet"
              component={newTweet}
              options={{
                title: "Nuevo Tweet"
              }} />

            <Stack.Screen
              name="feed"
              component={feed}
              options={{
                title: "Feed"
              }} />
          </Stack.Navigator>

        </NavigationContainer>
      </FirebaseStage>
    </>
  )
}

export default App;
