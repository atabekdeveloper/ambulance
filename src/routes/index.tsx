/* eslint-disable object-curly-newline */
import { Brigade, Call, Dispatcher, Home, Users } from 'src/components/screens';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/calls', element: <Call /> },
  { path: '/users', element: <Users /> },
  { path: '/brigade', element: <Brigade /> },
  { path: '/dispatcher', element: <Dispatcher /> },
];
export { routes };
