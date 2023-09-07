/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable object-curly-newline */
import { Button, Form, Input } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from 'src/hooks';
import { useAuthLoginMutation } from 'src/services';
import { TAuthLogin } from 'src/services/auth/auth.types';
import { formatStringJoin, formMessage } from 'src/utils';

import s from './auth.module.scss';

const AuthLogin: React.FC = () => {
  const [form] = Form.useForm();
  const { signIn } = useActions();
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess, data: loginData } = useAuthLoginMutation();

  const onFinish = (values: TAuthLogin) => {
    mutate({ ...values, phone: formatStringJoin(values.phone) });
  };
  React.useEffect(() => {
    if (isSuccess) {
      signIn({ token: loginData.data.token, role: loginData.data.user.role_name });
      form.resetFields();
      navigate('/');
    }
  }, [isSuccess]);
  return (
    <div className={s.auth}>
      <div className={s.body}>
        <h2>Авторизация</h2>
        <Form
          form={form}
          name="Login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="phone"
            rules={[{ required: true, message: formMessage('номер телефона') }]}
          >
            <MaskedInput inputMode="tel" mask="+{998} 00 000 00 00" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: formMessage('Пароль') }]}>
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Button type="primary" block size="large" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
        </Form>
      </div>
    </div>
  );
};

export { AuthLogin };
