import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
