import client from './client';

const registerUrl = '/users';

const register = (userInfo) => {
    // this request will return a promise value because apisauce is promise based
    return client.post(registerUrl, userInfo);
};

export default {
    register
};