import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
  
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Meesages" component={MessagesScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;