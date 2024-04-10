import LogoComponent from '@/components/LogoComponent';

import { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import BreadcumbComponent from '@/components/BreadcumbComponent';
import Sidebar from '@/components/Sidebar';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-11 ">
      {/* Navigator */}
      <div className="col-span-2  min-h-screen px-3 py-4 border-r">
        <LogoComponent />
        <Separator />
        <Sidebar />
      </div>
      {/* Content */}
      <div className="col-span-9">
        <div></div>
        <BreadcumbComponent />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
