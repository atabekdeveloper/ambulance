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
                  <span>Jańa</span>
                  <span>{`№${el.call_cause_id}`}</span>
                </div>
                <div className={s.text}>
                  <span>Qabıllanǵan waqtı</span>
                  <span>{el.created_at}</span>
                </div>
                <div className={s.text}>
                  <span>Mánzil</span>
                  <span>{`${el.address.fullAddress || '-'}`}</span>
                </div>
              </div>
              <div className={s.info}>
                <div className={s.text}>
                  <span>Sebepleri</span>
                  <span>{el.call_cause_name}</span>
                </div>
                <div className={s.text}>
                  <span>Tez járdem mashinası biriktirilgen</span>
                  <span>{`${el.birgade_name || '-'}`}</span>
                </div>
              </div>
              <div className={s.btn}>
                <CustomPopConfirm
                  title="Shaqırıwdı biykarlaw"
                  onConfirm={() => deleteCall({ callId: el.id, brigadeId: 2 })}
                  placement="top"
                >
                  <Button type="default" danger shape="round">
                    Biykarlaw
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
