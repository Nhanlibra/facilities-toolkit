import React from 'react';
import LogoFull from '../../Logo/LogoFull';
import LogoIcon from '../../Logo/LogoIcon';
import SearchBox from './SearchBox';
import SidebarLinks from './SidebarLinks';
import UserControl from './UserControl';

const Sidebar = () => {
  return (
    <div className="vh-100 bg-light border-right d-flex flex-column ">
      <div
        className="flex-fill w-100 p-3 d-flex flex-column align-items-center"
      >
        <LogoFull className="pb-3 d-none d-md-block" />
        <LogoIcon className="pb-3 d-md-none" />

        {/* <SearchBox /> */}

        <SidebarLinks />
      </div>

      <UserControl />
    </div>
  );
};

export default Sidebar;
