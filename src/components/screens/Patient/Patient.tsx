import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { PatientForm } from './form/PatientForm';
import { PatientTable } from './table/PatientTable';

const Patient: React.FC = () => {
  const navigate = useNavigate();
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Пациенты"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
          <Button type="default" onClick={() => navigate('/calls')}>
            Назад
          </Button>,
        ]}
      />
      <PatientForm />
      <PatientTable />
    </>
  );
};

export { Patient };
