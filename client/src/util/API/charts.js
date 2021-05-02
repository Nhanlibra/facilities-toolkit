import axios from 'axios';

const getCallsPerLane = () => axios.get('/api/charts/data/bar/callsperlane');

const getCommonCalls = () => axios.get('/api/charts/data/pie/commoncalls');

export default {getCallsPerLane, getCommonCalls};
