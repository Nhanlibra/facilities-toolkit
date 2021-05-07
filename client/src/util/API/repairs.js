import axios from 'axios';

const getRepairs = (status = '') => axios.get(`/api/repairs/${status}`);

const addRepair = (repair) => axios.post('/api/repair', repair);

export default {getRepairs, addRepair};
