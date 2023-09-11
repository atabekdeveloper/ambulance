import { Popconfirm, PopconfirmProps } from 'antd';
import React from 'react';

const CustomPopConfirm: React.FC<PopconfirmProps> = (_props) => (
  <Popconfirm
    {..._props}
    cancelText="Yaq"
    okText="Tastıyıqlayman"
    description="Ámeldi tasıtıyıqlaw arqalı shaqırıwdı biykarlaǵan bolasız"
    placement="leftTop"
  />
);

export { CustomPopConfirm };
