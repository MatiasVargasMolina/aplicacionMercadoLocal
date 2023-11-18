import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './views/Home';
import Categories from './views/Categories';
import BottomBar from './components/BottomBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navbar from './components/Navbar';
import { View } from 'react-native';
import Cart from './views/Cart';
import Message from './views/Message';
import Account from './views/Account';
import Login from './views/Login';
import Category from './components/Category';
import { Provider } from 'react-redux';
import store from './redux/store';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e35124',
        headerShown:false
        
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Message}
        options={{
          tabBarLabel: 'Soporte',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Category}
        options={{
          tabBarLabel: 'Carrito',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Login}
        options={{
          tabBarLabel: 'Cuenta',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{
            header: () => (
              <View>
                <Navbar />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    </Provider>
  );
}

export default App;

