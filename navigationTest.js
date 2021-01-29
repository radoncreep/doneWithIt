import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from "./app/components/Screen";
import { tan } from "react-native-reanimated";


const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title="View Tweets" 
      onPress={() => navigation.navigate("TweetDetails")} />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createStackNavigator(); // this returns an object
//the object has a couple pf props Navigator and Screen
const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      title: 'Tweet Details title',
      headerStyle: { backgroundColor: 'tomato' },
      headerTintColor: "white"
    }}
    initialRouteName="Tweets">
    {/* with the screen components we can define opur routes */}
    {/* we give it a unique name with the name attr and render the components */}
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails}
      options={() => ({
        title: 'Tweet Details title',
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: "white"
        }
        )}
      />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
);

const Account = () => <Screen><Text>Account details</Text></Screen>

// returns anobject
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black'
    }}
  >
    <Tab.Screen 
      name="Feed" 
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        )
      }}
      />
    <Tab.Screen 
      name="MyAccount"
      component={Account}
      options={{ 
        title: 'My Account',
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        )
      }} 
      />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator />
       */}
      <TabNavigator />
    </NavigationContainer>
  )
};