import LogoFull from "../../logo/LogoFull";
import SearchBox from "./SearchBox";
import SidebarLinks from "./SidebarLinks";
import UserControl from "./UserControl";

export default () => {
  return (
    <div className="vh-100 bg-light border-right d-flex flex-column">
      <div className="flex-fill w-100 p-3 d-flex flex-column align-items-center">
        <LogoFull />

        <SearchBox />

        <SidebarLinks />
      </div>

      <UserControl />
    </div>
  );
};
