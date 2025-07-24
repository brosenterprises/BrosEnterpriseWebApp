/**
 * Sanitary Category Page
 * Displays all sanitary products with filtering and categorization
 */

import React from 'react';
import CategoryPage from '../../components/products/CategoryPage';

const SanitaryPage: React.FC = () => {
  return (
    <CategoryPage
      category="sanitary"
      title="Sanitary & Plumbing"
      description="Modern sanitary ware, pipes, fittings, and comprehensive plumbing solutions from leading brands"
    />
  );
};

export default SanitaryPage;
