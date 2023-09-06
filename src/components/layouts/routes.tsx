import { MenuProps } from 'antd';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { PiUsersBold } from 'react-icons/pi';

export const routes: MenuProps['items'] = [
  {
    key: '/',
    label: 'Звонки',
    icon: <BsFillTelephoneInboundFill />,
  },
  {
    key: '/users',
    label: 'Наряд',
    icon: <PiUsersBold />,
  },
];
