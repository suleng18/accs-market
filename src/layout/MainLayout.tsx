import LogoComponent from '@/components/LogoComponent';

import { FC } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-11 ">
      {/* Navigator */}
      <div className="col-span-2 space-y-3  min-h-screen px-3 py-4 border-r">
        <LogoComponent />
        {/* <Separator /> */}
        <Sidebar />
      </div>
      {/* Content */}
      <div className="col-span-9">
        <Header />
        {/* <BreadcumbComponent /> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
