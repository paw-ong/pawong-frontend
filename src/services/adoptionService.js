import client from '../api/client';

export const getAdoptionList = async (endpoint, params) => {
  try {
    const response = await client.get(`${endpoint}`, {
      params
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch adoption list:', error);
    throw error;
  }
}; 