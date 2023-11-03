import React from 'react';

const LocationInfo = ({ locationData, clearData, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!locationData) {
    return null;
  }

  return (
    <div>
      <h2>Location Information</h2>
      <ul>
        <li>Postal Code: {locationData['post code']}</li>
        <li>Country: {locationData.country}</li>
        <li>State: {locationData.places[0].state}</li>
        <li>Place Name: {locationData.places[0]['place name']}</li>
      </ul>
      <button onClick={clearData}>Clear</button>
    </div>
  );
};

export default LocationInfo;
