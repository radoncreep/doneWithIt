import { AsyncStorage } from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';
const expiryMinutes = 5;

const store = async (key, value) => {
    // we dont have to call this method everytime we want to store something in the cache
    try {
        const item = {
            value,
            timestamp: Date.now() // determine if the item is expired or not
        };

        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    };
};

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    // check the difference between the time now and the stored time
    return now.diff(storedTime, 'minutes') > expiryMinutes;
};

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value); // deserialize the object we get back

        // if item doesnt exist 
        if (!item) return null;

        // exist but expired
        if (isExpired(item)) {
            // Violating Command Query Seperation
            // command changes the state of our application
            // query, queries the state of our application
            await AsyncStorage.removeItem(prefix + key);
            return null;
        };

        // item that is not expired
        return item.value;

    } catch (error) {
        console.log(error);
    }
};

export default {
    store,
    get
};