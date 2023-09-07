import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { MdClear } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { useDeleteBrigadeMutation, useGetBrigadesQuery } from 'src/services';
import { TBrigadeItem } from 'src/services/brigade/brigade.types';

const BrigadeTable: React.FC = () => {
  const { data: brigades, isLoading } = useGetBrigadesQuery();
  const { mutate: deleteBrigade } = useDeleteBrigadeMutation();

  const onDeleteBrigade = (id: number) => deleteBrigade(id);

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
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <CustomPopConfirm title={r.name} onConfirm={() => onDeleteBrigade(r.id)}>
            <Button icon={<MdClear />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={brigades?.data} columns={columns} loading={isLoading} />;
};

export { BrigadeTable };
