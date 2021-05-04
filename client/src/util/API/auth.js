import axios from 'axios';

const getUser = () => axios.get('/api/auth/user-data');

const loginUser = (body) => axios.post('/api/auth/login', body);

const logoutUser = () => axios.get('/api/auth/logout');

export default {getUser, loginUser, logoutUser};
