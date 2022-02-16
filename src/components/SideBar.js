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
        <li>Home</li>
        <li>About App</li>
        <li>About Author</li>
      </ul>
    </div>
  );
};

export default SideBar;
