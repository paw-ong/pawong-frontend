import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getAdoptionList = async (endpoint, params) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      params
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch adoption list:', error);
    throw error;
  }
}; 