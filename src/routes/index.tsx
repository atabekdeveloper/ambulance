import {
  Brigade,
  Call,
  CallsHistory,
  Dispatcher,
  NotFound,
  Patient,
  Shift,
  Users,
} from 'src/components/screens';

const routes = [
  { path: '/', element: <Call /> },
  { path: '/calls', element: <CallsHistory /> },
  { path: '/calls/:callId', element: <Patient /> },
  { path: '/users', element: <Users /> },
  { path: '/brigade', element: <Brigade /> },
  { path: '/dispatcher', element: <Dispatcher /> },
  { path: '/shift', element: <Shift /> },
  { path: '*', element: <NotFound /> },
];
export { routes };
