import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
