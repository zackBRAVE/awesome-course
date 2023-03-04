import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function RootLayout() {
  return (
    <div className="flex h-full">
      <Navbar />
      <div className="p-4 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
