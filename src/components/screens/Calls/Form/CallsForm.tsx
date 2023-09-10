/* eslint-disable object-curly-newline */
import { Form, Input, Select, Space } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useGetCallCausesQuery } from 'src/services';
import { formMessage } from 'src/utils';

import s from './form.module.scss';

const CallsForm: React.FC = () => {
  const [form] = Form.useForm();
  const { data: callCauses } = useGetCallCausesQuery();
  const onFinish = (values: any) => console.log(values);
  return (
    <CustomModal form={form} confirmLoading={false} width={900}>
      <Form name="Calls Form" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
        <div className={s.space}>
          <Form.Item
            name="last_name"
            label="Фамилия"
            rules={[{ required: false, message: formMessage('Фамилия') }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="first_name"
            label="Имя"
            rules={[{ required: false, message: formMessage('Имя') }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="patronymic"
            label="Имя (отца)"
            rules={[{ required: false, message: formMessage('Имя (отца)') }]}
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
        </div>
        <div className={s.space}>
          <Form.Item
            name="street"
            label="Улица"
            rules={[{ required: false, message: formMessage('Улица') }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="home"
            label="Место"
            rules={[{ required: false, message: formMessage('Место') }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="region"
            label="Регион"
            rules={[{ required: false, message: formMessage('Регион') }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="place"
            label="Ориентир"
            rules={[{ required: false, message: formMessage('Ориентир') }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name="call_cause_id"
            label="Причина звонка"
            rules={[{ required: false, message: formMessage('Причина звонка') }]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => {
                const label = option?.label ?? '';
                return label.toLowerCase().includes(input.toLowerCase());
              }}
              options={callCauses?.data.map((cause) => ({ value: cause.id, label: cause.name }))}
            />
          </Form.Item>
        </div>
      </Form>
    </CustomModal>
  );
};

export { CallsForm };
