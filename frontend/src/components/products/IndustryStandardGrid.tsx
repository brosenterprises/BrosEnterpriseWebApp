/**
 * IndustryStandardGrid Component
 * Bulletproof responsive grid that prevents card cutoffs
 * Uses CSS Grid with proper fallbacks and overflow handling
 * Following industry best practices for responsive design
 */

import React from 'react';
import {
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';

interface IndustryStandardGridProps {
  children: React.ReactNode;
  minCardWidth?: number;
  maxColumns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  spacing?: number;
  containerMaxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const IndustryStandardGrid: React.FC<IndustryStandardGridProps> = ({
  children,
  minCardWidth = 280,
  maxColumns = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  },
  spacing = 3,
  containerMaxWidth = 'xl',
}) => {
  const theme = useTheme();
  
  // Enhanced breakpoint detection
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  // Get current max columns based on breakpoint
  const getCurrentMaxColumns = () => {
    if (isXs) return maxColumns.xs || 1;
    if (isSm) return maxColumns.sm || 2;
    if (isMd) return maxColumns.md || 3;
    if (isLg) return maxColumns.lg || 4;
    return maxColumns.xl || 5;
  };

  // Dynamic spacing based on screen size
  const getResponsiveSpacing = () => {
    if (isXs) return theme.spacing(2);
    if (isSm) return theme.spacing(2.5);
    if (isMd) return theme.spacing(3);
    return theme.spacing(spacing);
  };

  // Container padding
  const getContainerPadding = () => {
    if (isXs) return { px: 2, py: 2 };
    if (isSm) return { px: 3, py: 3 };
    return { px: 4, py: 4 };
  };

  const currentMaxColumns = getCurrentMaxColumns();
  const responsiveSpacing = getResponsiveSpacing();
  const containerPadding = getContainerPadding();

  // CSS Grid template with proper responsive behavior
  const getGridTemplate = () => {
    // For mobile, always use single column
    if (isXs) {
      return '1fr';
    }
    
    // For larger screens, use repeat with minmax for perfect responsive behavior
    return `repeat(auto-fit, minmax(${minCardWidth}px, 1fr))`;
  };

  // Fallback: if auto-fit creates too many columns, limit it
  const getGridTemplateWithLimit = () => {
    const baseTemplate = getGridTemplate();
    
    // On larger screens, we might want to limit columns
    if (isXl && currentMaxColumns) {
      return `repeat(${currentMaxColumns}, 1fr)`;
    }
    
    return baseTemplate;
  };

  return (
    <Container 
      maxWidth={containerMaxWidth} 
      sx={containerPadding}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: getGridTemplateWithLimit(),
          gap: responsiveSpacing,
          width: '100%',
          // Prevent overflow
          minWidth: 0,
          overflow: 'hidden',
          // Ensure proper alignment
          alignItems: 'start',
          // Ensure cards don't exceed container
          '& > *': {
            minWidth: 0,
            width: '100%',
            maxWidth: '100%',
          },
          // Mobile-specific optimizations
          ...(isXs && {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(2),
          }),
          // Small tablet optimizations
          ...(isSm && {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(2.5),
          }),
          // Tablet optimizations
          ...(isMd && {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: theme.spacing(3),
          }),
          // Desktop optimizations
          ...(isLg && {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: theme.spacing(3.5),
          }),
        }}
      >
        {children}
      </Box>
      
      {/* Bottom spacing for mobile navigation */}
      {isXs && (
        <Box sx={{ height: 80 }} />
      )}
    </Container>
  );
};

export default IndustryStandardGrid;
