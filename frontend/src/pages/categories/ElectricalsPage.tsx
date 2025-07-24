/**
 * Electricals Category Page
 * Displays all electrical products with filtering and categorization
 */

import React from 'react';
import CategoryPage from '../../components/products/CategoryPage';

const ElectricalsPage: React.FC = () => {
  return (
    <CategoryPage
      category="electricals"
      title="Electrical Solutions"
      description="Comprehensive electrical components, wiring solutions, and safety equipment for residential and commercial use"
    />
  );
};

export default ElectricalsPage;
