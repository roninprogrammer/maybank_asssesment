import React, { useEffect, useRef } from 'react';

const MapContainer = ({ place }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;
  
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 3.139, lng: 101.6869 },
      zoom: 14,
    });
  
    if (!place) return;
  
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: place }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);
  
        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(
          {
            location,
            radius: 3000,
            keyword: 'Maybank ATM',
            type: ['atm'],
          },
          (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              const infoWindow = new window.google.maps.InfoWindow();
  
              results.forEach((atm) => {
                if (atm.name.toLowerCase().includes('maybank')) {
                  const marker = new window.google.maps.Marker({
                    position: atm.geometry.location,
                    map,
                    title: atm.name,
                    icon: {
                      url: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                    },
                  });
  
                  marker.addListener('click', () => {
                    infoWindow.setContent(`
                      <div style="font-family: Roboto; font-size: 14px">
                        <strong>${atm.name}</strong><br/>
                        ${atm.vicinity || 'No address available'}
                      </div>
                    `);
                    infoWindow.open(map, marker);
                  });
                }
              });
            }
          }
        );
      }
    });
  }, [place]);
  

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px', marginTop: '1rem' }}
    />
  );
};

export default MapContainer;
