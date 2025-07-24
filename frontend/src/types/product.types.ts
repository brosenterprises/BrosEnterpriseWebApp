/**
 * Product and Category Type Definitions
 * Following industry standards for e-commerce product management
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: ProductCategory;
  subcategory?: string;
  brand?: string;
  price?: {
    min?: number;
    max?: number;
    currency: string;
  };
  features?: string[];
  specifications?: Record<string, string>;
  availability: 'in-stock' | 'out-of-stock' | 'limited';
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type ProductCategory = 
  | 'paints'
  | 'hardware' 
  | 'sanitary'
  | 'electricals'
  | 'tiling_solutions'
  | 'misc';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  displayName: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  path: string;
  subcategories?: string[];
}

export interface ProductFilter {
  category?: ProductCategory;
  subcategory?: string;
  brand?: string;
  availability?: Product['availability'];
  priceRange?: {
    min: number;
    max: number;
  };
  searchQuery?: string;
  tags?: string[];
}

export interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  onProductClick?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  showPrice?: boolean;
  showDescription?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
}

export interface CategoryPageProps {
  category: ProductCategory;
  title?: string;
  description?: string;
}

// Utility types for better type safety
export type ProductWithoutDates = Omit<Product, 'createdAt' | 'updatedAt'>;
export type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type ProductUpdate = Partial<ProductFormData> & { id: string };
