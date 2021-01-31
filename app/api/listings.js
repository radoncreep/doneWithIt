import client from './client';

const endpoint = '/listings';

// this function returns response from the api
const getListings = (a, b, c) => client.get(endpoint);

export default {
    getListings
};

// apiClient.get('/listing').then(response => {
//     if (!response.ok) {
        
//     }
// })