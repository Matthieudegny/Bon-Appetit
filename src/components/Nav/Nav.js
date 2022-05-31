import * as React from 'react';
import './nav.scss';
import HomeIcon from '@mui/icons-material/Home';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';




// on centralise la fonction pour gerer nos class dans les NavLink
const getMenuClass = ({ isActive }) => classNames('menu-link', { 'menu-link--active': isActive }); // `menu-link ${isActive ? 'menu-link--active' : ''}`

function Nav() {


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
          to="recipes"
          className={getMenuClass}
      >
      
        <div className="nav-items">
          <TakeoutDiningIcon />
          <div>Recipes</div>
        </div>
            
      </NavLink>

      <NavLink
          to="recipesIdeas"
          className={getMenuClass}
      >
        
           
        <div className="nav-items">
          <TipsAndUpdatesIcon />
          <div>Suggestions</div>
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

export default Nav;