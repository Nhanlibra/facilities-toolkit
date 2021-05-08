import React from 'react';
import {Button} from 'react-bootstrap';
import {useAuth} from '../../hooks/useAuth';

const LogoutBtn = () => {
  const {logout} = useAuth();

  return <Button onClick={() => logout()}>Logout</Button>;
};

export default LogoutBtn;
