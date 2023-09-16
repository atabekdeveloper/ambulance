import React from 'react';
import marker from 'src/assets/images/location-pin.png';
import { useActions, useSelectors } from 'src/hooks';

import {
  Button,
  FullscreenControl,
  Map,
  Placemark,
  SearchControl,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './form.module.scss';

const CallHistoryFormMap: React.FC = () => {
  const { location, markerIncomig } = useSelectors();
  const { setBrigadeLocation } = useActions();
  const onMapClick = async (event: any) => {
    const map = event.get('coords');
    setBrigadeLocation(map);
  };
  const handlePlacemarkDrag = (e: any) => {
    const newCoords = e.get('target').geometry.getCoordinates();
    setBrigadeLocation(newCoords);
  };
  return (
    <Map
      state={{
        center: location,
        zoom: 15,
      }}
      className={s.map}
      onClick={onMapClick}
    >
      <FullscreenControl />
      <SearchControl />
      <ZoomControl />
      <Button
        options={{ maxWidth: 128, visible: markerIncomig }}
        data={{ content: 'Отменить' }}
        state={{ selected: markerIncomig }}
        onClick={() => setBrigadeLocation([])}
      />
      <Placemark
        geometry={location}
        options={{
          draggable: true,
          iconLayout: 'default#image',
          iconImageHref: marker,
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16],
          visible: markerIncomig,
        }}
        onDragEnd={handlePlacemarkDrag}
      />
    </Map>
  );
};

export { CallHistoryFormMap };
