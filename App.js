import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import colors from "./app/config/colors";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator 
    initialRouteName="Listing" 
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen 
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: false
      }}
     />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Listing" component={ListingsScreen} />
    <Stack.Screen name="Details" component={ListingDetailsScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const tabOptions = {
  activeBackgroundColor: '#eee',
  activeTintColor: 'tomato',
  // inactiveBackgroundColor: '#eee',
  inactiveTintColor: 'black',
  backgroundColor: '#fff'
};

const TabNavigator = () => (
  <Tab.Navigator tabBarOptions={{ ...tabOptions }}>
    <Tab.Screen 
      name="Listing" 
      component={StackNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        )
      }} 
    />
    <Tab.Screen 
      name="ListEdit" 
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="upload" size={size} color={color} />
        )
      }} 
    />
    <Tab.Screen 
      name="Account" 
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        )
      }} 
    />
  </Tab.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  )
};