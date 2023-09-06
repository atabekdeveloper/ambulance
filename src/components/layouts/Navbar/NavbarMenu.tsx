/* eslint-disable object-curly-newline */
import { Menu, MenuProps } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActions, useResponsive, useSelectors } from 'src/hooks';

import { TNavbarMenu } from './navbar.types';

const NavbarMenu: React.FC<TNavbarMenu> = ({ items }) => {
  const { isCollapsed } = useSelectors();
  const { toggleDrawer, setParamsItem, setId } = useActions();
  const { isMobile } = useResponsive(900);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onSelectRoute: MenuProps['onClick'] = (e) => {
    if (isMobile) toggleDrawer();
    navigate(e.key);
    setParamsItem(null);
    setId(0);
  };
  return (
    <Menu
      mode="inline"
      inlineCollapsed={isMobile ? false : isCollapsed}
      selectedKeys={[pathname]}
      onClick={onSelectRoute}
      items={items}
    />
  );
};

export { NavbarMenu };
