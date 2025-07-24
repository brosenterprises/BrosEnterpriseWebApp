/**
 * Tiling Solutions Category Page
 * Displays all tiling products with filtering and categorization
 */

import React from 'react';
import CategoryPage from '../../components/products/CategoryPage';

const TilingSolutionsPage: React.FC = () => {
  return (
    <CategoryPage
      category="tiling_solutions"
      title="Tiling Solutions"
      description="Professional tiling materials, adhesives, grouts, and finishing solutions for perfect tile installations"
    />
  );
};

export default TilingSolutionsPage;
