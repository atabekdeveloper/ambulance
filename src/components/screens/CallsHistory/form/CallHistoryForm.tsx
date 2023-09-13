import { Form, Input, Select } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditCallMutation, useGetCallCausesQuery, usePostCallMutation } from 'src/services';
import { TCallChange } from 'src/services/call/call.types';
import { formatStringJoin, formMessage } from 'src/utils';

import { CallHistoryFormMap } from './CallHistoryFormMap';

import s from './form.module.scss';

const CallHistoryForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem, location2 } = useSelectors();

  const { data: callCauses } = useGetCallCausesQuery();
  const { mutate: addCall, isLoading: addLoading } = usePostCallMutation();
  const { mutate: editCall, isLoading: editLoading } = useEditCallMutation();

  const onFinish = (values: TCallChange) => {
    if (paramsItem) {
      editCall({
        ...values,
        id: paramsItem.id,
        phone: formatStringJoin(values.phone),
        lat: location2[0] || null,
        lng: location2[1] || null,
      });
    } else {
      addCall({
        ...values,
        phone: formatStringJoin(values.phone),
        lat: location2[0] || null,
        lng: location2[1] || null,
      });
    }
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue({ ...paramsItem, ...paramsItem.address });
  }, [form, paramsItem]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading} width={900}>
      <Form
        name="Dispatcher Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
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
            rules={[{ required: true, message: formMessage('Телефон') }]}
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
            rules={[{ required: true, message: formMessage('Причина звонка') }]}
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
        <Form.Item
          name="comment"
          label="Комментария"
          rules={[{ required: true, message: formMessage('Комментария') }]}
        >
          <Input.TextArea />
        </Form.Item>
        <CallHistoryFormMap />
      </Form>
    </CustomModal>
  );
};

export { CallHistoryForm };
