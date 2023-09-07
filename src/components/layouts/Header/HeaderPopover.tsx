import { Avatar, Popover } from 'antd';
import React from 'react';
import { useGetProfileQuery } from 'src/services';

import { HeaderPopoverContent } from './HeaderPopoverContent';

import s from './header.module.scss';

const HeaderPopover: React.FC = () => {
  const { data: profile } = useGetProfileQuery();
  return (
    <Popover
      placement="bottomRight"
      trigger="click"
      content={<HeaderPopoverContent profile={profile?.data} />}
    >
      <Avatar className={s.user}>{profile?.data.first_name.substring(0, 1)}</Avatar>
    </Popover>
  );
};

export { HeaderPopover };
