import React, {useEffect, useState} from 'react';
import {Spinner, Table} from 'react-bootstrap';
import API from '../../util/API';
import PageContainer from '../PageContainer';

const CallHistory = () => {
  const [calls, setCalls] = useState();

  useEffect(() => {
    API.calls.getCalls().then(({data}) => setCalls(data));
  }, []);

  return (
    <PageContainer margin title="Call History">
      {calls ?
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Lane</th>
              <th>Code</th>
              <th>Description</th>
              <th>Tech</th>
            </tr>
          </thead>
          <tbody>
            {
              calls.map((call) => (
                <tr key={call._id}>
                  <td>{call.date}</td>
                  <td>{call.lane}</td>
                  <td>{call.code}</td>
                  <td>{call.description}</td>
                  <td>{call.tech}</td>
                </tr>
              ))
            }
          </tbody>
        </Table> :
        <>
          <Spinner animation="grow" variant="primary" />
          <p>Loading...</p>
        </>
      }
    </PageContainer>
  );
};

export default CallHistory;
