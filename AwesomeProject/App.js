import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import ViewForCategory from './views/ViewForCategory';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator         screenOptions={{
          headerShown: false, // Oculta la barra superior en todas las pantallas
        }}
>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="ViewForCategory" component={ViewForCategory}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;