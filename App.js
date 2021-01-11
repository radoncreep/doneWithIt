import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';

import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <WelcomeScreen />
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
