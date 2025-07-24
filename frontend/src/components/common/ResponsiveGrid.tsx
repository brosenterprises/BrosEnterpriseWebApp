import React from 'react';
import {
  Grid,
  Container,
  Box,
  useTheme,
  useMediaQuery,
  GridProps,
  ContainerProps,
} from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';

interface ResponsiveGridProps extends Omit<GridProps, 'container' | 'item'> {
  children: React.ReactNode;
  maxWidth?: ContainerProps['maxWidth'];
  disableGutters?: boolean;
  mobileColumns?: number;
  tabletColumns?: number;
  desktopColumns?: number;
  itemMinWidth?: number | string;
  equalHeight?: boolean;
  centerContent?: boolean;
  gap?: number | string;
  variant?: 'container' | 'grid' | 'masonry';
}

interface ResponsiveGridItemProps extends GridProps {
  children: React.ReactNode;
  mobileSpan?: number;
  tabletSpan?: number;
  desktopSpan?: number;
  minHeight?: number | string;
  aspectRatio?: string;
}

// Main responsive grid container
export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  maxWidth = 'lg',
  disableGutters = false,
  mobileColumns = 1,
  tabletColumns = 2,
  desktopColumns = 3,
  itemMinWidth,
  equalHeight = false,
  centerContent = false,
  gap,
  variant = 'grid',
  sx,
  ...props
}) => {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop, getResponsiveValue } = useResponsive();

  const currentColumns = getResponsiveValue({
    mobile: mobileColumns,
    tablet: tabletColumns,
    desktop: desktopColumns,
    default: desktopColumns,
  });

  const gridSpacing = getResponsiveValue({
    mobile: 2,
    tablet: 3,
    desktop: 4,
    default: 3,
  });

  const containerStyles = {
    width: '100%',
    ...(centerContent && {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    ...sx,
  };

  const gridStyles = {
    width: '100%',
    margin: 0,
    ...(gap && {
      gap: typeof gap === 'number' ? `${gap * 8}px` : gap,
      '& > .MuiGrid-item': {
        paddingLeft: 0,
        paddingTop: 0,
      },
    }),
    ...(equalHeight && {
      '& > .MuiGrid-item': {
        display: 'flex',
        '& > *': {
          width: '100%',
        },
      },
    }),
    ...(itemMinWidth && {
      '& > .MuiGrid-item': {
        minWidth: typeof itemMinWidth === 'number' ? `${itemMinWidth}px` : itemMinWidth,
      },
    }),
  };

  if (variant === 'container') {
    return (
      <Container maxWidth={maxWidth} disableGutters={disableGutters} sx={containerStyles}>
        {children}
      </Container>
    );
  }

  if (variant === 'masonry') {
    return (
      <Container maxWidth={maxWidth} disableGutters={disableGutters} sx={containerStyles}>
        <Box
          sx={{
            columns: {
              xs: mobileColumns,
              sm: mobileColumns,
              md: tabletColumns,
              lg: desktopColumns,
            },
            columnGap: `${gridSpacing * 8}px`,
            '& > *': {
              breakInside: 'avoid',
              marginBottom: `${gridSpacing * 8}px`,
              display: 'inline-block',
              width: '100%',
            },
            ...sx,
          }}
          {...props}
        >
          {children}
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth={maxWidth} disableGutters={disableGutters} sx={containerStyles}>
      <Grid
        container
        spacing={gap ? 0 : gridSpacing}
        sx={gridStyles}
        {...props}
      >
        {children}
      </Grid>
    </Container>
  );
};

// Responsive grid item component
export const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
  children,
  mobileSpan = 12,
  tabletSpan = 6,
  desktopSpan = 4,
  minHeight,
  aspectRatio,
  sx,
  ...props
}) => {
  const { getResponsiveValue } = useResponsive();

  const itemStyles = {
    ...(minHeight && {
      minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
    }),
    ...(aspectRatio && {
      aspectRatio,
      '& > *': {
        height: '100%',
      },
    }),
    ...sx,
  };

  return (
    <Grid
      item
      xs={mobileSpan}
      sm={mobileSpan}
      md={tabletSpan}
      lg={desktopSpan}
      xl={desktopSpan}
      sx={itemStyles}
      {...props}
    >
      {children}
    </Grid>
  );
};

