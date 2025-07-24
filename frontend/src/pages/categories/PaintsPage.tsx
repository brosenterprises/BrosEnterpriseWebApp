/**
 * Paints Category Page
 * Displays all paint products with filtering and categorization
 */

import React from 'react';
import CategoryPage from '../../components/products/CategoryPage';

const PaintsPage: React.FC = () => {
  return (
    <CategoryPage
      category="paints"
      title="Paints & Coatings"
      description="Premium quality paints, primers, and coating solutions for interior and exterior applications from trusted brands"
    />
  );
};

export default PaintsPage;
