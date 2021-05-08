import React, {useState, useEffect} from 'react';
import StatCard from '.';
import API from '../../util/API';

const CallsStatCard = () => {
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    API.calls.getCallsCount().then(({data}) => setCallCount(data));
  }, []);

  return <StatCard
    bg="danger"
    color="white"
    text="Calls (7 days)"
    value={callCount}
  />;
};

export default CallsStatCard;
