import axios from 'axios';

const getCalls = () => axios.get('/api/calls');
const getCallsCount = () => axios.get('/api/calls/count');

const addCall = (call) => axios.post('/api/calls', call);

export default {getCalls, getCallsCount, addCall};
