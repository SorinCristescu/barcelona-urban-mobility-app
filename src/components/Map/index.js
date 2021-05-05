import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect, useCallback } from 'react';
import ReactMapGl, {
  Marker,
  Popup,
  FullscreenControl,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../../styles';

import { MarkerButton } from './style';

const fullscreenControlStyle = {
  right: 10,
  top: 10,
};
const navControlStyle = {
  right: 10,
  bottom: 10,
};
const geolocateControlStyle = {
  right: 10,
  bottom: 100,
};

function Map({ markers }) {
  const { darkModeActive } = useDarkMode();
  const [viewport, setViewport] = useState({
    latitude: 41.397236,
    longitude: 2.172789,
    zoom: 11,
    width: '100%',
    height: '80vh',
  });
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    setViewport({
      ...viewport,
      longitude: 2.172789,
      latitude: 41.397236,
      zoom: 11,
    });
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedMarker(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoic29yaW5jcmlzdGVzY3UiLCJhIjoiY2tueWdvOXM1MWc0aDJ2b2FtdjFuNmpxYyJ9.pXTxGHIAah6NwaRjNrTEWw"
      mapStyle={
        darkModeActive
          ? 'mapbox://styles/sorincristescu/cknyhu5kh0g5i17qcl5zk3oi1'
          : 'mapbox://styles/mapbox/dark-v9'
      }
      onViewportChange={handleViewportChange}
    >
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navControlStyle} />
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        showUserLocation={true}
        showAccuracyCircle={true}
        auto
      />
      {/* {markers.map((marker) => {
          const [longitude, latitude] = marker.coordinates;
          return (
            <Marker key={marker.id} latitude={latitude} longitude={longitude}>
              <MarkerButton
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedMarker(marker);
                }}
              >
                <img
                  src={
                    selectedMarker === marker
                      ? '/icons/parking pin selected.svg'
                      : '/icons/parking-pin.svg'
                  }
                  alt="Parking place icon"
                />
              </MarkerButton>
            </Marker>
          );
        })} */}
      {/* {selectedMarker ? (
          <Popup
            latitude={selectedMarker.latitude}
            longitude={selectedMarker.longitude}
            onClose={() => setSelectedMarker(null)}
          >
            <div>
              <h4>{selectedMarker}</h4>
              <p>{selectedMarker}</p>
            </div>
          </Popup>
        ) : null} */}
    </ReactMapGl>
  );
}

export default Map;
