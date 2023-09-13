import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

const Patient: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Пациенты"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <div />
    </>
  );
};

export { Patient };
