/* eslint-disable react/no-this-in-sfc */
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
  useYMaps,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './map.module.scss';

const CallsMap: React.FC = () => {
  const { location } = useSelectors();
  const { data: brigades } = useGetRouterBrigadesQuery();
  const ymaps = useYMaps(['templateLayoutFactory']);
  if (!ymaps?.templateLayoutFactory) return null;
  const onNewTemplate = (name: string) => {
    const template = ymaps.templateLayoutFactory.createClass(
      `<div class=${s.marker}>
        <div class=${s.info}>
          <p>${name}</p>
          <span />
        </div>
        <img src=${car} alt="Car" />
       </div>`,
      {
        build() {
          // @ts-ignore
          template.superclass.build.call(this);
          // @ts-ignore
          this.getData().options.set('shape', {
            type: 'Circle',
            coordinates: [0, 0],
            radius: 70,
          });
          // @ts-ignore
          this.getData().geoObject.events.add('click', () => console.log('Click'), this);
        },
      },
    );
    return template;
  };
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
          options={{ iconLayout: onNewTemplate(brigade.name) }}
        />
      ))}
    </Map>
  );
};

export { CallsMap };
