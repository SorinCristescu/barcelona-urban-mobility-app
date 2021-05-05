import 'mapbox-gl/dist/mapbox-gl.css';
import Link from 'next/link';
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

import { MarkerButton, PopupContainer } from './style';

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
  console.log('map', markers);
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
      {markers.map((marker) => {
        const { longitude, latitude } = marker.coordinates;
        return (
          <Marker key={marker.id} latitude={latitude} longitude={longitude}>
            <MarkerButton
              onClick={(e) => {
                e.preventDefault();
                setSelectedMarker(marker);
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M17.5 0C7.83518 0 0 7.83518 0 17.5C0 27.1648 7.83518 35.0004 17.5 35.0004C27.1644 35.0004 35 27.1648 35 17.5C35 7.83518 27.1644 0 17.5 0ZM27.2753 17.5V27.3049H25.3204H23.3655L23.3598 20.4916L23.3556 13.6805L21.5036 20.1511C20.4844 23.7098 19.6056 26.7746 19.5506 26.9625L19.4511 27.3056H17.5H15.5485L15.4491 26.9625C15.3944 26.7746 14.5153 23.7098 13.4957 20.1511L11.644 13.6805L11.6391 20.4916L11.6353 27.3049H9.68038H7.72548V17.5V7.69511H10.659L13.5906 7.69701L15.544 14.218C16.6186 17.8052 17.5023 20.736 17.5065 20.7292C17.5106 20.7231 18.3898 17.7874 19.4614 14.2066L21.4109 7.69701L24.3425 7.69511H27.276V17.5H27.2753Z"
                    fill={marker.color}
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </MarkerButton>
          </Marker>
        );
      })}
      {selectedMarker ? (
        <PopupContainer color={selectedMarker.color}>
          <Popup
            className="popup"
            latitude={selectedMarker.coordinates.latitude}
            longitude={selectedMarker.coordinates.longitude}
            onClose={() => setSelectedMarker(null)}
            dynamicPosition
            offsetLeft={13}
            offsetTop={15}
          >
            <div>
              <h3>{selectedMarker.name}</h3>
              <div className="popup-text">
                <p>Lines:</p>
                {selectedMarker.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </Popup>
        </PopupContainer>
      ) : null}
    </ReactMapGl>
  );
}

export default Map;
