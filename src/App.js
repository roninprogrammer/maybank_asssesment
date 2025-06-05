import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { LoadScript } from '@react-google-maps/api';
import store from './redux/store';
import PlaceSearch from './components/PlaceSearch';
import SearchHistoryList from './components/SearchHistoryList';
import MapContainer from './components/MapContainer';
import withLayout from './components/withLayout';

const CoreApp = () => {
  const [selectedPlace, setSelectedPlace] = useState('');

  return (
    <>
      <PlaceSearch onSelect={setSelectedPlace} />
      <MapContainer place={selectedPlace} />
      <SearchHistoryList onSelect={setSelectedPlace} />
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <LoadScript
      googleMapsApiKey="AIzaSyA3LcUpQm77vOjvbEbHSkA2li9V3DEA94M"
      libraries={['places']}
      region="MY"
      version="weekly"
    >
      {withLayout(CoreApp)()}
      <HireMeBadge />
    </LoadScript>
  </Provider>
);

const HireMeBadge = () => (
  <div
    style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#FFD500',
      color: '#000',
      fontWeight: 'bold',
      fontSize: '14px',
      padding: '10px 16px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      cursor: 'pointer',
      zIndex: 9999,
    }}
    onClick={() => window.open('mailto:roninprogrammer@gmail.com')}
  >
    Built by Vicknesh – Hire Me
  </div>
);


export default App;