// Auto-responsive grid that automatically calculates columns based on content
interface AutoGridProps {
  children: React.ReactNode;
  minItemWidth?: number;
  maxColumns?: number;
  gap?: number;
  sx?: any;
}

export const AutoGrid: React.FC<AutoGridProps> = ({
  children,
  minItemWidth = 280,
  maxColumns = 4,
  gap = 3,
  sx,
}) => {
  const theme = useTheme();
  const { screenWidth, isMobile } = useResponsive();

  const calculateColumns = () => {
    if (isMobile) return 1;
    
    const availableWidth = screenWidth - (theme.spacing(6) as number); // Account for container padding
    const itemWidthWithGap = minItemWidth + (gap * 8);
    const calculatedColumns = Math.floor(availableWidth / itemWidthWithGap);
    
    return Math.min(Math.max(calculatedColumns, 1), maxColumns);
  };

  const columns = calculateColumns();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap * 8}px`,
        width: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

// Staggered grid for dynamic layouts
interface StaggeredGridProps {
  children: React.ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: number;
  staggerDelay?: number;
  sx?: any;
}

export const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 3,
  staggerDelay = 100,
  sx,
}) => {
  const { getResponsiveValue } = useResponsive();

  const currentColumns = getResponsiveValue({
    mobile: columns.mobile || 1,
    tablet: columns.tablet || 2,
    desktop: columns.desktop || 3,
    default: 3,
  });

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
        gap: `${gap * 8}px`,
        width: '100%',
        '& > *': {
          animation: 'fadeInUp 0.6s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        },
        '& > *:nth-of-type(1)': { animationDelay: `${staggerDelay * 0}ms` },
        '& > *:nth-of-type(2)': { animationDelay: `${staggerDelay * 1}ms` },
        '& > *:nth-of-type(3)': { animationDelay: `${staggerDelay * 2}ms` },
        '& > *:nth-of-type(4)': { animationDelay: `${staggerDelay * 3}ms` },
        '& > *:nth-of-type(5)': { animationDelay: `${staggerDelay * 4}ms` },
        '& > *:nth-of-type(6)': { animationDelay: `${staggerDelay * 5}ms` },
        '@keyframes fadeInUp': {
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

// Responsive section wrapper
interface ResponsiveSectionProps {
  children: React.ReactNode;
  maxWidth?: ContainerProps['maxWidth'];
  padding?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  margin?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  backgroundColor?: string;
  fullWidth?: boolean;
  centerContent?: boolean;
  sx?: any;
}

export const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  children,
  maxWidth = 'lg',
  padding = { mobile: 2, tablet: 3, desktop: 4 },
  margin = { mobile: 2, tablet: 3, desktop: 4 },
  backgroundColor,
  fullWidth = false,
  centerContent = false,
  sx,
}) => {
  const { getResponsiveValue } = useResponsive();

  const sectionPadding = getResponsiveValue({
    mobile: padding.mobile || 2,
    tablet: padding.tablet || 3,
    desktop: padding.desktop || 4,
    default: 3,
  });

  const sectionMargin = getResponsiveValue({
    mobile: margin.mobile || 2,
    tablet: margin.tablet || 3,
    desktop: margin.desktop || 4,
    default: 3,
  });

  const sectionStyles = {
    py: sectionPadding,
    mb: sectionMargin,
    ...(backgroundColor && { backgroundColor }),
    ...(centerContent && {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center' as const,
    }),
    ...sx,
  };

  if (fullWidth) {
    return (
      <Box sx={sectionStyles}>
        <Container maxWidth={maxWidth}>
          {children}
        </Container>
      </Box>
    );
  }

  return (
    <Container maxWidth={maxWidth} sx={sectionStyles}>
      {children}
    </Container>
  );
};

export default ResponsiveGrid;
