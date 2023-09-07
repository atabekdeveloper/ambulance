/* eslint-disable object-curly-newline */
import React from 'react';
import { yandexApi } from 'src/config/url.config';

import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  SearchControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './map.module.scss';

const CallsMap: React.FC = () => {
  const x = 0;
  return (
    <YMaps query={{ apikey: yandexApi }}>
      <Map defaultState={{ center: [42.460382, 59.61797], zoom: 9 }} className={s.map}>
        <FullscreenControl />
        <SearchControl />
        <TypeSelector />
        <ZoomControl />
        <GeolocationControl />
        <RouteButton />
        <Placemark geometry={[42.460382, 59.61797]} />
      </Map>
    </YMaps>
  );
};

export { CallsMap };
