import { HomeSVG } from '@components/SVGComponents/Home';
import { SettingSVG } from '@components/SVGComponents/Setting';

const AppRouterConfig = {
  home: {
    url: '/',
    name: 'Home',
    icon: HomeSVG,
  },
  setting: {
    url: '/setting',
    name: 'Setting',
    icon: SettingSVG,
  },
};
export { AppRouterConfig };
