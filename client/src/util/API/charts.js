import axios from 'axios';

const getCallsPerLane = () => axios.get('/api/charts/data/bar/callsperlane');

export default {getCallsPerLane};
