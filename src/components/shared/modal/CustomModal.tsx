/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, ModalProps } from 'antd';
import React from 'react';
import { useActions, useSelectors } from 'src/hooks';

import { ICustomModal } from './modal.types';

const CustomModal: React.FC<ModalProps & ICustomModal> = React.memo((_props) => {
  const { paramsItem, isModal } = useSelectors();
  const { form, confirmLoading } = _props;

  const { toggleModal, setId, setParamsItem, setBrigadeLocation, setBrigadeLocation2 } =
    useActions();

  const handleOk = () => form.submit();

  const onCancelModal = () => {
    if (isModal) toggleModal();
    form.resetFields();
    setId(0);
    setParamsItem(null);
    setBrigadeLocation([]);
    setBrigadeLocation2([]);
  };
  React.useEffect(() => {
    if (!confirmLoading) {
      if (isModal) toggleModal();
      form.resetFields();
      setParamsItem(null);
      setId(0);
      setBrigadeLocation([]);
      setBrigadeLocation2([]);
    }
  }, [form, confirmLoading]);
  return (
    <Modal
      {..._props}
      title={paramsItem ? 'Изменить' : 'Добавить'}
      okText={paramsItem ? 'Изменить' : 'Добавить'}
      cancelText="Отмена"
      open={isModal}
      onCancel={onCancelModal}
      onOk={handleOk}
      confirmLoading={confirmLoading}
    />
  );
});

export { CustomModal };
