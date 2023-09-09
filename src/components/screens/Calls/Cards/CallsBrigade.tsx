import { Skeleton } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useGetRouterBrigadesQuery } from 'src/services';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsBrigade: React.FC = () => {
  const { data: brigades, isSuccess } = useGetRouterBrigadesQuery();
  return (
    <div className={clsx(s.card, s.brigade)}>
      <ul className={s.brigadeItems}>
        {isSuccess ? (
          brigades.data.map((el) => (
            <li key={el.id} className={clsx(s.item)}>
              <div className={s.top}>
                <div className={s.info}>
                  <h3>{el.name}</h3>
                  <p>{el.user_phone}</p>
                </div>
                <ul className={s.items}>
                  <li>Bánt</li>
                </ul>
              </div>
              <div className={s.info}>
                <span>Ornı</span>
                <span>{el.location.place || '-'}</span>
              </div>
              <div className={s.info}>
                <span>Shıpaker</span>
                <span>{el.user_full_name}</span>
              </div>
            </li>
          ))
        ) : (
          <Skeleton />
        )}
      </ul>
      <CallsMap />
    </div>
  );
};

export { CallsBrigade };
