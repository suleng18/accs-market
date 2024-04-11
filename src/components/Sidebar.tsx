import { createElement, useMemo } from 'react';
import { Gauge, Table, Settings } from 'lucide-react';
import { paths } from '@/constants';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import LogoComponent from './LogoComponent';
import { Separator } from './ui/separator';
const Sidebar = () => {
  const menus = useMemo(
    () => [
      {
        title: 'Dashboard',
        icon: Gauge,
        path: paths.dashboard,
      },
      {
        title: 'Posts Management',
        icon: Table,
        path: paths.postsManagement,
      },
      {
        title: 'Setttings',
        icon: Settings,
        path: paths.settings,
      },
    ],
    []
  );
  return (
    <div className="space-y-3">
      <LogoComponent />
      <Separator />
      <div className="px-3 py-2">
        <h2 className="mb-4 px-4 text-start text-2xl text-white font-bold tracking-tight">Main</h2>
        <ul className="space-y-3">
          {menus.map((menu) => (
            <li key={menu.path}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center  p-2 rounded-lg',
                    'w-full justify-start',
                    'hover:bg-accent hover:text-accent-foreground',
                    'text-base font-semibold text-white',
                    isActive && 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  )
                }
              >
                <div className="mr-3">{createElement(menu.icon, { className: 'font-bold' })}</div>
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
