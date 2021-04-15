import Logo from "../logo";
import Nav from "./nav";
import Search from "./search";
import User from "./user";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 h-full border-r border-gray-300 px-8">
      <div className="w-100 flex flex-col items-left py-6 space-y-6">
        <Logo />
        <User />
        <Search />
        <Nav />
      </div>
    </div>
  );
};

export default Sidebar;
