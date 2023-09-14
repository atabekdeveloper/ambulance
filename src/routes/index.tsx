import {
  Brigade,
  Call,
  CallsHistory,
  Dispatcher,
  NotFound,
  Patient,
  Users,
} from 'src/components/screens';

const routes = [
  { path: '/incoming', element: <Call /> },
  { path: '/calls', element: <CallsHistory /> },
  { path: '/calls/:callId', element: <Patient /> },
  { path: '/users', element: <Users /> },
  { path: '/brigade', element: <Brigade /> },
  { path: '/dispatcher', element: <Dispatcher /> },
  { path: '*', element: <NotFound /> },
];
export { routes };
