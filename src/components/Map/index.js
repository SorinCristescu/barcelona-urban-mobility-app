import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../store/profile/actions';
import ReactMapGl, {
  Marker,
  Popup,
  FullscreenControl,
  NavigationControl,
  GeolocateControl,
  FlyToInterpolator,
} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { useDarkMode } from 'next-dark-mode';

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

function Map({ markers, showOnMap }) {
  const mapRef = useRef();
  const dispatch = useDispatch();
  const { latitude, longitude } = showOnMap
    ? showOnMap.coordinates
    : markers[0].coordinates;

  const { darkModeActive } = useDarkMode();
  const profile = useSelector((state) => state.profile.profile);
  const [showPopup, togglePopup] = useState(true);

  console.log('from map', profile);
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 15,
    width: '100%',
    height: '80vh',
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  // const [isSelected, setIsSelected] = useState(selectedMarker.isFavorite);
  console.log('selectedMArker', selectedMarker?.isFavorite);

  const idFavorites = new Set(profile?.favorites.map((o) => o.id));

  const augmentedMarkers = markers.map((o) => ({
    ...o,
    isFavorite: idFavorites.has(o.id) ? true : false,
  }));
  console.log('profile', profile);
  console.log('markers', augmentedMarkers);

  const handleFavorite = (selectedMarker) => {
    if (!selectedMarker.isFavorite) {
      const markerToBeAdded = {
        ...selectedMarker,
        isFavorite: true,
      };
      const favorite = {
        profileId: profile?._id,
        favorite: markerToBeAdded,
      };
      dispatch(addFavorite(favorite));
    } else if (selectedMarker.isFavorite) {
      const favorite = {
        profileId: profile?._id,
        favoriteId: selectedMarker.id,
      };
      dispatch(deleteFavorite(favorite));
    }
  };

  useEffect(() => {
    setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom: 15,
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
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
  }, [showOnMap]);

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange, profile]
  );
  const connectionLines =
    selectedMarker &&
    selectedMarker.type === 'MetroStation' &&
    selectedMarker.lines.filter((line) => line !== selectedMarker.name);

  return (
    <ReactMapGl
      ref={mapRef}
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOXGL_ACCESS_TOKEN}
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
      <Geocoder
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOXGL_ACCESS_TOKEN}
        position="top-left"
        placeholder="Search address"
        collapsed
        // proximity={}
        trackProximity
      />
      {augmentedMarkers.map((marker, index) => {
        const { longitude, latitude } = marker.coordinates;
        const scale = showOnMap && showOnMap.id === marker.id ? 2 : 1;
        return (
          <Marker key={index} latitude={latitude} longitude={longitude}>
            <MarkerButton
              marker={marker}
              scale={scale}
              onClick={(e) => {
                e.preventDefault();
                setSelectedMarker(marker);
              }}
            >
              {marker.type === 'MetroStation' ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
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
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5 0C27.1585 0 35 7.84146 35 17.5C35 27.1585 27.1585 35 17.5 35C7.84146 35 0 27.1585 0 17.5C0 7.84146 7.84146 0 17.5 0ZM24.306 27.7083C24.7756 27.7083 25.1562 27.3277 25.1562 26.8581V26.0065C25.6069 26.0065 26.04 25.8271 26.3594 25.5092C26.6788 25.1898 26.8581 24.7567 26.8581 24.306V17.5C27.3277 17.5 27.7083 17.1194 27.7083 16.6498V14.0977C27.7083 13.6281 27.3277 13.246 26.8581 13.246V9.84375C26.8581 8.435 25.7148 7.29167 24.306 7.29167H10.694C9.28521 7.29167 8.14188 8.435 8.14188 9.84375V13.246C7.67229 13.246 7.29167 13.6281 7.29167 14.0977V16.6498C7.29167 17.1194 7.67229 17.5 8.14188 17.5V24.306C8.14188 24.7567 8.32125 25.1898 8.64063 25.5092C8.96 25.8271 9.39313 26.0065 9.84375 26.0065V26.8581C9.84375 27.3277 10.2244 27.7083 10.694 27.7083H12.3958C12.8654 27.7083 13.246 27.3277 13.246 26.8581V26.0065H21.754V26.8581C21.754 27.3277 22.1346 27.7083 22.6042 27.7083H24.306ZM11.1198 21.754C11.8242 21.754 12.3958 22.3256 12.3958 23.03C12.3958 23.7344 11.8242 24.306 11.1198 24.306C10.4154 24.306 9.84375 23.7344 9.84375 23.03C9.84375 22.3256 10.4154 21.754 11.1198 21.754ZM23.8802 21.754C24.5846 21.754 25.1562 22.3256 25.1562 23.03C25.1562 23.7344 24.5846 24.306 23.8802 24.306C23.1758 24.306 22.6042 23.7344 22.6042 23.03C22.6042 22.3256 23.1758 21.754 23.8802 21.754ZM19.6263 22.6042C19.861 22.6042 20.0521 22.7952 20.0521 23.03C20.0521 23.2648 19.861 23.4544 19.6263 23.4544H15.3737C15.139 23.4544 14.9479 23.2648 14.9479 23.03C14.9479 22.7952 15.139 22.6042 15.3737 22.6042H19.6263ZM25.1562 11.97C25.1562 11.7352 24.9652 11.5456 24.7304 11.5456H10.2696C10.0348 11.5456 9.84375 11.7352 9.84375 11.97V19.2019C9.84375 19.2019 12.479 20.0521 17.5 20.0521C22.521 20.0521 25.1562 19.2019 25.1562 19.2019V11.97ZM20.9023 8.99354V9.84375H14.0977V8.99354H20.9023Z"
                    fill={marker.color}
                  />
                </svg>
              )}
            </MarkerButton>
          </Marker>
        );
      })}
      {selectedMarker ? (
        <PopupContainer color={selectedMarker.color}>
          {/* {showPopup && ( */}
          <Popup
            className="popup"
            latitude={selectedMarker.coordinates.latitude}
            longitude={selectedMarker.coordinates.longitude}
            // onClose={() => setSelectedMarker(null)}
            dynamicPosition
            offsetLeft={13}
            offsetTop={15}
            // captureClick
            closeButton={true}
            closeOnClick={true}
            sortByDepth={true}
            onClose={(e) => {
              // togglePopup(false);
              setSelectedMarker(null);
            }}
          >
            <>
              <div className="favorite">
                <p>{selectedMarker.type}</p>
                <button
                  onClick={() => {
                    handleFavorite(selectedMarker);
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill={selectedMarker.isFavorite ? '#333333' : 'transparent'}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4578 6.59133C21.9691 6.08683 21.3889 5.68663 20.7503 5.41358C20.1117 5.14054 19.4272 5 18.7359 5C18.0446 5 17.3601 5.14054 16.7215 5.41358C16.0829 5.68663 15.5026 6.08683 15.0139 6.59133L13.9997 7.63785L12.9855 6.59133C11.9984 5.57276 10.6596 5.00053 9.26361 5.00053C7.86761 5.00053 6.52879 5.57276 5.54168 6.59133C4.55456 7.6099 4 8.99139 4 10.4319C4 11.8723 4.55456 13.2538 5.54168 14.2724L6.55588 15.3189L13.9997 23L21.4436 15.3189L22.4578 14.2724C22.9467 13.7681 23.3346 13.1694 23.5992 12.5105C23.8638 11.8515 24 11.1452 24 10.4319C24 9.71857 23.8638 9.01225 23.5992 8.35328C23.3346 7.69431 22.9467 7.09559 22.4578 6.59133V6.59133Z"
                      stroke="#333333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <h3>{selectedMarker.name}</h3>
              <div className="popup-text">
                {selectedMarker.type === 'MetroStation' &&
                connectionLines.lenght > 0 ? (
                  <p>Connection lines:</p>
                ) : (
                  <p>Without connection lines</p>
                )}

                {selectedMarker.type === 'MetroStation' &&
                  connectionLines.map((line, index) => {
                    <p key={index}>{line}</p>;
                  })}

                {selectedMarker.type === 'BusStop' && (
                  <div>
                    <p>{selectedMarker.address}</p>
                    <p>{selectedMarker.street}</p>
                    <p>{selectedMarker.city}</p>
                    <p>{selectedMarker.district}</p>
                  </div>
                )}
              </div>
            </>
          </Popup>
          {/* )} */}
        </PopupContainer>
      ) : null}
    </ReactMapGl>
  );
}

export default Map;
