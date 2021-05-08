import axios from 'axios';

const getRepairs = (status = '') => axios.get(`/api/repairs/${status}`);

const getRepairsCount = () => axios.get(`/api/repairs/count`);

const addRepair = (repair) => axios.post('/api/repairs', repair);

export default {getRepairs, addRepair, getRepairsCount};
