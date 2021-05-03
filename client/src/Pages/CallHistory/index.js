import React, {useEffect, useState} from 'react';
import {Spinner, Table} from 'react-bootstrap';
import API from '../../util/API';
import PageContainer from '../PageContainer';
import './CallHistory.scss';

const CallHistory = () => {
  const [calls, setCalls] = useState();

  useEffect(() => {
    API.calls.getCalls().then(({data}) => setCalls(data));
  }, []);

  const parseDate = (date) => {
    const dt = new Date(date);

    return dt.toLocaleString('en-AU', {
      weekday: 'short',
      day: 'numeric',
      year: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

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
                  <td className="min-width">{parseDate(call.date)}</td>
                  <td className="min-width">{call.lane}</td>
                  <td className="min-width">{call.code}</td>
                  <td>{call.description}</td>
                  <td className="min-width">{call.tech}</td>
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
