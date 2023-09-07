import clsx from 'clsx';
import React from 'react';
import { incomeItems } from 'src/data';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsProcessed: React.FC = () => (
  <div className={clsx(s.card, s.processed)}>
    <ul className={s.processedItems}>
      {incomeItems.map((el) => (
        <li key={el.id} className={clsx(s.item)}>
          <div className={s.info}>
            <div className={s.text}>
              <span>Jańa</span>
              <span>№324</span>
            </div>
            <div className={s.text}>
              <span>Qabıllanǵan waqtı</span>
              <span>21:49, 21.08</span>
            </div>
            <div className={s.text}>
              <span>Mánzil</span>
              <span>Taslaq elatı, Omar Hayyam, 43-jay</span>
            </div>
          </div>
          <div className={s.info}>
            <div className={s.text}>
              <span>Sebepleri</span>
              <span>Qan basımı kóteriliwi</span>
            </div>
            <div className={s.text}>
              <span>Tez járdem mashinası biriktirilgen</span>
              <span>ОПВ01</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <CallsMap />
  </div>
);

export { CallsProcessed };
