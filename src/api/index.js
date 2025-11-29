import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://rankit-backend.onrender.com'
});


export const createProfile = (formData) => API.post('/profile', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const fetchProfiles = () => API.get('/profile');
export const hotProfile = (id) =>API.patch(`/profile/${id}/hotProfile`);

export const compareProfiles = (data) => API.post('/profile/compare', data);
