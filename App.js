import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

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
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import OfflineMode from "./app/components/OfflineMode";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from './app/auth/storage';
import { AppLoading } from 'expo';


export default function App() {
  const [ user, setUser ] = useState();
  const [isReady, setIsReady ] = useState(false)
  
  const restoreUser = async () => {
    // geting the token upon every re-render/mounting
    // it gets the encrypted token from the local storage
    // so anytime a user opens the app the app.js mounts and the token is retrieved
    // from the user's device local storage
    const user = await authStorage.getUser();
    if (!user) return;
    // decode the token and then set the user object from the token as the user state
    setUser(user)
  };

  if (!isReady) { // is ready is false so if we negate it, it is true so we get 
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)}/>
  }

  return ( 
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <StackNavigator /> */}
        { !user ? <AuthNavigator /> : <AppNavigator /> }
      </NavigationContainer>
    </AuthContext.Provider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },
  offline: {
    height: 40,
    width: '100%',
    backgroundColor: 'red',
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});