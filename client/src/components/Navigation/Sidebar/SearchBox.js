import React from 'react';
import {Form} from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Form className="w-100">
      <Form.Group controlId="search.searchInput">
        <Form.Control type="text" placeholder="Search"></Form.Control>
      </Form.Group>
    </Form>
  );
};
export default SearchBox;
