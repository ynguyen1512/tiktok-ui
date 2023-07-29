import Home from '~/pages/Home';
import Following from '~/pages/Following';

// Without Login
const publicRoutes = [
    {path: '/', component: Home}
    {path: '/following', component: Following}
];

// Have to login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
