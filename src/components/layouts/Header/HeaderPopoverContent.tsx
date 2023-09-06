import { Button } from 'antd';
import React from 'react';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { useActions } from 'src/hooks';

import s from './header.module.scss';

const HeaderPopoverContent: React.FC = () => {
  const { logOut } = useActions();
  return (
    <div className={s.popover}>
      <div className={s.item}>
        <AiOutlineUser />
        <b>Anvar</b>
      </div>
      <div className={s.item}>
        <AiOutlinePhone />
        <b>+99899288288</b>
      </div>
      <Button
        danger
        className="center"
        icon={<BiLogOutCircle />}
        onClick={() => logOut()}
        type="primary"
      >
        Выйти
      </Button>
    </div>
  );
};

export { HeaderPopoverContent };
