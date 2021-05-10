import axios from 'axios';

const getRepairs = (status = '') => axios.get(`/api/repairs/${status}`);

const getRepairsCount = () => axios.get(`/api/repairs/count`);

const addRepair = (repair) => axios.post('/api/repairs', repair);

const editRepair = (repair) => axios.put(`/api/repairs/${repair._id}`, repair);

export default {getRepairs, addRepair, getRepairsCount, editRepair};
