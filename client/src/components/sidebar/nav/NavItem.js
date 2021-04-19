import React, { useState } from "react";

const NavItem = (props) => {
  const liClassNames = (hover) => {
    if (hover) {
      return `
        bg-gray-200
        rounded-md text-gray-800 py-1 px-2
        flex items-center cursor-pointer
      `;
    }

    return `
      ${props.active ? "bg-gray-200" : ""}
      rounded-md text-gray-800 py-1 px-2
      flex items-center cursor-pointer
    `;
  };

  const [hover, setHover] = useState(false);

  const handleHover = (e) => {
    e.target.className = liClassNames(!hover);
    setHover(!hover);
  };

  return (
    <li
      className={`
        ${props.active ? "bg-gray-200" : ""}
        rounded-md text-gray-800 py-1 px-2
        flex items-center
      `}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <i className={`${props.icon} mr-3 text-2xl text-gray-600`}></i>
      {props.text}
    </li>
  );
};

export default NavItem;
