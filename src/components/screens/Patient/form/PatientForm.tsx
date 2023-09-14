/* eslint-disable object-curly-newline */
import { DatePicker, DatePickerProps, Form, Input, Select } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditCallPatientMutation, usePostCallPatientMutation } from 'src/services';
import { TCallPatientItem } from 'src/services/call/patient/call-patient.types';
import { dateFormat2 } from 'src/shared';
import { formMessage } from 'src/utils';

const PatientForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();
  const [birthdayDate, setBirthdayDate] = React.useState('');

  const { mutate: addPatient, isLoading: addLoading } = usePostCallPatientMutation();
  const { mutate: editPatient, isLoading: editLoading } = useEditCallPatientMutation();

  const onChangeBirthday: DatePickerProps['onChange'] = (_, dateString) => {
    setBirthdayDate(dateString);
  };

  const onFinish = (values: TCallPatientItem) => {
    if (paramsItem) {
      editPatient({
        ...values,
        birthday: birthdayDate,
        id: paramsItem.id,
        callId: paramsItem.callId,
      });
    } else addPatient({ ...values, birthday: birthdayDate });
  };
  React.useEffect(() => {
    if (paramsItem) {
      form.setFieldsValue({ ...paramsItem, birthday: dayjs(paramsItem.birthday, dateFormat2) });
    }
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form name="Patient" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="first_name"
          label="Имя"
          rules={[{ required: true, message: formMessage('Имя') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Фамилия"
          rules={[{ required: true, message: formMessage('Фамилия') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="patronymic"
          label="Имя (отца)"
          rules={[{ required: true, message: formMessage('Имя (отца)') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="Дата рождение"
          rules={[{ required: true, message: formMessage('Дата рождение') }]}
        >
          <DatePicker format={dateFormat2} onChange={onChangeBirthday} />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Пол"
          rules={[{ required: true, message: formMessage('Пол') }]}
        >
          <Select
            options={[
              { value: 'male', label: 'Мужчина' },
              { value: 'female', label: 'Женщина' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { PatientForm };
