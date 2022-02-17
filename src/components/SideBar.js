import { NavLink } from 'react-router-dom';

import { useState } from 'react';

const SideBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={`sideBar ${active ? 'active' : ''}`}>
      <div className="menu" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="links">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/about-app"
          >
            About App
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/about-author"
          >
            About Author
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
