import React, { useContext, useState } from 'react';
import { Menu,Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

const MenuBar = () => {
  const { user, logout } = useContext(AuthContext);
  // dynamically set the 'active' link by looking at the current URL
  const pathName = window.location.pathname;
  const path = pathName === '/' ? 'home' : pathName.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Segment inverted  color='orange'>
    <Menu inverted color='orange'  secondary size="small" >
      <Menu.Item name={user.username} active as={Link} to="/" />
      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={logout} as={Link} to="/login" />
      </Menu.Menu>
    </Menu>
    </Segment>
  ) : (
    <Segment inverted color='orange'>
    <Menu color='orange' inverted secondary size="small" >
      <Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick} as={Link} to="/" />
      <Menu.Menu position="right">
        <Menu.Item name="login" active={activeItem === 'login'} onClick={handleItemClick} as={Link} to="/login" />
        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
    </Segment>
  );

  return menuBar;
}

export default MenuBar;
