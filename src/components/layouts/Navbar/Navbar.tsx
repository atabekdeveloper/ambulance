/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Drawer } from 'antd';
import React from 'react';
import Img from 'react-cool-img';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/images/logo.svg';
import { useActions, useResponsive, useSelectors } from 'src/hooks';

import { routes } from '../routes';

import { NavbarMenu } from './NavbarMenu';

import s from './navbar.module.scss';

const Navbar: React.FC = () => {
  const [drawerSize, setDrawerSize] = React.useState(240);

  const { isDrawer, isCollapsed } = useSelectors();
  const { isMobile } = useResponsive(900);

  const { toggleDrawer } = useActions();
  const navigate = useNavigate();
  const onCloseDrawer = () => toggleDrawer();

  React.useEffect(() => {
    if (isCollapsed) setDrawerSize(80);
    else setDrawerSize(240);
  }, [isCollapsed]);
  return (
    <Drawer
      className={s.navbar}
      placement="left"
      width={isMobile ? 240 : drawerSize}
      onClose={onCloseDrawer}
      closable={false}
      zIndex={isMobile ? 250 : 150}
      open={isMobile ? !isDrawer : isDrawer}
      mask={isMobile}
    >
      <div className={s.menu}>
        <div className={s.logo} onClick={() => navigate('/incoming')}>
          <Img className={s.img} src={logo} alt="Logo" />
        </div>
        <NavbarMenu items={routes} />
      </div>
    </Drawer>
  );
};

export { Navbar };
