/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import car from 'src/assets/images/car.svg';

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
  const ymaps = useYMaps(['templateLayoutFactory']);
  if (!ymaps?.templateLayoutFactory) return null;
  const template = ymaps.templateLayoutFactory.createClass(
    `<div class=${s.marker}>
      <div class=${s.info}>
        <p>ОПВ01</p>
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
          coordinates: [42.460382, 59.61797],
          radius: 70,
        });
        // @ts-ignore
        this.getData().geoObject.events.add('click', () => alert('Click'), this);
      },
    },
  );
  return (
    <Map
      state={{
        center: [42.460382, 59.61797],
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
      <Placemark geometry={[42.460382, 59.61797]} options={{ iconLayout: template }} />
    </Map>
  );
};

export { CallsMap };
