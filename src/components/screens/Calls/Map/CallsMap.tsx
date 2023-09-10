import React from 'react';
import car from 'src/assets/images/car-left.svg';
import { useSelectors } from 'src/hooks';
import { useGetRouterBrigadesQuery } from 'src/services';

import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  SearchControl,
  TypeSelector,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './map.module.scss';

const CallsMap: React.FC = () => {
  const { location } = useSelectors();
  const { data: brigades } = useGetRouterBrigadesQuery();
  return (
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
      <GeolocationControl />
      <RouteButton />
      {brigades?.data.map((brigade) => (
        <Placemark
          key={brigade.id}
          geometry={[brigade.location.lat, brigade.location.lng]}
          options={{
            iconLayout: 'default#image',
            iconImageHref: car,
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
          }}
          onClick={() => alert(1)}
        />
      ))}
    </Map>
  );
};

export { CallsMap };
