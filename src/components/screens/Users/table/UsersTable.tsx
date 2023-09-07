import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteUserMutation, useGetUsersQuery } from 'src/services';
import { TUserItem } from 'src/services/user/user.types';

const UsersTable: React.FC = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  const { mutate: deleteUser } = useDeleteUserMutation();

  const { setParamsItemForm } = useActions();

  const onDeleteUser = (id: number) => deleteUser(id);
  const onEditUser = (id: number) => {
    const findUser = users?.data.find((el) => el.id === id);
    setParamsItemForm(findUser);
  };

  const columns: ColumnsType<TUserItem> = [
    {
      title: 'Имя',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Фамилия',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Телефон номер',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Роль',
      dataIndex: 'role_name',
      key: 'role_name',
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditUser(r.id)} />
          <CustomPopConfirm title={r.first_name} onConfirm={() => onDeleteUser(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={users?.data} columns={columns} loading={isLoading} />;
};

export { UsersTable };
