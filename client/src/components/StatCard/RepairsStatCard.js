import React, {useState, useEffect} from 'react';
import StatCard from '.';
import API from '../../util/API';

const RepairsStatCard = () => {
  const [repairsCount, setRepairsCount] = useState(0);

  useEffect(() => {
    API.repairs.getRepairsCount().then(({data}) => setRepairsCount(data));
  }, []);

  return <StatCard
    bg="warning"
    color="white"
    text="Repairs Required"
    value={repairsCount}
  />;
};

export default RepairsStatCard;
