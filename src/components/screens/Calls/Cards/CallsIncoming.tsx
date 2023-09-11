import { Empty, Skeleton, Space } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { UiButton } from 'src/components/ui';
import { useActions, useSelectors } from 'src/hooks';
import { useGetNewCallsQuery } from 'src/services';

import { CallsMap } from '../Map/CallsMap';

import s from './cards.module.scss';

const CallsIncoming: React.FC = () => {
  const { id } = useSelectors();
  const { setId, setParamsItemForm, setBrigadeLocation2 } = useActions();
  const { data: newCalls, isSuccess } = useGetNewCallsQuery();
  const onEditIncomingCall = (id: number) => {
    const findContent = newCalls?.data.find((el) => el.id === id);
    setParamsItemForm(findContent);
  };
  return (
    <div className={clsx(s.card, s.incoming)}>
      <ul className={s.incomingItems}>
        {isSuccess ? (
          newCalls.data.map((el) => (
            <li key={el.id} className={clsx(s.item, id === el.id && s.active)}>
              <div className={s.info}>
                <div className={s.text}>
                  <span>Jańa</span>
                  <span>{`№${el.id}`}</span>
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
                <Space>
                  <UiButton
                    onClick={() => {
                      setId(el.id);
                      setBrigadeLocation2([55.751574, 37.573856]);
                    }}
                    shape="round"
                    color={el.id === id ? '#ffad31' : ''}
                  >
                    Brigada biriktiriw
                  </UiButton>
                  <UiButton
                    icon={<AiFillEdit />}
                    onClick={() => onEditIncomingCall(el.id)}
                    color={el.id === id ? '#ffad31' : ''}
                  />
                </Space>
              </div>
            </li>
          ))
        ) : (
          <Skeleton />
        )}
        {!newCalls?.data.length && <Empty style={{ marginTop: 100 }} />}
      </ul>
      <CallsMap />
    </div>
  );
};

export { CallsIncoming };
