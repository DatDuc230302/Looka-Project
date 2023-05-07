import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/onboarding', component: Onboarding, layout: null },
];

// private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
