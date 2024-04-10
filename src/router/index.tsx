import { Outlet, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { ComponentType, FC, PropsWithChildren, Suspense, lazy } from 'react';
import { paths } from '@/constants';
import LoadingComponent from '@/components/LoadingComponent';
import MainLayout from '@/layout/MainLayout';
import DashboardLayout from '@/layout/DashBoardLayout';
import PostItemPage from '@/pages/PostItemPage';

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const LazyComponents: FC<P> = (props: PropsWithChildren<P>) => {
    return (
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center">
            <LoadingComponent className="h-10 w-10" />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };

  return LazyComponents;
};

const RevenuePage = Loadable(lazy(() => import('../pages/RevenuePage')));
const SubcriptionPage = Loadable(lazy(() => import('../pages/SubcriptionPage')));
const SettingsPage = Loadable(lazy(() => import('../pages/SettingsPage')));
const PostManagementPage = Loadable(lazy(() => import('../pages/PostManagementPage')));
const NotFoundPage = Loadable(lazy(() => import('../pages/NotFoundPage')));

const lazyRoutes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            path: paths.dashboard,
            element: (
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            ),
            children: [
              {
                path: paths.revenue,
                element: <RevenuePage />,
              },
              {
                path: paths.subcription,
                element: <SubcriptionPage />,
              },
              {
                element: <NotFoundPage />,
                path: '*',
              },
            ],
          },
          {
            path: paths.postsManagement,
            element: (
              <>
                <PostManagementPage />
                <Outlet />
              </>
            ),
            children: [
              {
                path: ':id',
                element: <PostItemPage />,
              },
            ],
          },
          {
            path: paths.settings,
            element: <SettingsPage />,
          },
          {
            element: <NotFoundPage />,
            path: '*',
          },
        ],
      },
    ],
  },
];

const Router = () => {
  const contents = useRoutes(lazyRoutes);
  return <>{contents}</>;
};

export default Router;
