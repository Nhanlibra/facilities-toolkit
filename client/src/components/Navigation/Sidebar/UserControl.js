import React from 'react';

const UserControl = () => {
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
        <small className="m-0 p-0">Head Mechanic</small>
      </div>
      <i className="bi-three-dots-vertical d-none d-md-block"></i>
    </div>
  );
};

export default UserControl;
