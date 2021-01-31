import { create } from 'apisauce';
import { cos } from 'react-native-reanimated';

const apiClient = create({
    baseURL: 'http://192.168.43.211:9000/api'
});

// console.log('apiClient', apiClient);

export default apiClient;