import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">
        Main
      </NavLink>
      <NavLink to="/movies"> Movies</NavLink>
    </nav>
  );
}
