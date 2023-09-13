import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { DispatcherForm } from './form/DispatcherForm';
import { DispatcherTable } from './table/DispatcherTable';

const Dispatcher: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Диспетчер"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <DispatcherForm />
      <DispatcherTable />
    </>
  );
};

export { Dispatcher };
