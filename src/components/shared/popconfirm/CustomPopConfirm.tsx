import { Popconfirm, PopconfirmProps } from 'antd';
import React from 'react';

const CustomPopConfirm: React.FC<PopconfirmProps> = (_props) => (
  <Popconfirm {..._props} cancelText="Нет" okText="Да" placement="leftTop" />
);

export { CustomPopConfirm };
