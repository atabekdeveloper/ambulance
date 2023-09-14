import { MenuProps } from 'antd';
import { FiPhoneIncoming } from 'react-icons/fi';
import { LiaAmbulanceSolid } from 'react-icons/lia';
import { LuPhoneCall } from 'react-icons/lu';
import { PiUsersBold } from 'react-icons/pi';
import { RiUserVoiceLine } from 'react-icons/ri';
import { TbReplace } from 'react-icons/tb';

export const routes: MenuProps['items'] = [
  {
    key: '/incoming',
    label: 'Входящий',
    icon: <FiPhoneIncoming />,
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
    icon: <LuPhoneCall />,
  },
  {
    key: '/shift',
    label: 'Смена',
    icon: <TbReplace />,
  },
  {
    key: '/users',
    label: 'Пользователи',
    icon: <PiUsersBold />,
  },
];
