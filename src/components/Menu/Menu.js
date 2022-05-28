import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './menu.scss';

import HomeIcon from '@mui/icons-material/Home';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';




// on centralise la fonction pour gerer nos class dans les NavLink
const getMenuClass = ({ isActive }) => classNames('menu-link', { 'menu-link--active': isActive }); // `menu-link ${isActive ? 'menu-link--active' : ''}`

export default function PersistentDrawerLeft() {


  return (
    <div className="menu">

      <NavLink
          to="/"
          className={getMenuClass}
        >      

          <div className="nav-items">
            <HomeIcon />
            <div>Home</div>
          </div>

      </NavLink>
  
      <NavLink
          to="reciepies"
          className={getMenuClass}
      >
      
        <div className="nav-items">
          <TakeoutDiningIcon />
          <div>Reciepies</div>
        </div>
            
      </NavLink>

      <NavLink
          to="reciepiesIdeas"
          className={getMenuClass}
      >
        
           
        <div className="nav-items">
          <TipsAndUpdatesIcon />
          <div>Reciepies ideas</div>
        </div>
            
           
      </NavLink>

      <NavLink
          to="fridge"
          className={getMenuClass}
      >
        
        <div className="nav-items">
          <KitchenIcon />
          <div>Fridge</div>
        </div>
      </NavLink>

  </div>
  );
}