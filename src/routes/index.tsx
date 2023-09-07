import { Call, Home, Users } from 'src/components/screens';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/calls', element: <Call /> },
  { path: '/users', element: <Users /> },
];
export { routes };
