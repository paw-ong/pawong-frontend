// src/api/client.js
import axios from 'axios';

const client = axios.create({
    // baseURL: 'http://localhost:8080/api', // nginx로 주소
    baseURL: 'http://localhost/api', // spring backend 주소
    // timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

export default client;