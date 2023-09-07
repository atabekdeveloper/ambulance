/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetRoles } from './role.services';

const useGetRolesQuery = () =>
  useQuery({
    queryFn: () => fetchGetRoles(),
    queryKey: ['role'],
    onError: (err: Error) => message.error(err.message),
  });

export { useGetRolesQuery };

// const useReactQuerySubscription = () => {
//   const queryClient = useQueryClient();
//   React.useEffect(() => {
//     const websocket = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/');
//     websocket.onopen = () => {
//       console.log('connected');
//     };
//     websocket.onmessage = (event) => {
//       const { data } = event;
//       const queryKey = { id: 7, name: data };
//       queryClient.setQueryData(['role'], (oldData: any) => {
//         const data = [...oldData.data, queryKey];
//         const result = data.reduce((unique, o) => {
//           if (!unique.some((obj: any) => obj.id === o.id)) {
//             unique.push(o);
//           }
//           return unique;
//         }, []);
//         return { data: result };
//       });
//     };

//     return () => {
//       websocket.close();
//     };
//   }, [queryClient]);
// };
