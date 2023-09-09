import { Button, notification } from 'antd';
import React from 'react';
import sound from 'src/assets/audio/wrong-answer-129254.mp3';
import useSound from 'use-sound';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Home: React.FC = () => {
  const [play] = useSound(sound);
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <div>
      <Button onClick={() => play()} type="primary">
        Click
      </Button>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    </div>
  );
};

export { Home };
