import { useEffect } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushToken';
import navigation from '../navigation/rootNavigation';

export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();
        
        if (notificationListener) Notifications.addListener(notificationListener);
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            // the granted property always returns false for ios simulators or android emulators
            // because it is not supported for those platforms
            if (!permission.granted) return; 
    
            // if granted you get a token for that device
            const token = await Notifications.getExpoPushTokenAsync();
            // we dont have to await the call bcos we dont have to wait for a response to do something after
            // it all happens after
            expoPushTokensApi.register(token);
        } catch (error) {
            console.log('Error getting a push token ', error);
        };
    };
};