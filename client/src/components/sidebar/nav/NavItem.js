const NavItem = (props) => {
  return (
    <li>
      <i className={`${props.icon} mr-3`}></i>
      {props.text}
    </li>
  );
};

export default NavItem;
