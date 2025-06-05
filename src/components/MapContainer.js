import React, { useEffect, useRef, useState } from 'react';
import LocationButton from './LocationButton'; 
import maybankMapStyle from '../map/maybankMapStyle';

const MapContainer = ({ place }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [isLocating, setIsLocating] = useState(false);

  const initMap = (center) => {
    mapInstance.current = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 14,
      styles: maybankMapStyle,
      mapId: 'AIzaSyA3LcUpQm77vOjvbEbHSkA2li9V3DEA94M',
    });
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported.');
    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const position = { lat: coords.latitude, lng: coords.longitude };
        mapInstance.current.setCenter(position);

 
        const pin = document.createElement('div');
        pin.style.background = 'url(https://maps.google.com/mapfiles/ms/icons/yellow-dot.png)';
        pin.style.width = '32px';
        pin.style.height = '32px';
        pin.style.backgroundSize = 'contain';

        new window.google.maps.marker.AdvancedMarkerElement({
          map: mapInstance.current,
          position,
          title: 'You are here',
          content: pin,
        });

        setIsLocating(false);
      },
      () => {
        alert('Location access denied.');
        setIsLocating(false);
      }
    );
  };

  useEffect(() => {
    if (!window.google || !mapRef.current) return;
    initMap({ lat: 3.139, lng: 101.6869 });
  }, []);

  useEffect(() => {
    if (!place || !window.google || !mapInstance.current) return;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: place }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        mapInstance.current.setCenter(location);
      }
    });
  }, [place]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
      <LocationButton onClick={handleUseMyLocation} loading={isLocating} />
    </div>
  );
};

export default MapContainer;
