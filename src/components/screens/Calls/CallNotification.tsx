import { useSnackbar } from 'notistack';
import Pusher from 'pusher-js';
import React from 'react';
import sound from 'src/assets/audio/wrong-answer-129254.mp3';
import useSound from 'use-sound';

import s from './calls.module.scss';

const CallNotification: React.FC = React.memo(() => {
  const [play] = useSound(sound);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const pusher = new Pusher('a19af38bf0ee06f0149f', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('call-notification');

    const handleCallNotification = (event: any) => {
      const { data, success } = event;
      play();

      if (success) {
        enqueueSnackbar(
          <div className={s.notification}>
            <h3>{data.call_status_name}</h3>
            <p>{data.call_full_address}</p>
          </div>,
          {
            variant: 'success',
            anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          },
        );
      } else {
        enqueueSnackbar(
          <div className={s.notification}>
            <h3>{data.call_status_name}</h3>
            <p>{data.call_full_address}</p>
          </div>,
          {
            variant: 'error',
            anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          },
        );
      }
    };

    channel.bind('CallNotificationSent', handleCallNotification);

    return () => {
      channel.unbind('CallNotificationSent', handleCallNotification);
      pusher.unsubscribe('call-notification');
    };
  }, [enqueueSnackbar, play]);

  return <div />;
});

export { CallNotification };
