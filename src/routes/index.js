import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';
import Explore from '../pages/Explore';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/onboarding/:key', component: Onboarding, layout: null },
    { path: '/onboarding', component: Onboarding, layout: null },
    { path: '/explore', component: Explore, layout: null },
];

// private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
