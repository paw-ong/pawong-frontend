// src/api/client.js
import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost/api', // spring backend 주소
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// token 있으면 요청 헤더에 추가
client.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

export default client;