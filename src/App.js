import React, { useState } from 'react';
import { Provider } from 'react-redux';
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
      <SearchHistoryList />
    </>
  );
};

const App = () => (
  <Provider store={store}>
    {withLayout(CoreApp)()}
  </Provider>
);

export default App;
