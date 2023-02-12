import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function RootLayout() {
  return (
    <div className="flex h-full">
      <Navbar />
      <div id="content-layout">
        <Outlet />
      </div>
    </div>
  );
}
