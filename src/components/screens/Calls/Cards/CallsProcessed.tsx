import { Button, Empty } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { CustomPopConfirm } from 'src/components/shared';
import { useDeleteCallMutation, useGetReprocessedCallsQuery } from 'src/services';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsProcessed: React.FC = () => {
  const { data: reprocessedCalls } = useGetReprocessedCallsQuery();
  const { mutate: deleteCall } = useDeleteCallMutation();
  return (
    <div className={clsx(s.card, s.processed)}>
      <ul className={s.processedItems}>
        {reprocessedCalls?.data.map((el) => (
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
                onConfirm={() => deleteCall(el.id)}
                placement="top"
              >
                <Button type="default" danger shape="round">
                  Biykarlaw
                </Button>
              </CustomPopConfirm>
            </div>
          </li>
        ))}
        {!reprocessedCalls?.data.length && (
          <Empty className={s.empty} description="Нет обработанных" />
        )}
      </ul>
      <CallsMap />
    </div>
  );
};

export { CallsProcessed };
