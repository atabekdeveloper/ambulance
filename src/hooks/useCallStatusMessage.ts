/* eslint-disable react-hooks/rules-of-hooks */
import { notification } from 'antd';
import Pusher from 'pusher-js';
import React from 'react';
import sound from 'src/assets/audio/wrong-answer-129254.mp3';
import useSound from 'use-sound';

export const useGetRouterBrigadesPusherQuery = () => {
  React.useEffect(() => {
    const pusher = new Pusher('a19af38bf0ee06f0149f', {
      cluster: 'eu',
    });
    const channel = pusher.subscribe('call-notification');
    channel.bind('CallNotificationSent', (event: any) => {
      const [play] = useSound(sound);
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
    });
  }, []);
};
