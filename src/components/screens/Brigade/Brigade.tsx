import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { BrigadeForm } from './form/BrigadeForm';
import { BrigadeTable } from './table/BrigadeTable';

const Brigade: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Бригады"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <BrigadeForm />
      <BrigadeTable />
    </>
  );
};

export { Brigade };
