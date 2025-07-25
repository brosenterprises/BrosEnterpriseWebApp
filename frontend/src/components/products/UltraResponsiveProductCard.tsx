/**
 * UltraResponsiveProductCard Component
 * Expert-level responsive product card that works from 320px to 4K screens
 * Handles ultra-small screens with dynamic sizing and content optimization
 * Following industry best practices for extreme mobile responsiveness
 */

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  IconButton,
  useTheme,
  alpha,
  useMediaQuery,
  Stack,
} from '@mui/material';
import {
  Visibility as ViewIcon,
  CheckCircle as InStockIcon,
  Cancel as OutOfStockIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import { Product } from '../../types/product.types';
import OptimizedImage from '../common/OptimizedImage';

interface UltraResponsiveProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  variant?: 'standard' | 'compact' | 'detailed';
}

const UltraResponsiveProductCard: React.FC<UltraResponsiveProductCardProps> = ({
  product,
  onClick,
  onQuickView,
  variant = 'standard',
}) => {
  const theme = useTheme();
  
  // Ultra-precise breakpoint detection
  const isXxs = useMediaQuery('(max-width:400px)');      // Ultra-small phones (320-400px)
  const isXs = useMediaQuery(theme.breakpoints.only('xs')); // Small phones (400-600px)
  const isSm = useMediaQuery(theme.breakpoints.only('sm')); // Large phones/tablets (600-900px)
  const isMd = useMediaQuery(theme.breakpoints.only('md')); // Tablets (900-1200px)
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // < 900px

  const handleCardClick = () => {
    if (onClick) {
      onClick(product);
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  const getAvailabilityColor = (availability: Product['availability']) => {
    switch (availability) {
      case 'in-stock':
        return theme.palette.success.main;
      case 'out-of-stock':
        return theme.palette.error.main;
      case 'limited':
        return theme.palette.warning.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const getAvailabilityIcon = (availability: Product['availability']) => {
    switch (availability) {
      case 'in-stock':
        return <InStockIcon fontSize="small" />;
      case 'out-of-stock':
        return <OutOfStockIcon fontSize="small" />;
      default:
        return <InStockIcon fontSize="small" />;
    }
  };

  // Ultra-responsive card height
  const getCardHeight = () => {
    if (isXxs) return variant === 'compact' ? 240 : 280; // Ultra-compact for tiny screens
    if (isXs) return variant === 'compact' ? 260 : 300;
    if (isSm) return variant === 'compact' ? 300 : 340;
    if (isMd) return variant === 'compact' ? 340 : 380;
    return variant === 'compact' ? 360 : 400;
  };

  // Ultra-responsive image height
  const getImageHeight = () => {
    if (isXxs) return 120; // Very compact for ultra-small
    if (isXs) return 140;
    if (isSm) return 160;
    if (isMd) return 180;
    return 200;
  };

  // Ultra-responsive typography
  const getTypographyVariants = () => {
    if (isXxs) return {
      title: 'body2',
      description: 'caption',
      subcategory: 'caption',
    };
    if (isXs) return {
      title: 'subtitle2',
      description: 'body2',
      subcategory: 'caption',
    };
    return {
      title: 'subtitle1',
      description: 'body2',
      subcategory: 'caption',
    };
  };

  // Ultra-responsive spacing
  const getSpacing = () => {
    if (isXxs) return {
      cardPadding: 1,
      imagePadding: 0.5,
      contentPadding: 1,
      chipHeight: 18,
      iconSize: 16,
    };
    if (isXs) return {
      cardPadding: 1.5,
      imagePadding: 1,
      contentPadding: 1.5,
      chipHeight: 20,
      iconSize: 18,
    };
    return {
      cardPadding: 2,
      imagePadding: 1.5,
      contentPadding: 2,
      chipHeight: 24,
      iconSize: 20,
    };
  };

  const cardHeight = getCardHeight();
  const imageHeight = getImageHeight();
  const typography = getTypographyVariants();
  const spacing = getSpacing();

  return (
    <Card
      sx={{
        height: cardHeight,
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: isXxs ? 1.5 : 2,
        boxShadow: isXxs 
          ? '0 1px 4px rgba(0,0,0,0.08)' 
          : theme.shadows[2],
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        // Ultra-responsive hover effects
        '&:hover': {
          transform: isXxs ? 'none' : isXs ? 'translateY(-1px)' : 'translateY(-4px)',
          boxShadow: isXxs 
            ? '0 2px 8px rgba(0,0,0,0.12)' 
            : isXs 
            ? '0 4px 12px rgba(0,0,0,0.15)'
            : theme.shadows[8],
          '& .product-actions': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '& .product-image': {
            transform: isXxs ? 'scale(1.01)' : isXs ? 'scale(1.02)' : 'scale(1.05)',
          }
        },
        // Always show actions on mobile
        '& .product-actions': {
          opacity: isMobile ? 1 : 0,
          transform: isMobile ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.3s ease-in-out',
        }
      }}
      onClick={handleCardClick}
    >
      {/* Ultra-Responsive Image Container */}
      <Box
        sx={{
          position: 'relative',
          height: imageHeight,
          overflow: 'hidden',
          backgroundColor: alpha(theme.palette.grey[100], 0.5),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: spacing.imagePadding,
        }}
      >
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="product-image"
          objectFit="contain"
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            transition: 'transform 0.3s ease-in-out',
          }}
          showLoadingSkeleton={true}
          showErrorFallback={true}
        />

        {/* Ultra-Responsive Brand Badge */}
        {product.brand && (
          <Chip
            label={product.brand}
            size="small"
            sx={{
              position: 'absolute',
              top: isXxs ? 4 : 6,
              left: isXxs ? 4 : 6,
              fontSize: isXxs ? '0.6rem' : '0.7rem',
              height: spacing.chipHeight,
              backgroundColor: alpha(theme.palette.primary.main, 0.9),
              color: 'white',
              fontWeight: 600,
              '& .MuiChip-label': {
                px: isXxs ? 0.5 : 1,
              }
            }}
          />
        )}

        {/* Quick View - Desktop Only */}
        {!isMobile && onQuickView && (
          <IconButton
            className="product-actions"
            onClick={handleQuickView}
            sx={{
              position: 'absolute',
              top: 6,
              right: 6,
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              backdropFilter: 'blur(4px)',
              width: 32,
              height: 32,
              '&:hover': {
                backgroundColor: theme.palette.background.paper,
              }
            }}
            size="small"
          >
            <ViewIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      {/* Ultra-Responsive Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: spacing.contentPadding,
          '&:last-child': {
            pb: spacing.contentPadding,
          }
        }}
      >
        {/* Product Name */}
        <Typography
          variant={typography.title as any}
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            mb: 0.5,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: isXxs ? 2 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontSize: isXxs ? '0.85rem' : isXs ? '0.9rem' : '1rem',
            minHeight: isXxs ? '2.2rem' : '2.6rem',
          }}
        >
          {product.name}
        </Typography>

        {/* Product Description */}
        <Typography
          variant={typography.description as any}
          sx={{
            color: theme.palette.text.secondary,
            mb: 1,
            display: '-webkit-box',
            WebkitLineClamp: isXxs ? 1 : isXs ? 2 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.4,
            fontSize: isXxs ? '0.75rem' : '0.8rem',
            flexGrow: 1,
          }}
        >
          {product.description}
        </Typography>

        {/* Bottom Section */}
        <Box sx={{ mt: 'auto' }}>
          {/* Subcategory */}
          <Typography
            variant={typography.subcategory as any}
            sx={{
              color: theme.palette.text.disabled,
              fontSize: isXxs ? '0.65rem' : '0.7rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              mb: 0.5,
              display: 'block',
            }}
          >
            {product.subcategory}
          </Typography>

          {/* Availability and Actions */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 0.5 }}
          >
            {/* Availability */}
            <Chip
              icon={getAvailabilityIcon(product.availability)}
              label={
                product.availability === 'in-stock' ? 'In Stock' :
                product.availability === 'out-of-stock' ? 'Out of Stock' :
                'Limited'
              }
              size="small"
              sx={{
                backgroundColor: alpha(getAvailabilityColor(product.availability), 0.1),
                color: getAvailabilityColor(product.availability),
                fontWeight: 600,
                fontSize: isXxs ? '0.65rem' : '0.7rem',
                height: spacing.chipHeight,
                '& .MuiChip-icon': {
                  fontSize: spacing.iconSize,
                },
                '& .MuiChip-label': {
                  px: isXxs ? 0.5 : 1,
                }
              }}
            />

            {/* Mobile Actions */}
            {isMobile && onQuickView && (
              <IconButton
                onClick={handleQuickView}
                size="small"
                sx={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  width: isXxs ? 28 : 32,
                  height: isXxs ? 28 : 32,
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  }
                }}
              >
                <InfoIcon fontSize={isXxs ? "small" : "medium"} />
              </IconButton>
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UltraResponsiveProductCard;
