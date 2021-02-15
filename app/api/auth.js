import client from './client';

const authUrl = '/auth'

const login = (email, password) => client.post(authUrl, { email, password });

export default {
    login
};