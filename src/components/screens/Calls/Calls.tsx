import React from 'react';

import { CallsBrigade } from './Cards/CallsBrigade';
import { CallsIncoming } from './Cards/CallsIncoming';
import { CallsProcessed } from './Cards/CallsProcessed';
import { CallsHead } from './Head/CallsHead';

import s from './calls.module.scss';

const Call: React.FC = () => {
  const [callType, setCallType] = React.useState('incoming');
  return (
    <div className={s.calls}>
      <CallsHead callType={callType} setCallType={setCallType} />
      {callType === 'incoming' && <CallsIncoming />}
      {callType === 'processed' && <CallsProcessed />}
      {callType === 'brigade' && <CallsBrigade />}
    </div>
  );
};

export { Call };
