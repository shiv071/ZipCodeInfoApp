import React, { useState } from 'react';

const PostalCodeForm = ({ onSearch }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(postalCode);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default PostalCodeForm;
