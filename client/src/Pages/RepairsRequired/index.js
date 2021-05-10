import React, {useState, useEffect} from 'react';
import {Badge, Table} from 'react-bootstrap';
import API from '../../util/API';
import PageContainer from '../PageContainer';
import {capitalise, parseDate} from '../../util/helpers';
import NewRepairBtn from './NewRepairBtn';
import EditRepair from '../EditRepair';

const RepairsRequired = () => {
  const [repairs, setRepairs] = useState();
  const [completedRepairs, setCompletedRepairs] = useState();

  const [selectedRepair, setSelectedRepair] = useState();
  const [editOpen, setEditOpen] = useState('false');

  const handleEditClose = () => {
    setEditOpen(false);
    refreshRepairs();
  };
  const handleEditOpen = () => setEditOpen(true);

  const handleRepairClick = (repair) => {
    setSelectedRepair(repair);
    handleEditOpen();
  };

  const refreshRepairs = () => {
    API.repairs.getRepairs()
        .then(({data}) => {
          setRepairs(data.filter((r) => r.status !== 'completed').reverse());
          setCompletedRepairs(data.filter((r) => r.status === 'completed'));
        });
  };

  useEffect(() => {
    refreshRepairs();
  }, []);

  return (
    <PageContainer margin title="Repairs Required">
      <h3 className="float-left">Pending</h3>
      <NewRepairBtn />
      {repairs &&
      <Table className="repair-table" striped bordered hover>
        <thead>
          <tr>
            <th>Logged</th>
            <th>Lane</th>
            <th>Priority</th>
            <th>Description</th>
            <th>Status</th>
            <th className="min-width">Logged By</th>
          </tr>
        </thead>
        <tbody>
          {repairs.map((repair) => (
            <tr key={repair._id} onClick={() => handleRepairClick(repair)}>
              <td className="min-width">{parseDate(repair.logged)}</td>
              <td className="min-width">{repair.lane}</td>
              <td className="min-width">
                <Badge variant={`priority-${repair.priority}`}>
                  {capitalise(repair.priority)}
                </Badge>
              </td>
              <td>{repair.description}</td>
              <td className="min-width">
                <Badge variant={`status-${repair.status.replace(' ', '')}`}>
                  {capitalise(repair.status)}
                </Badge>
              </td>
              <td>{repair.loggedBy}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      }

      <h3>Completed</h3>
      {completedRepairs &&
      <Table className="repair-table" striped bordered hover>
        <thead>
          <tr>
            <th className="min-width">Logged</th>
            <th className="min-width">Lane</th>
            <th>Description</th>
            <th className="min-width">Status</th>
            <th className="min-width">Logged By</th>
            <th className="min-width">Repaired By</th>
            <th className="min-width">Date Completed</th>
          </tr>
        </thead>
        <tbody>
          {completedRepairs.map((repair) => (
            <tr key={repair._id} onClick={() => handleRepairClick(repair)}>
              <td className="min-width">{parseDate(repair.logged)}</td>
              <td className="min-width">{repair.lane}</td>
              <td>{repair.description}</td>
              <td className="min-width">
                <Badge variant="success">Completed</Badge>
              </td>
              <td className="min-width">{repair.loggedBy}</td>
              <td className="min-width">{repair.repairedBy}</td>
              <td className="min-width">{parseDate(repair.dateRepaired)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      }
      <EditRepair
        show={editOpen}
        handleClose={handleEditClose}
        data={selectedRepair}
      />
    </PageContainer>
  );
};

export default RepairsRequired;
