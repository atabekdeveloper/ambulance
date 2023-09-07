import clsx from 'clsx';
import React from 'react';
import { UiButton } from 'src/components/ui';
import { incomeItems } from 'src/data';
import { useActions, useSelectors } from 'src/hooks';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsIncoming: React.FC = () => {
  const { id } = useSelectors();
  const { setId } = useActions();
  return (
    <div className={clsx(s.card, s.incoming)}>
      <ul className={s.incomingItems}>
        {incomeItems.map((el) => (
          <li key={el.id} className={clsx(s.item, id === el.id && s.active)}>
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
              <UiButton
                onClick={() => setId(el.id)}
                shape="round"
                color={el.id === id ? '#ffad31' : ''}
              >
                Brigada biriktiriw
              </UiButton>
            </div>
          </li>
        ))}
      </ul>
      <CallsMap />
    </div>
  );
};

export { CallsIncoming };
