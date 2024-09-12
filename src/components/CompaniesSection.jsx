import React from 'react';
import './Companies.css';

const CompaniesSection = () => {
  return (
    <div className="companies-container">
      <h2>Trusted by thousands of companies worldwide</h2>
      <div className="company-logos">
        <img src="\boltshift.svg" alt="Boltshift" />
        <img src="\featherdev.svg" alt="Lightbox" />
        <img src="\lightbox.svg" alt="FeatherDev" />
        <img src="\globalbank.svg" alt="Spherule" />
        <img src="\spherule.svg" alt="GlobalBank" />
      </div>
    </div>
  );
};

export default CompaniesSection;
