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
import UltraResponsiveProductCard from './UltraResponsiveProductCard';
import UltraResponsiveGrid from './UltraResponsiveGrid';

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
  
  // Enhanced breakpoint detection for ultra-small screens
  const isXxs = useMediaQuery('(max-width:400px)');      // Ultra-small phones
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

  // Dynamic spacing based on screen size (including ultra-small)
  const getSpacing = () => {
    if (isXxs) return 1.5; // Ultra-tight spacing for tiny screens
    if (isXs) return 2;
    if (isSm) return 2.5;
    if (isMd) return 3;
    return 3.5;
  };

  // Container padding based on screen size (including ultra-small)
  const getContainerPadding = () => {
    if (isXxs) return { px: 1, py: 1.5 }; // Minimal padding for ultra-small
    if (isXs) return { px: 1.5, py: 2 };
    if (isSm) return { px: 2, py: 2.5 };
    if (isMd) return { px: 3, py: 3 };
    return { px: 4, py: 4 };
  };

  const gridColumns = getGridColumns();
  const spacing = getSpacing();
  const containerPadding = getContainerPadding();

  // Loading skeleton with ultra-responsive grid
  if (loading) {
    return (
      <UltraResponsiveGrid
        spacing={spacing}
        minCardWidth={{
          xs: 200,  // Ultra-small screens
          sm: 240,  // Small screens
          md: 280,  // Medium screens
          lg: 300,  // Large screens
          xl: 320,  // Extra large screens
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <Box key={`skeleton-${index}`}>
            <Skeleton
              variant="rectangular"
              height={isXxs ? 240 : isXs ? 280 : isSm ? 320 : 360}
              sx={{
                borderRadius: isXxs ? 1.5 : 2,
                mb: 1,
              }}
            />
            <Skeleton variant="text" height={isXxs ? 20 : 24} sx={{ mb: 0.5 }} />
            <Skeleton variant="text" height={isXxs ? 16 : 20} width="80%" sx={{ mb: 0.5 }} />
            <Skeleton variant="text" height={isXxs ? 16 : 20} width="60%" />
          </Box>
        ))}
      </UltraResponsiveGrid>
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
    <UltraResponsiveGrid
      spacing={spacing}
      containerMaxWidth="xl"
      minCardWidth={{
        xs: 200,  // Ultra-small screens (320-400px)
        sm: 240,  // Small screens (400-600px)
        md: 280,  // Medium screens (600-900px)
        lg: 300,  // Large screens (900-1200px)
        xl: 320,  // Extra large screens (>1200px)
      }}
    >
      {products.map((product) => (
        <UltraResponsiveProductCard
          key={product.id}
          product={product}
          onClick={onProductClick}
          onQuickView={onQuickView}
          variant={variant}
        />
      ))}
    </UltraResponsiveGrid>
  );
};

export default ResponsiveProductGrid;
