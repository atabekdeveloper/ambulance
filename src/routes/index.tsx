/* eslint-disable object-curly-newline */
import { Brigade, Call, Home, Users } from 'src/components/screens';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/calls', element: <Call /> },
  { path: '/users', element: <Users /> },
  { path: '/brigade', element: <Brigade /> },
];
export { routes };
