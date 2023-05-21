import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';
import Explore from '../pages/Explore';
import Editor from '../pages/Editor';
import LayoutLooka from '../layouts/LayoutLooka';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/onboarding/:key', component: Onboarding, layout: null },
    { path: '/onboarding', component: Onboarding, layout: null },
    { path: '/explore', component: Explore, layout: LayoutLooka },
    { path: '/editor/:key', component: Editor, layout: LayoutLooka },
    { path: '/editor', component: Editor, layout: null },
];

// private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
