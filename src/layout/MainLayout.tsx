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
      <div className="2xl:block  sm:hidden xs:hidden col-span-2   min-h-screen px-3 py-4 border-r">
        <Sidebar />
      </div>
      {/* Content */}
      <div className="2xl:col-span-9 sm:col-span-11 xs:col-span-11">
        <Header />
        {/* <BreadcumbComponent /> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
