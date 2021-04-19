import NavItem from "./NavItem";

const links = [
  { name: "Home", icon: "bi-house-door", active: true },
  { name: "Dashboard", icon: "bi-speedometer" },
];

const Nav = () => {
  return (
    <ul className="space-y-1">
      {links.map((link) => {
        return (
          <NavItem text={link.name} icon={link.icon} active={link.active} />
        );
      })}
    </ul>
  );
};

export default Nav;
