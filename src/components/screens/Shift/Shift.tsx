import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { ShiftForm } from './form/ShiftForm';
import { ShiftTable } from './table/ShiftTable';

const Shift: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Смены"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <ShiftForm />
      <ShiftTable />
    </>
  );
};

export { Shift };
