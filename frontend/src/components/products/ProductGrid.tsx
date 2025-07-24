/**
 * ProductGrid Component
 * Responsive grid layout for displaying products
 */

import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Skeleton,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ProductGridProps } from '../../types/product.types';
import ProductCard from './ProductCard';

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
  onProductClick,
  columns = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4
  }
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Loading skeleton
  if (loading) {
    return (
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid 
              item 
              xs={columns.xs} 
              sm={columns.sm} 
              md={columns.md} 
              lg={columns.lg} 
              xl={columns.xl}
              key={index}
            >
              <Box>
                <Skeleton
                  variant="rectangular"
                  height={180}
                  sx={{ borderRadius: 2, mb: 1 }}
                />
                <Skeleton variant="text" height={28} sx={{ mb: 0.5 }} />
                <Skeleton variant="text" height={20} width="80%" sx={{ mb: 1 }} />
                <Skeleton variant="text" height={16} width="60%" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  // Empty state
  if (!products || products.length === 0) {
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: theme.palette.text.secondary,
              fontWeight: 600,
            }}
          >
            No Products Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 400,
            }}
          >
            We couldn't find any products matching your criteria. 
            Please try adjusting your search or browse our categories.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={isMobile ? 2 : 3}>
        {products.map((product) => (
          <Grid
            item
            xs={columns.xs}
            sm={columns.sm}
            md={columns.md}
            lg={columns.lg}
            xl={columns.xl}
            key={product.id}
          >
            <ProductCard
              product={product}
              onClick={onProductClick}
              showDescription={true}
              variant={isMobile ? 'compact' : 'default'}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
