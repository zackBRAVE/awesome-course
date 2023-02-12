import { Link } from 'react-router-dom';
import { routes } from '../router';

export function Navbar() {
  return (
    <nav className="w-32 xl:w-64 bg-gray-200">
      <input className="w-full" type="text" placeholder='Search...' />
      <ul>
        {routes.map((route) => (
          <li key={route.title}>
            <Link to={route.path!}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
