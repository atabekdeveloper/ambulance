import React from 'react';
import { Head } from 'src/components/shared';

import { BrigadeTable } from './table/BrigadeTable';

const Brigade: React.FC = () => (
  <>
    <Head title="Бригады" />
    <BrigadeTable />
  </>
);

export { Brigade };
