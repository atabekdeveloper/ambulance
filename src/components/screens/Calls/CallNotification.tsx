/* eslint-disable react-hooks/rules-of-hooks */
import { notification } from 'antd';
import Pusher from 'pusher-js';
import React from 'react';
import sound from 'src/assets/audio/wrong-answer-129254.mp3';
import useSound from 'use-sound';

const CallNotification: React.FC = React.memo(() => {
  const [play] = useSound(sound);

  React.useEffect(() => {
    const pusher = new Pusher('a19af38bf0ee06f0149f', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('call-notification');

    const handleCallNotification = (event: any) => {
      const { data, success } = event;
      play();

      if (success) {
        notification.success({
          message: data.call_status_name,
          description: data.call_full_address,
          placement: 'bottomRight',
        });
      } else {
        notification.error({
          message: data.call_status_name,
          description: data.call_full_address,
          placement: 'bottomRight',
        });
      }
    };

    channel.bind('CallNotificationSent', handleCallNotification);

    return () => {
      channel.unbind('CallNotificationSent', handleCallNotification);
      pusher.unsubscribe('call-notification');
    };
  }, [play]);

  return <div />;
});

export { CallNotification };
