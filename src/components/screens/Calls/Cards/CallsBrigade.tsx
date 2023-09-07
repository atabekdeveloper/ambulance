import clsx from 'clsx';
import React from 'react';
import { incomeItems } from 'src/data';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsBrigade: React.FC = () => (
  <div className={clsx(s.card, s.brigade)}>
    <ul className={s.brigadeItems}>
      {incomeItems.map((el) => (
        <li key={el.id} className={clsx(s.item)}>
          <div className={s.top}>
            <div className={s.info}>
              <h3>ОПВ01</h3>
              <p>901234567</p>
            </div>
            <ul className={s.items}>
              <li>Bánt</li>
            </ul>
          </div>
          <div className={s.info}>
            <span>Ornı</span>
            <span>Qaraqalpaqstan kóshesi</span>
          </div>
          <div className={s.info}>
            <span>Shıpaker</span>
            <span>Yakubova R.</span>
          </div>
        </li>
      ))}
    </ul>
    <CallsMap />
  </div>
);

export { CallsBrigade };
