import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteBrigadeMutation, useGetBrigadesQuery } from 'src/services';
import { TBrigadeItem } from 'src/services/brigade/brigade.types';

const BrigadeTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: brigades, isLoading } = useGetBrigadesQuery();
  const { mutate: deleteBrigade } = useDeleteBrigadeMutation();

  const onDeleteBrigade = (id: number) => deleteBrigade(id);
  const onEditBrigade = (id: number) => {
    const findItem = brigades?.data.find((brigade) => brigade.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TBrigadeItem> = [
    {
      title: 'Бригада',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Сумка',
      dataIndex: 'sumka',
      key: 'sumka',
    },
    {
      title: 'Автомобиль',
      dataIndex: 'vehicle_number',
      key: 'vehicle_number',
    },
    {
      title: 'Имя врача',
      dataIndex: 'medic_name',
      key: 'medic_name',
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditBrigade(r.id)} />
          <CustomPopConfirm title={r.name} onConfirm={() => onDeleteBrigade(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={brigades?.data} columns={columns} loading={isLoading} />;
};

export { BrigadeTable };
