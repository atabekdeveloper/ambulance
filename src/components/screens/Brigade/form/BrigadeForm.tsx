import { Form, Input, Select } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import {
  useEditBrigadeMutation,
  useGetBrigadeTypesQuery,
  useGetUsersQuery,
  usePostBrigadeMutation,
} from 'src/services';
import { TBrigadeChange } from 'src/services/brigade/brigade.types';
import { formMessage } from 'src/utils';

const BrigadeForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const { mutate: addBrigade, isLoading: addLoading } = usePostBrigadeMutation();
  const { mutate: editBrigade, isLoading: editLoading } = useEditBrigadeMutation();

  const { data: brigadeTypes } = useGetBrigadeTypesQuery();
  const { data: users } = useGetUsersQuery();

  const onFinish = (values: TBrigadeChange) => {
    if (paramsItem) editBrigade({ ...values, id: paramsItem.id });
    else addBrigade(values);
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue(paramsItem);
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form
        name="Brigaade Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="brigade_type_id"
          label="Тип"
          rules={[{ required: true, message: formMessage('Тип') }]}
        >
          <Select options={brigadeTypes?.data.map((el) => ({ value: el.id, label: el.name }))} />
        </Form.Item>
        <Form.Item
          name="user_id"
          label="Пользователь"
          rules={[{ required: true, message: formMessage('Пользователь') }]}
        >
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) => {
              const label = option?.label ?? '';
              return label.toLowerCase().includes(input.toLowerCase());
            }}
            options={users?.data
              .filter((user) => user.role_name === 'brigade')
              .map((el) => ({ value: el.id, label: el.first_name }))}
          />
        </Form.Item>
        <Form.Item
          name="name"
          label="Имя"
          rules={[{ required: true, message: formMessage('Имя') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="vehicle_number"
          label="Номер автомобиля"
          rules={[{ required: true, message: formMessage('Номер автомобиля') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="medic_name"
          label="Имя врача"
          rules={[{ required: true, message: formMessage('Имя врача') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="sumka"
          label="Сумка"
          rules={[{ required: true, message: formMessage('Сумка') }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { BrigadeForm };
