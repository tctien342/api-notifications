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
      const IconSVG = route.icon;
      return (
        <div
          key={route.name}
          onClick={() => navigator(route.url)}
          style={{ paddingBottom: '100%' }}
          className={cx(
            'w-full transition-all relative mb-2 rounded-md cursor-pointer hover:bg-white active:scale-90 text-black dark:text-white hover:text-black no-select',
            {
              'bg-zinc-600 dark:bg-white bg-opacity-20 dark:bg-opacity-10':
                location.pathname === route.url,
            }
          )}>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col">
            <span className="text-3xl font-bold">
              <IconSVG />
            </span>
            <span style={{ fontSize: 8 }} className="font-thin mt-1">
              {route.name}
            </span>
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
      <div style={{ width: 70 }} className="h-full px-2 relative flex flex-col pb-4">
        <div className="w-full h-5 flex justify-end items-center">
          <span className="font-bold pointer-events-none"></span>
        </div>
        <div className="mt-4 flex flex-col justify-start items-start w-full flex-auto">
          {renderRouterItems}
        </div>
        <div className="w-full relative" style={{ paddingBottom: '100%' }}>
          {/** EXTRA BUTTON **/}
        </div>
      </div>
      <div className="w-full h-full bg-white dark:bg-zinc-800">
        <Outlet />
      </div>
    </div>
  );
};
