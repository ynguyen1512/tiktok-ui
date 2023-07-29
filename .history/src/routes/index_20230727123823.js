import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

// Without Login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];

// Have to login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
