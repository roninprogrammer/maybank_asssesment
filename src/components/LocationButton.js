import React from 'react';
import './LocationButton.css';

const LocationButton = ({ onClick, isLoading }) => {
    return (
      <button 
        className="location-btn"
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? 'Locating…' : 'Use My Location'}
      </button>
    );
  };

export default LocationButton;
