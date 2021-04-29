import { Badge, Table } from "react-bootstrap";
import PageContainer from "../PageContainer";

export default () => {
  return (
    <PageContainer margin title="Repairs Required">
      <h3>Pending</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Logged</td>
            <td>Lane</td>
            <td>Priority</td>
            <td>Description</td>
            <td>Status</td>
            <td>Logged By</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thu 29 Apr 2021 20:48</td>
            <td>5</td>
            <td>
              <Badge variant="priority-high">High</Badge>
            </td>
            <td>Repair/replace 7 pin holder to solve double loading.</td>
            <td>
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
            <th>Priority</th>
            <th>Description</th>
            <th>Status</th>
            <th>Logged By</th>
            <th>Repaired By</th>
            <th>Date Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fri 2 Apr 2021 10:02</td>
            <td>12</td>
            <td>
              <Badge variant="priority-medium">Medium</Badge>
            </td>
            <td>Repair/replace #1 spotting tong</td>
            <td>
              <Badge variant="success">Completed</Badge>
            </td>
            <td>J.H</td>
            <td>N.O</td>
            <td>Mon 5 Apr 2021 10:35</td>
          </tr>
        </tbody>
      </Table>
    </PageContainer>
  );
};
