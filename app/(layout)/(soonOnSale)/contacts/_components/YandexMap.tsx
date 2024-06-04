'use client';

import { Map, YMaps } from '@pbe/react-yandex-maps';

export const YandexMap = () => {
  return (
    <YMaps>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </YMaps>
  );
};
