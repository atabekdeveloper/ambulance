import { notification } from 'antd';
import clsx from 'clsx';
import React from 'react';
import carError from 'src/assets/images/car/error/car-left.svg';
import carSuccess from 'src/assets/images/car/success/car-left.svg';
import marker from 'src/assets/images/location-pin.png';
import { useSelectors } from 'src/hooks';
import { useGetRouterBrigadesQuery } from 'src/services';

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
  const { location, id } = useSelectors();
  const [api, contextHolder] = notification.useNotification();

  const { data: brigades } = useGetRouterBrigadesQuery();

  const openNotification = (id: number) => {
    const findItem = brigades?.data.find((el) => el.id === id);
    api.open({
      message: 'Бригада',
      key: 'updatable',
      description: (
        <div className={s.notification}>
          <div className={s.top}>
            <div className={s.left}>
              <h2>{findItem?.name}</h2>
              <ul className={s.items}>
                {findItem?.statuses.includes({ id: 1, name: 'Bos' }) ? (
                  <li className={clsx(s.status, s.free)}>Свободно</li>
                ) : (
                  <li className={clsx(s.status, s.busy)}>Занят</li>
                )}
              </ul>
            </div>
            <p>{findItem?.user_phone}</p>
          </div>
        </div>
      ),
      placement: 'topRight',
      duration: 0,
    });
  };
  return (
    <>
      {contextHolder}
      <Map
        state={{
          center: location,
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
            visible: !!id,
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
                iconImageHref: brigade.statuses.includes({ name: 'Bos', id: 1 })
                  ? carSuccess
                  : carError,
                iconImageSize: [36, 36],
                iconImageOffset: [-18, -18],
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
