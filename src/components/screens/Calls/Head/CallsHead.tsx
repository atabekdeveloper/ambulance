/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button } from 'antd';
import clsx from 'clsx';
import React from 'react';

import { TCallType } from '../calls.types';

import s from './head.module.scss';

const CallsHead: React.FC<TCallType> = ({ callType, setCallType }) => (
  <div className={s.head}>
    <ul className={s.items}>
      <li
        className={clsx(s.item, callType === 'incoming' && s.active)}
        onClick={() => setCallType('incoming')}
      >
        <p>Входящий</p>
        <h3>7</h3>
      </li>
      <li
        className={clsx(s.item, callType === 'processed' && s.active)}
        onClick={() => setCallType('processed')}
      >
        <p>Обработанные</p>
        <h3>14</h3>
      </li>
      <li
        className={clsx(s.item, callType === 'brigade' && s.active)}
        onClick={() => setCallType('brigade')}
      >
        <p>Бригады</p>
        <h3>33</h3>
      </li>
    </ul>
    <Button type="primary">Добавить</Button>
  </div>
);

export { CallsHead };
