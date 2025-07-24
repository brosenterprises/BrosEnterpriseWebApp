/**
 * CategoryPage Component
 * Template for product category pages
 */

import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  Chip,
  useTheme,
  alpha,
  Breadcrumbs,
  Link,
  Divider,
  useMediaQuery,
} from '@mui/material';
import {
  Home as HomeIcon,
  NavigateNext as NavigateNextIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CategoryPageProps, Product } from '../../types/product.types';
import { getProductsByCategory, getCategoryInfo, getProductsBySubcategory } from '../../data/products.data';
import { usePageTitle, PAGE_CONFIGS } from '../../hooks/usePageTitle';
import ProductGrid from './ProductGrid';
import ProductQuickView from './ProductQuickView';

const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  title,
  description
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const categoryInfo = getCategoryInfo(category);
  const allProducts = getProductsByCategory(category);
  
  // Set up page SEO (static title)
  const pageConfig = PAGE_CONFIGS[category === 'tiling_solutions' ? 'tiling' : category] || PAGE_CONFIGS.home;
  usePageTitle({
    description: description || pageConfig.description,
    keywords: pageConfig.keywords
  });
  
  const subcategories = useMemo(() => {
    const subs = Array.from(new Set(
      allProducts
        .map(product => product.subcategory)
        .filter(Boolean)
    )) as string[];
    return ['all', ...subs];
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    if (selectedSubcategory === 'all') {
      return allProducts;
    }
    return getProductsBySubcategory(category, selectedSubcategory);
  }, [category, selectedSubcategory, allProducts]);

  const handleSubcategoryChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedSubcategory(newValue);
  };

  const handleProductClick = (product: Product) => {
    // Navigate to product detail page (to be implemented)
    console.log('Product clicked:', product);
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setQuickViewOpen(true);
  };

  const handleQuickViewClose = () => {
    setQuickViewOpen(false);
    // Small delay to allow animation to complete before clearing product
    setTimeout(() => setQuickViewProduct(null), 300);
  };

  const IconComponent = categoryInfo.icon;

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
      {/* Compact Header Section */}
      <Box
        sx={{
          py: { xs: 2, md: 3 },
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="xl">
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            sx={{ 
              mb: isMobile ? 1.5 : 2,
              '& .MuiBreadcrumbs-separator': {
                mx: isMobile ? 0.5 : 1,
              },
              '& .MuiBreadcrumbs-li': {
                fontSize: isMobile ? '0.875rem' : '1rem',
              }
            }}
          >
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                }
              }}
            >
              <HomeIcon fontSize="small" />
              Home
            </Link>
            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500, fontSize: '0.875rem' }}>
              {title || categoryInfo.displayName}
            </Typography>
          </Breadcrumbs>

          {/* Compact Category Header */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: isMobile ? 1.5 : 2, 
            mb: isMobile ? 1.5 : 1 
          }}>
            <Box
              sx={{
                p: isMobile ? 0.75 : 1,
                borderRadius: 2,
                backgroundColor: alpha(categoryInfo.color, 0.1),
                color: categoryInfo.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconComponent sx={{ fontSize: isMobile ? '1.25rem' : '1.5rem' }} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                component="h1"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: isMobile ? '1.1rem' : '1.5rem',
                  lineHeight: 1.2,
                }}
              >
                {title || categoryInfo.displayName}
              </Typography>
            </Box>
            {/* Product Count */}
            <Chip
              label={`${allProducts.length} Products`}
              size="small"
              sx={{
                backgroundColor: alpha(categoryInfo.color, 0.1),
                color: categoryInfo.color,
                fontWeight: 500,
                fontSize: '0.75rem',
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Subcategory Filters */}
      {subcategories.length > 1 && (
        <Container maxWidth="xl" sx={{ mt: isMobile ? 2 : 3 }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
            }}
          >
            <Tabs
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 500,
                  minHeight: 48,
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: categoryInfo.color,
                },
              }}
            >
              {subcategories.map((subcategory) => (
                <Tab
                  key={subcategory}
                  label={subcategory === 'all' ? 'All Products' : subcategory}
                  value={subcategory}
                  sx={{
                    color: selectedSubcategory === subcategory 
                      ? categoryInfo.color 
                      : theme.palette.text.secondary,
                  }}
                />
              ))}
            </Tabs>
          </Paper>
        </Container>
      )}

      {/* Products Grid */}
      <Container maxWidth="xl" sx={{ py: isMobile ? 2 : 4 }}>
        {selectedSubcategory !== 'all' && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              {selectedSubcategory}
            </Typography>
            <Divider />
          </Box>
        )}
        
        <ProductGrid
          products={filteredProducts}
          onProductClick={handleProductClick}
          onQuickView={handleQuickView}
          columns={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4
          }}
        />
      </Container>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        open={quickViewOpen}
        onClose={handleQuickViewClose}
      />
    </Box>
  );
};

export default CategoryPage;
