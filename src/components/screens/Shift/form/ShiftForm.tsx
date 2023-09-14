/* eslint-disable @typescript-eslint/indent */
/* eslint-disable object-curly-newline */
import { DatePicker, Form, Select } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditShiftMutation, useGetBrigadesQuery, usePostShiftMutation } from 'src/services';
import { TShiftChange } from 'src/services/shift/shift.types';
import { dateFormat } from 'src/shared';
import { formMessage } from 'src/utils';

const ShiftForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const [stateDate, setStateDate] = React.useState<string[]>([]);

  const { data: brigades } = useGetBrigadesQuery();

  const { mutate: addShift, isLoading: addLoading } = usePostShiftMutation();
  const { mutate: editShift, isLoading: editLoading } = useEditShiftMutation();

  const onChangeDateFrom = (dates: any, dateStrings: string[]) => {
    if (dates) setStateDate(dateStrings);
  };

  const onFinish = (values: TShiftChange) => {
    if (paramsItem) {
      editShift({
        brigade_id: values.brigade_id,
        date_from: `${stateDate[0]}:00`,
        date_to: `${stateDate[1]}:00`,
        id: paramsItem.id,
      });
    } else {
      addShift({
        brigade_id: values.brigade_id,
        date_from: `${stateDate[0]}:00`,
        date_to: `${stateDate[1]}:00`,
      });
    }
  };

  React.useEffect(() => {
    if (paramsItem) {
      form.setFieldsValue({
        ...paramsItem,
        date: paramsItem.date_from
          ? [
              dayjs(`${paramsItem.date_from} ${paramsItem.time_from}`),
              dayjs(`${paramsItem.date_to} ${paramsItem.time_to}`),
            ]
          : null,
      });
    }
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form name="Shift" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="date"
          label="Время"
          rules={[{ required: true, message: formMessage('Время') }]}
        >
          <DatePicker.RangePicker
            format={dateFormat}
            showTime={{ format: 'HH:mm' }}
            onChange={onChangeDateFrom}
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item
          name="brigade_id"
          label="Бригада"
          rules={[{ required: true, message: formMessage('Бригада') }]}
        >
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) => {
              const label = option?.label ?? '';
              return label.toLowerCase().includes(input.toLowerCase());
            }}
            options={brigades?.data.map((brigade) => ({ value: brigade.id, label: brigade.name }))}
          />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { ShiftForm };
