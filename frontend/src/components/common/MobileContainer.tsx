/**
 * MobileContainer Component
 * Mobile-optimized container with proper spacing and responsive behavior
 * Following industry standards for mobile-first design
 */

import React from 'react';
import {
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

interface MobileContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  disableGutters?: boolean;
  sx?: any;
}

const MobileContainer: React.FC<MobileContainerProps> = ({
  children,
  maxWidth = 'xl',
  disableGutters = false,
  sx = {},
}) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));

  // Mobile-first responsive padding
  const getResponsivePadding = () => {
    if (disableGutters) return { px: 0 };
    
    if (isXs) return { px: 2 }; // 16px on mobile
    if (isSm) return { px: 3 }; // 24px on small tablets
    if (isMd) return { px: 4 }; // 32px on tablets
    return { px: 6 }; // 48px on desktop
  };

  const responsivePadding = getResponsivePadding();

  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        ...responsivePadding,
        // Ensure proper mobile viewport handling
        minWidth: 0,
        width: '100%',
        // Prevent horizontal overflow
        overflowX: 'hidden',
        ...sx,
      }}
    >
      <Box
        sx={{
          // Ensure content doesn't exceed container
          width: '100%',
          minWidth: 0,
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default MobileContainer;
