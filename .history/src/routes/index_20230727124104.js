import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

// Without Login to use this route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];

// Have to login to use this route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
