import { AppRouterConfig } from '@configs/router';
import { useOSType } from '@hooks/useOSType';
import { cx } from '@utils/tools';
import { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const SidebarLayout: IComponent = () => {
  const os = useOSType();
  const location = useLocation();
  const navigator = useNavigate();

  const renderRouterItems = useMemo(() => {
    return Object.values(AppRouterConfig).map((route) => {
      return (
        <div
          key={route.name}
          onClick={() => navigator(route.url)}
          style={{ paddingBottom: '100%' }}
          className={cx(
            'w-full transition-all relative mb-2 rounded-md cursor-pointer hover:bg-white active:scale-90 text-black dark:text-white hover:text-black',
            {
              'bg-white bg-opacity-10': location.pathname === route.url,
            }
          )}>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <span className="text-2xl font-bold">{route.name[0].toUpperCase()}</span>
          </div>
        </div>
      );
    });
  }, [location.pathname, navigator]);

  return (
    <div className="w-full h-full flex flex-row relative">
      {os === 'Darwin' && (
        <div
          data-tauri-drag-region
          draggable
          className="absolute w-full h-5 no-select cursor-grab"></div>
      )}
      <div style={{ width: 70 }} className="h-full px-2">
        <div className="w-full h-5 flex justify-end items-center">
          <span className="font-bold pointer-events-none"></span>
        </div>
        <div className="mt-4 flex flex-col justify-start items-start w-full">
          {renderRouterItems}
        </div>
      </div>
      <div className="w-full h-full bg-white dark:bg-zinc-800">
        <Outlet />
      </div>
    </div>
  );
};
