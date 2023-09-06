import logo from 'src/assets/images/logo/logo.png';
import activePhone from 'src/assets/images/navbar/active-phone.svg';
import activeUser from 'src/assets/images/navbar/active-user.svg';
import phone from 'src/assets/images/navbar/phone.svg';
import user from 'src/assets/images/navbar/user.svg';

export const routes = [
  { key: '/', activeIcon: logo, icon: logo },
  { key: '/', activeIcon: activePhone, icon: phone },
  { key: '/users', activeIcon: activeUser, icon: user },
];
