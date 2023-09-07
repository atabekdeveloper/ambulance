import { MenuProps } from 'antd';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { LiaAmbulanceSolid } from 'react-icons/lia';
import { PiUsersBold } from 'react-icons/pi';

export const routes: MenuProps['items'] = [
  {
    key: '/calls',
    label: 'Вызовы',
    icon: <BsFillTelephoneInboundFill />,
  },
  {
    key: '/brigade',
    label: 'Бригады',
    icon: <LiaAmbulanceSolid />,
  },
  {
    key: '/users',
    label: 'Пользователи',
    icon: <PiUsersBold />,
  },
];
