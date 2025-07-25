/**
 * UltraResponsiveGrid Component
 * Expert-level responsive grid that works perfectly from 320px to 4K screens
 * Handles ultra-small screens (320px-500px) with dynamic card sizing
 * Following industry best practices for extreme responsiveness
 */

import React from 'react';
import {
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';

interface UltraResponsiveGridProps {
  children: React.ReactNode;
  spacing?: number;
  containerMaxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  minCardWidth?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const UltraResponsiveGrid: React.FC<UltraResponsiveGridProps> = ({
  children,
  spacing = 3,
  containerMaxWidth = 'xl',
  minCardWidth = {
    xs: 240,  // Ultra-small screens
    sm: 280,  // Small screens
    md: 300,  // Medium screens
    lg: 320,  // Large screens
    xl: 340,  // Extra large screens
  },
}) => {
  const theme = useTheme();
  
  // Ultra-precise breakpoint detection
  const isXxs = useMediaQuery('(max-width:400px)');      // Ultra-small phones
  const isXs = useMediaQuery(theme.breakpoints.only('xs')); // Small phones
  const isSm = useMediaQuery(theme.breakpoints.only('sm')); // Large phones/small tablets
  const isMd = useMediaQuery(theme.breakpoints.only('md')); // Tablets
  const isLg = useMediaQuery(theme.breakpoints.only('lg')); // Desktop
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));   // Large desktop

  // Dynamic minimum card width based on screen size
  const getMinCardWidth = () => {
    if (isXxs) return Math.min(minCardWidth.xs - 40, 200); // Ultra-small adjustment
    if (isXs) return minCardWidth.xs;
    if (isSm) return minCardWidth.sm;
    if (isMd) return minCardWidth.md;
    if (isLg) return minCardWidth.lg;
    return minCardWidth.xl;
  };

  // Ultra-responsive spacing
  const getResponsiveSpacing = () => {
    if (isXxs) return theme.spacing(1.5); // Minimal spacing for ultra-small
    if (isXs) return theme.spacing(2);
    if (isSm) return theme.spacing(2.5);
    if (isMd) return theme.spacing(3);
    return theme.spacing(spacing);
  };

  // Ultra-responsive container padding
  const getContainerPadding = () => {
    if (isXxs) return { px: 1, py: 1.5 }; // Minimal padding for ultra-small
    if (isXs) return { px: 1.5, py: 2 };
    if (isSm) return { px: 2, py: 2.5 };
    if (isMd) return { px: 3, py: 3 };
    return { px: 4, py: 4 };
  };

  // Dynamic grid columns calculation
  const getGridColumns = () => {
    const currentMinWidth = getMinCardWidth();
    
    // For ultra-small screens, always single column
    if (isXxs) return '1fr';
    
    // For small screens, single column
    if (isXs) return '1fr';
    
    // For larger screens, use auto-fit with dynamic min width
    return `repeat(auto-fit, minmax(${currentMinWidth}px, 1fr))`;
  };

  // Maximum columns constraint
  const getMaxColumns = () => {
    if (isXxs || isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    if (isLg) return 4;
    return 5; // xl and above
  };

  const currentMinWidth = getMinCardWidth();
  const responsiveSpacing = getResponsiveSpacing();
  const containerPadding = getContainerPadding();
  const gridColumns = getGridColumns();
  const maxColumns = getMaxColumns();

  return (
    <Container 
      maxWidth={containerMaxWidth}
      disableGutters={isXxs} // Remove gutters on ultra-small screens
      sx={{
        ...containerPadding,
        // Ensure container never exceeds viewport
        maxWidth: isXxs ? '100vw' : undefined,
        // Prevent horizontal overflow
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: gridColumns,
          gap: responsiveSpacing,
          width: '100%',
          // Ultra-responsive constraints
          minWidth: 0,
          maxWidth: '100%',
          // Prevent overflow
          overflow: 'hidden',
          // Ensure proper alignment
          alignItems: 'start',
          justifyItems: 'stretch',
          // Ensure cards don't exceed container
          '& > *': {
            minWidth: 0,
            maxWidth: '100%',
            width: '100%',
            // Ultra-small screen optimizations
            ...(isXxs && {
              fontSize: '0.875rem',
              '& .MuiTypography-h6': {
                fontSize: '1rem',
              },
              '& .MuiTypography-body2': {
                fontSize: '0.8rem',
              },
            }),
          },
          // Responsive grid fallbacks for edge cases
          '@supports not (display: grid)': {
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
              marginBottom: responsiveSpacing,
            },
          },
          // Ultra-small screen specific overrides
          ...(isXxs && {
            gap: theme.spacing(1.5),
            '& > *': {
              minHeight: 'auto',
            },
          }),
          // Small screen optimizations
          ...(isXs && {
            gap: theme.spacing(2),
          }),
          // Medium screen optimizations
          ...(isSm && {
            gap: theme.spacing(2.5),
            gridTemplateColumns: `repeat(auto-fit, minmax(${Math.min(currentMinWidth, 250)}px, 1fr))`,
          }),
          // Large screen optimizations
          ...(isMd && {
            gap: theme.spacing(3),
            gridTemplateColumns: `repeat(auto-fit, minmax(${currentMinWidth}px, 1fr))`,
          }),
          // Desktop optimizations
          ...(isLg && {
            gap: theme.spacing(3.5),
            gridTemplateColumns: `repeat(${Math.min(maxColumns, 4)}, 1fr)`,
          }),
          // Extra large screen optimizations
          ...(isXl && {
            gap: theme.spacing(4),
            gridTemplateColumns: `repeat(${Math.min(maxColumns, 5)}, 1fr)`,
          }),
        }}
      >
        {children}
      </Box>
      
      {/* Bottom spacing for mobile navigation */}
      {(isXxs || isXs) && (
        <Box sx={{ height: isXxs ? 60 : 80 }} />
      )}
    </Container>
  );
};

export default UltraResponsiveGrid;
