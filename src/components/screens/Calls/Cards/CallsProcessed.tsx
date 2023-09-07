import clsx from 'clsx';
import React from 'react';

import s from './cards.module.scss';

const CallsProcessed: React.FC = () => (
  <div className={clsx(s.card, s.processed)}>CallsProcessed</div>
);

export { CallsProcessed };
