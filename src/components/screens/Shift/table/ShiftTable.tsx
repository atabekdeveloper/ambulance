/* eslint-disable implicit-arrow-linebreak */
import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteShiftMutation, useGetShiftsQuery } from 'src/services';
import { TShiftItem } from 'src/services/shift/shift.types';

const ShiftTable: React.FC = () => {
  const { data: shifts, isLoading } = useGetShiftsQuery();
  const { mutate: deleteShift } = useDeleteShiftMutation();

  const { setParamsItemForm } = useActions();

  const onDeleteShift = (id: number) => deleteShift(id);
  const onEditShift = (id: number) => {
    const findContent = shifts?.data.find((el) => el.id === id);
    if (findContent) setParamsItemForm({ ...findContent });
  };

  const columns: ColumnsType<TShiftItem> = [
    {
      title: 'Бригада',
      dataIndex: 'brigade_name',
      key: 'brigade_name',
      render: (value) => value || '-',
    },
    {
      title: 'Тип',
      dataIndex: 'brigade_type',
      key: 'brigade_type',
      render: (value) => value || '-',
    },
    {
      title: 'Автомобиль',
      dataIndex: 'brigade_vehicle_number',
      key: 'brigade_vehicle_number',
      render: (value) => value || '-',
    },
    {
      title: 'Сумка',
      dataIndex: 'sumka',
      key: 'sumka',
      render: (value) => value || '-',
    },
    {
      title: 'Начало времени',
      dataIndex: 'date_from',
      key: 'date_from',
      render: (_, r) => `${r.date_from} ~ ${r.time_from.substring(0, 5)}`,
    },
    {
      title: 'Конец времени',
      dataIndex: 'date_to',
      key: 'date_to',
      render: (_, r) => `${r.date_to} ~ ${r.time_to.substring(0, 5)}`,
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditShift(r.id)} />
          <CustomPopConfirm title={r.brigade_name} onConfirm={() => onDeleteShift(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={shifts?.data} columns={columns} loading={isLoading} />;
};

export { ShiftTable };
