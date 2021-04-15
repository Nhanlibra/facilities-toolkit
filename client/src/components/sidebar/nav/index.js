import NavItem from "./NavItem";

const links = [
  { name: "Home", icon: "bi-house-door" },
  { name: "Dashboard", icon: "bi-speedometer" },
];

const Nav = () => {
  return (
    <ul className="space-y-2">
      {links.map((link) => {
        return <NavItem text={link.name} icon={link.icon} />;
      })}
    </ul>
  );
};

export default Nav;
