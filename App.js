import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppPicker from './app/components/AppPicker';

import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import Screen from './app/components/Screen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';


import WelcomeScreen from './app/screens/WelcomeScreen';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 }
]

export default function App() {
  const [ category, setCategory ] = useState(categories[0]);

  return (
    // <ListingDetailsScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <MyAccountScreen />
    // <ListingsScreen />
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories} 
        icon="apps" 
        placeholder="Category" />
      <AppTextInput icon="email" placeholder="firstname" />
    </Screen>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flex: 1
  },
  logoImg: {
    width: "40%",
    height: "20%",
    position: "absolute",
    justifyContent: "center",
    display: "flex"
  }
});
