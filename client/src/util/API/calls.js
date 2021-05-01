import axios from 'axios';

const getCalls = () => axios.get('/api/calls');

const addCall = (call) => axios.post('/api/call', call);

export default {getCalls, addCall};
