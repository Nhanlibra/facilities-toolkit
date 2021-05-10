import React from 'react';
import {Nav} from 'react-bootstrap';
import {useHistory, useLocation} from 'react-router';

const SidebarLinks = () => {
  const location = useLocation();
  const history = useHistory();

  const handleNav = (e, href) => {
    e.preventDefault();
    history.push(href);
  };

  return (
    <Nav
      variant="pills"
      className="flex-column w-100"
      activeKey={location.pathname}
    >
      <Nav.Item>
        <Nav.Link href="/" onClick={(e) => handleNav(e, '/')}>
          <i className="bi-house-door-fill"></i>
          <span className="ml-3 d-none d-md-inline">Home</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/calls" onClick={(e) => handleNav(e, '/calls')}>
          <i className="bi-list"></i>
          <span className=" ml-3 d-none d-md-inline">Call History</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/repairs' onClick={(e) => handleNav(e, '/repairs')}>
          <i className="bi-list"></i>
          <span className=" ml-3 d-none d-md-inline">Repairs Required</span>
        </Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link
          href='/pendingwork'
          onClick={(e) => handleNav(e, '/pendingwork')}>
          <i className="bi-list"></i>
          <span className=" ml-3 d-none d-md-inline">Pending Work Items</span>
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
};

export default SidebarLinks;
