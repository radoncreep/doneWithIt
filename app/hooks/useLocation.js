import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
    const [ location, setLocation ] = useState();

    // since we cant pass an asyncc function to the useEffect hook
    const getLocation = async () => {
        try {
            const { granted } = await Location.requestPermissionsAsync();
            if (!granted) return;
            const { coords: { latitude, longitude }} = Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location;
};

// A custom hook encapsulates some state
// and some logic about that state in a single place
// now we can reuse this hook in multiple places
