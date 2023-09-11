import React from 'react';
import marker from 'src/assets/images/location-pin.png';
import { useActions, useSelectors } from 'src/hooks';

import {
  FullscreenControl,
  Map,
  Placemark,
  SearchControl,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './form.module.scss';

const CallsFormMap: React.FC = () => {
  const { location2 } = useSelectors();
  const { setBrigadeLocation2 } = useActions();
  const onMapClick = async (event: any) => {
    const map = event.get('coords');
    setBrigadeLocation2(map);
  };
  const handlePlacemarkDrag = (e: any) => {
    const newCoords = e.get('target').geometry.getCoordinates();
    setBrigadeLocation2(newCoords);
  };
  return (
    <Map
      state={{
        center: location2,
        zoom: 15,
      }}
      className={s.map}
      onClick={onMapClick}
    >
      <FullscreenControl />
      <SearchControl />
      <ZoomControl />
      <Placemark
        geometry={location2}
        options={{
          draggable: true,
          iconLayout: 'default#image',
          iconImageHref: marker,
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16],
        }}
        onDragEnd={handlePlacemarkDrag}
      />
    </Map>
  );
};

export { CallsFormMap };
