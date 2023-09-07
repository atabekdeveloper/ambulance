import { Button } from 'antd';
import React from 'react';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { useActions } from 'src/hooks';
import { TProfileItem } from 'src/services/profile/profile.types';

import s from './header.module.scss';

const HeaderPopoverContent: React.FC<{ profile?: TProfileItem }> = ({ profile }) => {
  const { logOut } = useActions();
  return (
    <div className={s.popover}>
      <div className={s.item}>
        <AiOutlineUser />
        <b>{profile?.first_name}</b>
      </div>
      <div className={s.item}>
        <AiOutlinePhone />
        <b>{profile?.phone}</b>
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
