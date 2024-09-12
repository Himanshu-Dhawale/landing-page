import React from 'react';
import './Pricing.css';

const PricingSection = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">$19</p>
          <ul>
            <li>Comprehensive Dashboard</li>
            <li>Basic Budgeting Tools</li>
            <li>Monthly Financial Reports</li>
            <li>3 Financial Accounts</li>
            <li>Email Support</li>
          </ul>
          <button className="btn btn-primary">Get Started Free</button>
        </div>
        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">$39</p>
          <ul>
            <li>Comprehensive Dashboard</li>
            <li>Basic Budgeting Tools</li>
            <li>Monthly Financial Reports</li>
            <li>3 Financial Accounts</li>
            <li>Email Support</li>
          </ul>
          <button className="btn btn-primary">Get Started Free</button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
