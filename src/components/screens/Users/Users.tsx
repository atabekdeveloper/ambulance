import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { UsersForm } from './form/UsersForm';
import { UsersTable } from './table/UsersTable';

const Users: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Пользователи"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <UsersForm />
      <UsersTable />
    </>
  );
};

export { Users };
