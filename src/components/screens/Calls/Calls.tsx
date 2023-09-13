/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useActions } from 'src/hooks';

import { CallsBrigade } from './Cards/CallsBrigade';
import { CallsIncoming } from './Cards/CallsIncoming';
import { CallsProcessed } from './Cards/CallsProcessed';
import { CallsForm } from './Form/CallsForm';
import { CallsHead } from './Head/CallsHead';
import { CallNotification } from './CallNotification';

import s from './calls.module.scss';

const Call: React.FC = () => {
  const [callType, setCallType] = React.useState('incoming');
  const { setBrigadeLocation, setId } = useActions();
  React.useEffect(() => {
    setBrigadeLocation([]);
    setId(0);
  }, [callType]);
  return (
    <div className={s.calls}>
      <CallNotification />
      <CallsHead callType={callType} setCallType={setCallType} />
      <CallsForm />
      {callType === 'incoming' && <CallsIncoming />}
      {callType === 'processed' && <CallsProcessed />}
      {callType === 'brigade' && <CallsBrigade />}
    </div>
  );
};

export { Call };
