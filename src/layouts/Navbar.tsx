import { Link } from 'react-router-dom';
import { routes } from '../router';

export function Navbar() {
  const lastItem = routes[routes.length - 1];
  return (
    <div className="box-border w-32 border-r-[0.5px] border-gray-400 xl:w-64">
      <h1 className="flex h-20 items-center px-6 xl:h-16">Awesome Course</h1>
      <nav className=" relative h-[calc(100%-5rem)] w-full bg-blend-soft-light dark:bg-stone-900 xl:h-[calc(100%-4rem)]">
        <input
          className="m-3 w-4/5 rounded-md p-2"
          type="text"
          placeholder="Search..."
        />
        <ul className="w-full [&_li:hover]:bg-sky-900 [&_li]:m-3 [&_li]:rounded-md [&_li]:p-2">
          {routes.slice(0, routes.length - 1).map((route) => (
            <li key={route.title}>
              <Link to={route.path!}>{route.title}</Link>
            </li>
          ))}
          <li key={lastItem.title} className="absolute bottom-3">
            <Link to={lastItem.path!}>{lastItem.title}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
