import { SidebarLayout } from '@layouts/SidebarLayout';
import { TransitionLayout } from '@layouts/TransitionLayout';
import { AboutScreen } from '@screens/AboutScreen';
import App from '@screens/MainScreen';
import { Route, Routes, useLocation } from 'react-router-dom';

const AppRouter: IComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={<App />} />
        <Route path="about" element={<AboutScreen />} />
        {
          // <Route path="teams" element={<Teams />}>
          //   <Route path=":teamId" element={<Team />} />
          //   <Route path="new" element={<NewTeamForm />} />
          //   <Route index element={<LeagueStandings />} />
          // </Route>
        }
      </Route>
    </Routes>
  );
};

export { AppRouter };
