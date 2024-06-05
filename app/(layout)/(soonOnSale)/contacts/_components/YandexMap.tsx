'use client';

import { Map, YMaps } from '@pbe/react-yandex-maps';

export const YandexMap = () => {
  return (
    <YMaps>
      <Map defaultState={{ center: [55.763417, 37.607826], zoom: 17 }} width={'100%'} />
    </YMaps>
  );
};
