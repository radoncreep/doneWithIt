import { Notifications } from 'expo';
import React from 'react';
import { View, StyleSheet, Keyboard, Alert } from 'react-native'
import messageApi from '../api/messages';

function ContactSellerForm(props) {
    const handleSubmit = async({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messageApi.send(message, listing.id);

        if(!result.ok) {
            console.log("Error", result);
            return Alert.alert("Error", "Could not send the message to seller");
        };

        resetForm();

        Notifications.presentLocalNotificationAsync({
            title: "Awesome!",
            body: "Your message was sent to the seller."
        });
    };
    
};

export default ContactSellerForm;