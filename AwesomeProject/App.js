import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import ViewForCategory from './views/ViewForCategory';
import Categories from './views/Categories';
import Product from './views/Product';

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
        <Stack.Screen name="Categories" component={Categories}  />
        <Stack.Screen name="Product" component={Product}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;