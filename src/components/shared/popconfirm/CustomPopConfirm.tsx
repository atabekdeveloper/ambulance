import { Popconfirm, PopconfirmProps } from 'antd';
import React from 'react';

const CustomPopConfirm: React.FC<PopconfirmProps> = (_props) => {
  const { title } = _props;
  return (
    <Popconfirm
      {..._props}
      cancelText="Отмена"
      okText="Да"
      description={`Вы уверены, что хотите удалить ${title}`}
      placement="leftTop"
    />
  );
};

export { CustomPopConfirm };
