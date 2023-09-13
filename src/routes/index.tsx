import {
  Brigade,
  Call,
  CallsHistory,
  Dispatcher,
  Home,
  Patient,
  Users,
} from 'src/components/screens';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/incoming', element: <Call /> },
  { path: '/calls', element: <CallsHistory /> },
  { path: '/calls/:id', element: <Patient /> },
  { path: '/users', element: <Users /> },
  { path: '/brigade', element: <Brigade /> },
  { path: '/dispatcher', element: <Dispatcher /> },
];
export { routes };
