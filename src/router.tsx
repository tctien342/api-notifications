import { AppRouterConfig } from '@configs/router';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { MainScreen } from '@screens/Main';
import { SettingScreen } from '@screens/Setting';
import { Route, Routes } from 'react-router-dom';

const AppRouter: IComponent = () => {
  return (
    <Routes>
      <Route path={AppRouterConfig.home.url} element={<SidebarLayout />}>
        <Route index element={<MainScreen />} />
        <Route path={AppRouterConfig.setting.url} element={<SettingScreen />} />
      </Route>
    </Routes>
  );
};

export { AppRouter };
