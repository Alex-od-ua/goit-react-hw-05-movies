import { NavLink } from 'react-router-dom';

import { items } from './items';
import css from './NavBar.module.css';

// const getFullName = ({ isActive }) => {
//     return isActive ? `${css.link} ${css.active}` : css.link;
// }

export const NavBar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{elements}</ul>;
};
