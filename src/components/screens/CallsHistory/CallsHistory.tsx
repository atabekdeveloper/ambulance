import React from 'react';
import { Head } from 'src/components/shared';

import { CallHistoryForm } from './form/CallHistoryForm';
import { CallHistoryTable } from './table/CallHistoryTable';

const CallsHistory: React.FC = () => (
  <>
    <Head title="Вызовы" />
    <CallHistoryForm />
    <CallHistoryTable />
  </>
);

export { CallsHistory };
