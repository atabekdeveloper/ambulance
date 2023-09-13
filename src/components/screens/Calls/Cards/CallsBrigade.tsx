/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Empty, Skeleton } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useActions } from 'src/hooks';
import { useGetRouterBrigadesQuery } from 'src/services';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsBrigade: React.FC = () => {
  const { data: brigades, isSuccess } = useGetRouterBrigadesQuery();
  const { setBrigadeLocation } = useActions();
  return (
    <div className={clsx(s.card, s.brigade)}>
      <ul className={s.brigadeItems}>
        {isSuccess ? (
          brigades.data.map((el) => (
            <li
              key={el.id}
              className={clsx(s.item)}
              onClick={() => setBrigadeLocation([el.location.lat, el.location.lng])}
            >
              <div className={s.top}>
                <div className={s.head}>
                  <h3>{el.name}</h3>
                  <p>{el.user_phone}</p>
                </div>
                <ul className={s.items}>
                  {el.statuses.map((status) => (
                    <li
                      key={status.id}
                      className={clsx(
                        s.status,
                        status.id === 1 && s.free,
                        status.id === 2 && s.busy,
                        status.id === 3 && s.lunch,
                      )}
                    >
                      {clsx(
                        status.id === 1 && 'Свободно',
                        status.id === 2 && 'Занят',
                        status.id === 3 && 'Без обеда',
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.info}>
                <span>Место-ие</span>
                <span>{el.location.place || '-'}</span>
              </div>
              <div className={s.info}>
                <span>Врач</span>
                <span>{el.medic_name}</span>
              </div>
            </li>
          ))
        ) : (
          <Skeleton />
        )}
        {isSuccess && !brigades?.data.length && (
          <Empty className={s.empty} description="Нет бригадов" />
        )}
      </ul>
      <CallsMap />
    </div>
  );
};

export { CallsBrigade };
