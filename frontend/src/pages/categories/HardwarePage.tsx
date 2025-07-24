/**
 * Hardware Category Page
 * Displays all hardware products with filtering and categorization
 */

import React from 'react';
import CategoryPage from '../../components/products/CategoryPage';

const HardwarePage: React.FC = () => {
  return (
    <CategoryPage
      category="hardware"
      title="Hardware & Tools"
      description="Complete range of construction hardware, fasteners, and professional tools for all your building needs"
    />
  );
};

export default HardwarePage;
