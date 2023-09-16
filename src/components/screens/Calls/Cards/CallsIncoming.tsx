import { Empty, Skeleton } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { UiButton } from 'src/components/ui';
import { useActions, useSelectors } from 'src/hooks';
import { useGetNewCallsQuery } from 'src/services';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsIncoming: React.FC = () => {
  const { id } = useSelectors();
  const { setId, setBrigadeLocation } = useActions();
  const { data: newCalls, isSuccess } = useGetNewCallsQuery();
  return (
    <div className={clsx(s.card, s.incoming)}>
      <ul className={s.incomingItems}>
        {isSuccess ? (
          newCalls.data.map((el) => (
            <li key={el.id} className={clsx(s.item, id === el.id && s.active)}>
              <div className={s.info}>
                <div className={s.text}>
                  <span>Новая</span>
                  <span>{`№${el.id}`}</span>
                </div>
                <div className={s.text}>
                  <span>Время</span>
                  <span>{el.created_at}</span>
                </div>
                <div className={s.text}>
                  <span>Адрес</span>
                  <span>{`${el.address.full_address || '-'}`}</span>
                </div>
              </div>
              <div className={s.info}>
                <div className={s.text}>
                  <span>Причины</span>
                  <span>{el.call_cause_name}</span>
                </div>
                <UiButton
                  onClick={() => {
                    setId(el.id);
                    setBrigadeLocation([el.address.lat, el.address.lng]);
                  }}
                  shape="round"
                  color={el.id === id ? '#ffad31' : ''}
                >
                  Направлять бригаду
                </UiButton>
              </div>
            </li>
          ))
        ) : (
          <Skeleton />
        )}
        {isSuccess && !newCalls?.data.length && (
          <Empty className={s.empty} description="Нет входящих" />
        )}
      </ul>
      <CallsMap />
    </div>
  );
};

export { CallsIncoming };
