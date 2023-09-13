import { Button, Empty, Skeleton } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { CustomPopConfirm } from 'src/components/shared';
import { useDeleteCallBrigadeMutation, useGetReprocessedCallsQuery } from 'src/services';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsProcessed: React.FC = () => {
  const { data: reprocessedCalls, isSuccess } = useGetReprocessedCallsQuery();
  const { mutate: deleteCall } = useDeleteCallBrigadeMutation();
  return (
    <div className={clsx(s.card, s.processed)}>
      <ul className={s.processedItems}>
        {isSuccess ? (
          reprocessedCalls.data.map((el) => (
            <li key={el.id} className={clsx(s.item)}>
              <div className={s.info}>
                <div className={s.text}>
                  <span>Обработанный</span>
                  <span>{`№${el.call_cause_id}`}</span>
                </div>
                <div className={s.text}>
                  <span>Время</span>
                  <span>{el.created_at}</span>
                </div>
                <div className={s.text}>
                  <span>Адрес</span>
                  <span>{`${el.address.fullAddress || '-'}`}</span>
                </div>
              </div>
              <div className={s.info}>
                <div className={s.text}>
                  <span>Причины</span>
                  <span>{el.call_cause_name}</span>
                </div>
                <div className={s.text}>
                  <span>Прикреплена машина скорой помощи</span>
                  <span>{`${el.birgade_name || '-'}`}</span>
                </div>
              </div>
              <div className={s.btn}>
                <CustomPopConfirm
                  title="Отменить вызов"
                  onConfirm={() => deleteCall({ callId: el.id, brigadeId: el.brigade_id })}
                  placement="top"
                >
                  <Button type="default" danger shape="round">
                    Отменить
                  </Button>
                </CustomPopConfirm>
              </div>
            </li>
          ))
        ) : (
          <Skeleton />
        )}
        {isSuccess && !reprocessedCalls?.data.length && (
          <Empty className={s.empty} description="Нет обработанных" />
        )}
      </ul>
      <CallsMap />
    </div>
  );
};

export { CallsProcessed };
