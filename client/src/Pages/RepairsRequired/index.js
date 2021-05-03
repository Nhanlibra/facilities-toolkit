import React from 'react';
import {Badge, Table} from 'react-bootstrap';
import PageContainer from '../PageContainer';


const RepairsRequired = () => {
  return (
    <PageContainer margin title="Repairs Required">
      <h3>Pending</h3>
      <Table striped bordered hover>
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
          <tr>
            <td className="min-width">Thu 29 Apr 2021 20:48</td>
            <td className="min-width">5</td>
            <td className="min-width">
              <Badge variant="priority-high">High</Badge>
            </td>
            <td>Repair/replace 7 pin holder to solve double loading.</td>
            <td className="min-width">
              <Badge variant="warning">Pending</Badge>
            </td>
            <td>N.O</td>
          </tr>
          <tr>
            <td>Thu 29 Apr 2021 20:23</td>
            <td>23</td>
            <td>
              <Badge variant="priority-low">Low</Badge>
            </td>
            <td>Cracked 7 pin side T-Band frame</td>
            <td>
              <Badge variant="warning">Pending</Badge>
            </td>
            <td>N.O</td>
          </tr>
        </tbody>
      </Table>

      <h3>Completed</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Logged</th>
            <th>Lane</th>
            <th>Description</th>
            <th>Status</th>
            <th className="min-width">Logged By</th>
            <th className="min-width">Repaired By</th>
            <th>Date Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="min-width">Fri 2 Apr 2021 10:02</td>
            <td className="min-width">12</td>
            <td>Repair/replace #1 spotting tong</td>
            <td className="min-width">
              <Badge variant="success">Completed</Badge>
            </td>
            <td>J.H</td>
            <td>N.O</td>
            <td className="min-width">Mon 5 Apr 2021 10:35</td>
          </tr>
        </tbody>
      </Table>
    </PageContainer>
  );
};

export default RepairsRequired;
