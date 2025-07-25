/**
 * ResponsiveProductGrid Component
 * Industry-standard responsive grid with mobile-first design
 * Optimized for all device sizes with professional spacing and layout
 * Uses CSS Grid for perfect responsive behavior without card cutoffs
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
  Stack,
} from '@mui/material';
import { ProductGridProps } from '../../types/product.types';
import ResponsiveProductCard from './ResponsiveProductCard';
import IndustryStandardGrid from './IndustryStandardGrid';

interface ResponsiveProductGridProps extends ProductGridProps {
  variant?: 'standard' | 'compact' | 'detailed';
  showEmptyState?: boolean;
  emptyStateMessage?: string;
}

const ResponsiveProductGrid: React.FC<ResponsiveProductGridProps> = ({
  products,
  loading = false,
  onProductClick,
  onQuickView,
  variant = 'standard',
  showEmptyState = true,
  emptyStateMessage = 'No products found',
  columns = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  }
}) => {
  const theme = useTheme();
  
  // Enhanced breakpoint detection
  const isXs = useMediaQuery(theme.breakpoints.only('xs')); // < 600px
  const isSm = useMediaQuery(theme.breakpoints.only('sm')); // 600px - 900px
  const isMd = useMediaQuery(theme.breakpoints.only('md')); // 900px - 1200px
  const isLg = useMediaQuery(theme.breakpoints.only('lg')); // 1200px - 1536px
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));   // > 1536px
  
  // CSS Grid responsive columns (industry standard approach)
  const getGridColumns = () => {
    if (isXs) return 'repeat(1, 1fr)'; // 1 column on mobile
    if (isSm) return 'repeat(2, 1fr)'; // 2 columns on small tablets
    if (isMd) return 'repeat(3, 1fr)'; // 3 columns on tablets
    if (isLg) return 'repeat(4, 1fr)'; // 4 columns on desktop
    return 'repeat(auto-fit, minmax(280px, 1fr))'; // Auto-fit on large screens
  };

  // Dynamic spacing based on screen size
  const getSpacing = () => {
    if (isXs) return 2; // Tighter spacing on mobile
    if (isSm) return 2.5;
    if (isMd) return 3;
    return 3.5; // More spacing on larger screens
  };

  // Container padding based on screen size
  const getContainerPadding = () => {
    if (isXs) return { px: 2, py: 2 };
    if (isSm) return { px: 3, py: 3 };
    return { px: 4, py: 4 };
  };

  const gridColumns = getGridColumns();
  const spacing = getSpacing();
  const containerPadding = getContainerPadding();

  // Loading skeleton with industry standard grid
  if (loading) {
    return (
      <IndustryStandardGrid
        minCardWidth={280}
        spacing={spacing}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <Box key={`skeleton-${index}`}>
            <Skeleton
              variant="rectangular"
              height={isXs ? 280 : isSm ? 320 : 360}
              sx={{
                borderRadius: 2,
                mb: 1,
              }}
            />
            <Skeleton variant="text" height={24} sx={{ mb: 0.5 }} />
            <Skeleton variant="text" height={20} width="80%" sx={{ mb: 0.5 }} />
            <Skeleton variant="text" height={20} width="60%" />
          </Box>
        ))}
      </IndustryStandardGrid>
    );
  }

  // Empty state with proper container
  if (!products || products.length === 0) {
    if (!showEmptyState) return null;
    
    return (
      <Container maxWidth="xl" sx={containerPadding}>
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              mb: 1,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            {emptyStateMessage}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.disabled,
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            Try adjusting your filters or search terms
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <IndustryStandardGrid
      minCardWidth={280}
      maxColumns={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      }}
      spacing={spacing}
      containerMaxWidth="xl"
    >
      {products.map((product) => (
        <ResponsiveProductCard
          key={product.id}
          product={product}
          onClick={onProductClick}
          onQuickView={onQuickView}
          variant={variant}
          isCompact={isXs || isSm}
        />
      ))}
    </IndustryStandardGrid>
  );
};

export default ResponsiveProductGrid;
