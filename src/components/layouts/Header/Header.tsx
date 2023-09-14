import React from 'react';
import Img from 'react-cool-img';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/images/logo.svg';
import { useActions, useResponsive } from 'src/hooks';

import { HeaderPopover } from './HeaderPopover';

import s from './header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { toggleMenuCollapsed, toggleDrawer } = useActions();
  const { isMobile } = useResponsive(900);

  const homeNavigate = () => navigate('/incoming');
  const onToggleDrawer = () => {
    if (isMobile) toggleDrawer();
    else toggleMenuCollapsed();
  };

  return (
    <header className={s.header}>
      <div className={s.logo}>
        {!isMobile && (
          <button onClick={homeNavigate}>
            <Img className={s.img} src={logo} alt="Logo" />
          </button>
        )}
        <button className={s.hamburger} onClick={onToggleDrawer}>
          <RxHamburgerMenu className={s.icon} />
        </button>
      </div>
      <div className={s.right}>
        <HeaderPopover />
      </div>
    </header>
  );
};

export { Header };
