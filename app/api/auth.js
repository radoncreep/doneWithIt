import client from './client';

const loginUrl = '/auth';

const login = (email, password) => client.post(loginUrl, { email, password });

export default {
    login
};