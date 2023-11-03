import React, { useState} from 'react';
import PostalCodeForm from './components/PostalCodeForm';
import LocationInfo from './components/LocationInfo';
import './App.css';

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearData = () => {
    setLocationData(null);
  };

  const fetchLocationData = (postalCode) => {
    setLoading(true);
    setError(null);

    fetch(`https://api.zippopotam.us/in/${postalCode}`)
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className='container'>
      <h1>Postal Code Location Finder</h1>
      <PostalCodeForm onSearch={fetchLocationData} />
      <LocationInfo
        locationData={locationData}
        clearData={clearData}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default App;

