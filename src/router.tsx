import { AppRouterConfig } from '@configs/router';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { AboutScreen } from '@screens/AboutScreen';
import App from '@screens/MainScreen';
import { Route, Routes } from 'react-router-dom';

const AppRouter: IComponent = () => {
  return (
    <Routes>
      <Route path={AppRouterConfig.home.url} element={<SidebarLayout />}>
        <Route index element={<App />} />
        <Route path={AppRouterConfig.about.url} element={<AboutScreen />} />
      </Route>
    </Routes>
  );
};

export { AppRouter };
