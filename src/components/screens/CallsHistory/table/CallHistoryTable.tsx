import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteCallMutation, useGetCallsQuery } from 'src/services';
import { TCallItem } from 'src/services/call/call.types';

const CallHistoryTable: React.FC = () => {
  const navigate = useNavigate();

  const { data: newCalls, isLoading } = useGetCallsQuery();
  const { mutate: deleteCall } = useDeleteCallMutation();

  const { setParamsItemForm, setBrigadeLocation2 } = useActions();

  const onViewPatient = (id: number) => navigate(`/calls/${id}`);
  const onEditCall = (id: number) => {
    const findContent = newCalls?.data.find((el) => el.id === id);
    if (findContent) {
      setParamsItemForm(findContent);
      setBrigadeLocation2([findContent.address.lat, findContent.address.lng]);
    }
  };
  const onDeleteCall = (id: number) => deleteCall(id);

  const columns: ColumnsType<TCallItem> = [
    {
      title: 'Бригада',
      dataIndex: 'brigade_name',
      key: 'brigade_name',
      render: (value) => value || '-',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
      render: (_, r) => r.address.full_address || '-',
    },
    {
      title: 'Номер телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: (value) => value || '-',
    },
    {
      title: 'Причина',
      dataIndex: 'call_cause_name',
      key: 'call_cause_name',
      render: (value) => value || '-',
    },
    {
      title: 'Статус',
      dataIndex: 'call_status_name',
      key: 'call_status_name',
      render: (value) => value || '-',
    },
    {
      title: 'Создано',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'Комментария',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiButton icon={<AiFillEye />} onClick={() => onViewPatient(r.id)} />
          <UiButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditCall(r.id)} />
          <CustomPopConfirm title={r.call_cause_name} onConfirm={() => onDeleteCall(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={newCalls?.data} columns={columns} loading={isLoading} />;
};

export { CallHistoryTable };
