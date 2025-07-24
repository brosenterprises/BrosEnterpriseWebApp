/**
 * Miscellaneous Category Page
 * Displays all miscellaneous products with filtering and categorization
 */

import React from 'react';
import CategoryPage from '../../components/products/CategoryPage';

const MiscellaneousPage: React.FC = () => {
  return (
    <CategoryPage
      category="misc"
      title="Miscellaneous Products"
      description="Additional construction materials, chemicals, adhesives, and specialty products for various applications"
    />
  );
};

export default MiscellaneousPage;
