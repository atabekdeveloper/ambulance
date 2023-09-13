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
  const { location, location2 } = useSelectors();
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
        center: location2[0] ? location2 : location,
        zoom: 15,
      }}
      className={s.map}
      onClick={onMapClick}
    >
      <FullscreenControl />
      <SearchControl />
      <ZoomControl />
      <Button
        options={{ maxWidth: 128, visible: !!location2[0] }}
        data={{ content: 'Отменить' }}
        state={{ selected: !!location2[0] }}
        onClick={() => setBrigadeLocation2([])}
      />
      <Placemark
        geometry={location2}
        options={{
          draggable: true,
          iconLayout: 'default#image',
          iconImageHref: marker,
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16],
          visible: !!location2[0],
        }}
        onDragEnd={handlePlacemarkDrag}
      />
    </Map>
  );
};

export { CallHistoryFormMap };
