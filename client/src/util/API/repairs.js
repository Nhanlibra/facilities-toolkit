import axios from 'axios';

const getRepairs = (status = '') => axios.get(`/api/repairs/${status}`);

const addRepair = (repair) => axios.post('/api/repairs', repair);

export default {getRepairs, addRepair};
