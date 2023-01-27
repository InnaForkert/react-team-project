import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="diagram">Statistics</NavLink>
        </li>
        <li>
          <NavLink to="currency">Currency for mobile version</NavLink>
        </li>
      </ul>
    </nav>
  );
}
