import { create } from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';

const apiClient = create({
    baseURL: 'http://192.168.43.211:9000/api',
    // headers: {
    //     'x-auth-token': await authStorage.getToken()
    // }
});

// Protected routes for transforming our request 
apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

// we are assigning the original "get" method of the apiClient ("http client")
// to a variable  called "get", so this variable has the functionality of the original method
// instead of apiClient.get(url), we do get(url);
const get = apiClient.get;

// we did the above to customize "get" method
// now apiClient.get is now a custom or new function that takes in parameters
// and calls the new get method in it
// since the get method is a promise-based method we have to await it

apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        // so we are passing the url and list of objects in data we get as parameters to cache.store
        // the store takes in the url as key and data as value to be stored in the local storage using setItem method
        // remember that the url we pass is a subdomain/path such as "/listings", it doesnt contain the baseURL
        // cos we already passed it into our create instance
        // in the storage we could get -- key as "cache/listing" and value as [{},{},{},...{}]
        cache.store(url, response.data);
        return response;
    };

    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
}

// console.log('apiClient', apiClient);

export default apiClient;