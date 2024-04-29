import { NavLink } from 'react-router-dom';

import styles from './Navigaton.module.css';

export const Navigation = () => {
  return (
    <ul className={styles['navigation-container']}>
      <li className={styles['navigation-item']}>
        <NavLink to="/" className={styles['navigation-link']}>
          Home
        </NavLink>
      </li>
      <li className={styles['navigation-item']}>
        <NavLink to="/movies" className={styles['navigation-link']}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
