/* eslint-disable object-curly-newline */
import { notification } from 'antd';
import clsx from 'clsx';
import React from 'react';
import carError from 'src/assets/images/car-error.svg';
import carSuccess from 'src/assets/images/car-success.svg';
import marker from 'src/assets/images/location-pin.png';
import { UiButton } from 'src/components/ui';
import { useSelectors } from 'src/hooks';
import { useGetRouterBrigadesQuery, usePostCallBrigadeMutation } from 'src/services';

import {
  Clusterer,
  FullscreenControl,
  Map,
  Placemark,
  SearchControl,
  TrafficControl,
  TypeSelector,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './map.module.scss';

const CallsMap: React.FC = () => {
  const { location, id, markerIncomig, location2 } = useSelectors();
  const [api, contextHolder] = notification.useNotification();

  const { data: brigades } = useGetRouterBrigadesQuery();
  const { mutate: addCall, isLoading, isSuccess } = usePostCallBrigadeMutation();

  const onAddCall = (brigadeId: number) => addCall({ callId: id, brigadeId });

  const openNotification = (brigadeId: number) => {
    const findItem = brigades?.data.find((el) => el.id === brigadeId);
    api.open({
      message: 'Бригада',
      key: 'updatable',
      description: (
        <div className={s.notification}>
          <div className={s.top}>
            <div className={s.left}>
              <h2>{findItem?.name}</h2>
              <ul className={s.items}>
                {findItem?.is_access ? (
                  <li className={clsx(s.status, s.free)}>Свободно</li>
                ) : (
                  <li className={clsx(s.status, s.busy)}>Занят</li>
                )}
              </ul>
            </div>
            <p>{findItem?.user_phone}</p>
          </div>
          <div className={s.bottom}>
            <ul className={s.items}>
              <li className={s.item}>
                <span>Место-ие</span>
                <span>{findItem?.location.place}</span>
              </li>
              <li className={s.item}>
                <span>Врач</span>
                <span>{findItem?.medic_name}</span>
              </li>
            </ul>
            <UiButton
              shape="round"
              block
              loading={isLoading}
              hidden={!findItem?.is_access}
              disabled={!id}
              onClick={() => onAddCall(Number(findItem?.id))}
            >
              Направить
            </UiButton>
          </div>
        </div>
      ),
      placement: 'topRight',
      duration: 0,
    });
  };
  React.useEffect(() => {
    if (isSuccess) api.destroy();
  }, [api, isSuccess]);
  return (
    <>
      {contextHolder}
      <Map
        state={{
          center: id ? location : location2,
          zoom: 15,
        }}
        className={s.map}
      >
        <FullscreenControl />
        <SearchControl />
        <TypeSelector />
        <ZoomControl />
        <TrafficControl />
        <Placemark
          geometry={location}
          options={{
            iconLayout: 'default#image',
            iconImageHref: marker,
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
            visible: markerIncomig,
          }}
        />
        <Clusterer
          options={{
            preset: 'islands#invertedVioletClusterIcons',
            groupByCoordinates: false,
          }}
        >
          {brigades?.data.map((brigade) => (
            <Placemark
              key={brigade.id}
              geometry={[brigade.location.lat, brigade.location.lng]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: brigade.statuses.some((el) => el.id === 1) ? carSuccess : carError,
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -24],
              }}
              onClick={() => openNotification(brigade.id)}
            />
          ))}
        </Clusterer>
      </Map>
    </>
  );
};

export { CallsMap };
