import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getSettings = async () => {
  // Mock settings data
  return [
    { id: 1, setting: 'Enable Notifications', value: true, description: 'Receive notifications for important updates and alerts.' },
    { id: 2, setting: 'Allow Tracking', value: false, description: 'Allow tracking of user activity for improving user experience.' },
    { id: 3, setting: 'Dark Mode', value: true, description: 'Enable dark mode for the application interface.' },
    { id: 4, setting: 'Auto-Update', value: false, description: 'Automatically update the application to the latest version.' },
    { id: 5, setting: 'Email Reports', value: true, description: 'Receive monthly email reports about your activity and performance.' },
  ];
};
