import { Form, Input, Select } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditUserMutation, useGetRolesQuery, usePostUserMutation } from 'src/services';
import { TUserChange } from 'src/services/user/user.types';
import { formatStringJoin, formMessage } from 'src/utils';

const UsersForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const { data: roles } = useGetRolesQuery();
  const { mutate: addUser, isLoading: addLoading } = usePostUserMutation();
  const { mutate: editUser, isLoading: editLoading } = useEditUserMutation();

  const onFinish = (values: TUserChange) => {
    if (paramsItem) {
      editUser({ ...values, phone: formatStringJoin(values.phone), id: paramsItem.id });
    } else addUser({ ...values, phone: formatStringJoin(values.phone) });
  };
  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue({ ...paramsItem, group: paramsItem.group?.id });
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form name="User" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="first_name"
          label="Имя"
          rules={[{ required: false, message: formMessage('Имя') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Фамилия"
          rules={[{ required: false, message: formMessage('Фамилия') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[{ required: false, message: formMessage('Телефон') }]}
        >
          <MaskedInput inputMode="tel" mask="+{998} 00 000 00 00" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[{ required: false, message: formMessage('Пароль') }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="role_id"
          label="Роль"
          rules={[{ required: false, message: formMessage('Роль') }]}
        >
          <Select options={roles?.data.map((el) => ({ value: el.id, label: el.name }))} />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { UsersForm };
