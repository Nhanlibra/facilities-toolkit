import axios from 'axios';

const getRepairs = (status) => axios.get(`/api/repairs/${status}`);

export default {getRepairs};
