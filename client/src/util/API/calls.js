import axios from 'axios';

const getCalls = () => axios.get('/api/calls');

const addCall = (call) => axios.post('/api/calls', call);

export default {getCalls, addCall};
