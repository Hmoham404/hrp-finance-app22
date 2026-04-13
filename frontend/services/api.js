import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(`${API_BASE_URL}/upload/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error uploading file: ' + error.message);
    }
};

export const getResults = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/results/`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching results: ' + error.message);
    }
};

export const getDendrogram = async (country, period) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dendrogram/${country}/${period}/`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching dendrogram: ' + error.message);
    }
};