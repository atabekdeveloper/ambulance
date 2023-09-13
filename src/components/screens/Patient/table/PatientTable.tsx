import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteCallPatientMutation, useGetCallPatientsQuery } from 'src/services';
import { TCallPatientItem } from 'src/services/call/patient/call-patient.types';

const PatientTable: React.FC = () => {
  const { id } = useParams();
  const { data: callPatients, isLoading } = useGetCallPatientsQuery(Number(id));
  const { mutate: deletePatient } = useDeleteCallPatientMutation();

  const { setParamsItemForm } = useActions();

  const onDeletePatient = (id: number) => deletePatient(id);
  const onEditPatient = (id: number) => {
    const findContent = callPatients?.data.find((el) => el.id === id);
    if (findContent) setParamsItemForm(findContent);
  };

  const columns: ColumnsType<TCallPatientItem> = [
    {
      title: 'Имя',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (value) => value || '-',
    },
    {
      title: 'Фамилия',
      dataIndex: 'last_name',
      key: 'last_name',
      render: (value) => value || '-',
    },
    {
      title: 'Имя (отца)',
      dataIndex: 'patronymic',
      key: 'patronymic',
      render: (value) => value || '-',
    },
    {
      title: 'Дата рождения',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (value) => value || '-',
    },
    {
      title: 'Пол',
      dataIndex: 'gender',
      key: 'gender',
      render: (value) => (value === 'male' ? 'Мужчина' : 'Женщина'),
    },
    {
      title: 'Описания',
      dataIndex: 'description',
      key: 'description',
      render: (value) => value || '-',
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditPatient(r.id)} />
          <CustomPopConfirm title={r.first_name} onConfirm={() => onDeletePatient(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={callPatients?.data} columns={columns} loading={isLoading} />;
};

export { PatientTable };
