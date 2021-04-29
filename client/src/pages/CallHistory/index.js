import React from "react";
import { Table } from "react-bootstrap";
import PageContainer from "../PageContainer";

export default () => {
  return (
    <PageContainer margin title="Call History">
      <Table striped bordered hover>
        <thead>
          <th>Date & Time</th>
          <th>Lane</th>
          <th>Code</th>
          <th>Description</th>
          <th>Tech</th>
        </thead>
        <tbody>
          <tr>
            <td>Thu 29 Apr 2021 20:23</td>
            <td>5</td>
            <td>TS2 Jam</td>
            <td>Double load 7 pin</td>
            <td>N.O</td>
          </tr>
          <tr>
            <td>Thu 29 Apr 2021 20:48</td>
            <td>15</td>
            <td>Pin7 Ld</td>
            <td>L.H Corner jam</td>
            <td>N.O</td>
          </tr>
        </tbody>
      </Table>
    </PageContainer>
  );
};
