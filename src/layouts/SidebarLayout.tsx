import { cx } from '@utils/tools';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const SidebarLayout: IComponent = () => {
  const location = useLocation();
  const navigator = useNavigate();
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-80 h-full p-2">
        <h5 className="text-black dark:text-white font-bold text-sm">SIDEBAR</h5>
        <div className="p-2 flex flex-col justify-start items-start">
          <span
            onClick={() => navigator('/')}
            className={cx(
              {
                'text-blue-600': location.pathname === '/',
              },
              'transition-all cursor-pointer hover:opacity-90 active:scale-90'
            )}>
            HOME
          </span>
          <span
            onClick={() => navigator('/about')}
            className={cx(
              {
                'text-blue-600': location.pathname === '/about',
              },
              'transition-all cursor-pointer hover:opacity-90 active:scale-90'
            )}>
            ABOUT
          </span>
        </div>
      </div>
      <div className="w-full h-full bg-zinc-800">
        <Outlet />
      </div>
    </div>
  );
};
