import { Space } from 'antd';
import React from 'react';

import { THead } from './head.types';

import s from './head.module.scss';

const Head: React.FC<THead> = ({ title, childs }) => (
  <div className={s.head}>
    <h3>{title}</h3>
    <Space>
      {childs?.map((el, i) => (
        <div key={i}>{el}</div>
      ))}
    </Space>
  </div>
);

export { Head };
