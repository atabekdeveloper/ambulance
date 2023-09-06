import { Button, Form, Input } from 'antd';
import React from 'react';
import { formMessage } from 'src/utils';

import s from './auth.module.scss';

const AuthLogin: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {};
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
          <Form.Item name="phone" rules={[{ required: true, message: formMessage('Логин') }]}>
            <Input placeholder="Логин" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: formMessage('Пароль') }]}>
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Button type="primary" block size="large" htmlType="submit" loading={false}>
            Войти
          </Button>
        </Form>
      </div>
    </div>
  );
};

export { AuthLogin };
