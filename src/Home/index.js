import React from 'react';
import { Image } from 'react-native';

import MapboxGL from '@react-native-mapbox-gl/maps';
import Logo from '../assets/dog.png';

MapboxGL.setAccessToken('SET_YOUR_MAPBOX_KEY_HERE');

export default function Home() {
  const nasa = [-95.089323, 29.558407];
  const university = [-95.099215, 29.583299];

  return (
    <MapboxGL.MapView
      style={{ flex: 1 }}
      showUserLocation
      styleURL={MapboxGL.StyleURL.Dark}
    >
      <MapboxGL.Camera centerCoordinate={nasa} zoomLevel={11} />

      <MapboxGL.PointAnnotation id="first-annotation" coordinate={nasa}>
        <Image style={{ width: 50, height: 50 }} source={Logo} />
      </MapboxGL.PointAnnotation>

      {/* Você pode ter quantos marcadores quiser :), mude os id's! */}
      <MapboxGL.PointAnnotation id="second-annotation" coordinate={university}>
        <Image style={{ width: 50, height: 50 }} source={Logo} />
      </MapboxGL.PointAnnotation>
    </MapboxGL.MapView>
  );
}
