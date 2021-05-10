import React from 'react';
import {useAuth} from '../../../hooks/useAuth';

const UserControl = () => {
  const {logout} = useAuth();
  return (
    <div className="d-flex w-100 p-3 border-top align-items-center">
      <img
        // width="100%"
        className="rounded-circle mr-2"
        style={{maxWidth: '100%', height: 'auto', maxHeight: '48px'}}
        src="https://avatars.githubusercontent.com/u/3156908?v=4"
      />
      <div className="flex-fill d-none d-md-block">
        <h6 className="m-0 p-0">Nathan Opresnik</h6>
        <small className="m-0 p-0">Monash Tenpin Bowl</small>
      </div>
      <i
        className="bi-door-open d-none d-md-block logout-btn"
        onClick={() => logout()}
      ></i>
    </div>
  );
};

export default UserControl;
