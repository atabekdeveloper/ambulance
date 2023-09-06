import { Avatar, Popover } from 'antd';
import React from 'react';

import { HeaderPopoverContent } from './HeaderPopoverContent';

import s from './header.module.scss';

const HeaderPopover: React.FC = () => (
  <Popover placement="bottomRight" trigger="click" content={<HeaderPopoverContent />}>
    <Avatar className={s.user}>A</Avatar>
  </Popover>
);

export { HeaderPopover };
