import { MenuProps } from 'antd';
import { BiSolidContact } from 'react-icons/bi';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { LiaAmbulanceSolid } from 'react-icons/lia';
import { PiUsersBold } from 'react-icons/pi';
import { RiUserVoiceLine } from 'react-icons/ri';

export const routes: MenuProps['items'] = [
  {
    key: '/incoming',
    label: 'Входящий',
    icon: <BsFillTelephoneInboundFill />,
  },
  {
    key: '/brigade',
    label: 'Бригады',
    icon: <LiaAmbulanceSolid />,
  },
  {
    key: '/dispatcher',
    label: 'Диспетчер',
    icon: <RiUserVoiceLine />,
  },
  {
    key: '/calls',
    label: 'Вызовы',
    icon: <BiSolidContact />,
  },
  {
    key: '/users',
    label: 'Пользователи',
    icon: <PiUsersBold />,
  },
];
