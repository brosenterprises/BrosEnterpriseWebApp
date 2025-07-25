/**
 * ResponsiveProductCard Component
 * Mobile-first responsive product card with optimized layouts for all screen sizes
 * Following industry standards for mobile UX and accessibility
 */

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
  useMediaQuery,
  Stack,
  Button,
} from '@mui/material';
import {
  Visibility as ViewIcon,
  ShoppingCart as CartIcon,
  Favorite as FavoriteIcon,
  CheckCircle as InStockIcon,
  Cancel as OutOfStockIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import { Product } from '../../types/product.types';
import OptimizedImage from '../common/OptimizedImage';

interface ResponsiveProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  variant?: 'standard' | 'compact' | 'detailed';
  isCompact?: boolean;
}

const ResponsiveProductCard: React.FC<ResponsiveProductCardProps> = ({
  product,
  onClick,
  onQuickView,
  variant = 'standard',
  isCompact = false,
}) => {
  const theme = useTheme();
  
  // Enhanced breakpoint detection
  const isXs = useMediaQuery(theme.breakpoints.only('xs')); // < 600px
  const isSm = useMediaQuery(theme.breakpoints.only('sm')); // 600px - 900px
  const isMd = useMediaQuery(theme.breakpoints.only('md')); // 900px - 1200px
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

  // Dynamic card height based on screen size and variant
  const getCardHeight = () => {
    if (isXs) return variant === 'compact' ? 280 : 320;
    if (isSm) return variant === 'compact' ? 320 : 360;
    if (isMd) return variant === 'compact' ? 360 : 400;
    return variant === 'compact' ? 380 : 420;
  };

  // Image container height based on screen size
  const getImageHeight = () => {
    if (isXs) return 160;
    if (isSm) return 180;
    if (isMd) return 200;
    return 220;
  };

  const cardHeight = getCardHeight();
  const imageHeight = getImageHeight();

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
        borderRadius: isXs ? 2 : 3,
        boxShadow: isXs 
          ? '0 2px 8px rgba(0,0,0,0.08)' 
          : theme.shadows[2],
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        '&:hover': {
          transform: isXs ? 'translateY(-1px)' : 'translateY(-4px)',
          boxShadow: isXs 
            ? '0 4px 16px rgba(0,0,0,0.12)' 
            : theme.shadows[8],
          '& .product-actions': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '& .product-image': {
            transform: isXs ? 'scale(1.02)' : 'scale(1.05)',
          }
        },
        // Always show action buttons on mobile for better UX
        '& .product-actions': {
          opacity: isMobile ? 1 : 0,
          transform: isMobile ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.3s ease-in-out',
        }
      }}
      onClick={handleCardClick}
    >
      {/* Product Image Container */}
      <Box
        sx={{
          position: 'relative',
          height: imageHeight,
          overflow: 'hidden',
          backgroundColor: alpha(theme.palette.grey[100], 0.5),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: isXs ? 1 : 1.5,
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

        {/* Brand Badge */}
        {product.brand && (
          <Chip
            label={product.brand}
            size="small"
            sx={{
              position: 'absolute',
              top: isXs ? 6 : 8,
              left: isXs ? 6 : 8,
              fontSize: isXs ? '0.7rem' : '0.75rem',
              height: isXs ? 20 : 24,
              backgroundColor: alpha(theme.palette.primary.main, 0.9),
              color: 'white',
              fontWeight: 600,
              '& .MuiChip-label': {
                px: isXs ? 0.5 : 1,
              }
            }}
          />
        )}

        {/* Quick View Button - Desktop Only */}
        {!isMobile && onQuickView && (
          <IconButton
            className="product-actions"
            onClick={handleQuickView}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              backdropFilter: 'blur(4px)',
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

      {/* Product Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: isXs ? 1.5 : 2,
          '&:last-child': {
            pb: isXs ? 1.5 : 2,
          }
        }}
      >
        {/* Product Name */}
        <Typography
          variant={isXs ? "subtitle2" : "subtitle1"}
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            mb: 0.5,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontSize: isXs ? '0.9rem' : '1rem',
            minHeight: isXs ? '2.6rem' : '2.8rem',
          }}
        >
          {product.name}
        </Typography>

        {/* Product Description */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 1,
            display: '-webkit-box',
            WebkitLineClamp: isXs ? 2 : 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.4,
            fontSize: isXs ? '0.8rem' : '0.875rem',
            flexGrow: 1,
          }}
        >
          {product.description}
        </Typography>

        {/* Product Details */}
        <Box sx={{ mt: 'auto' }}>
          {/* Subcategory */}
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.disabled,
              fontSize: isXs ? '0.7rem' : '0.75rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              mb: 1,
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
            sx={{ mt: 1 }}
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
                fontSize: isXs ? '0.7rem' : '0.75rem',
                height: isXs ? 20 : 24,
                '& .MuiChip-icon': {
                  fontSize: isXs ? '0.8rem' : '1rem',
                },
                '& .MuiChip-label': {
                  px: isXs ? 0.5 : 1,
                }
              }}
            />

            {/* Mobile Actions */}
            {isMobile && (
              <Stack direction="row" spacing={0.5}>
                {onQuickView && (
                  <IconButton
                    onClick={handleQuickView}
                    size="small"
                    sx={{
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      width: isXs ? 32 : 36,
                      height: isXs ? 32 : 36,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.2),
                      }
                    }}
                  >
                    <InfoIcon fontSize={isXs ? "small" : "medium"} />
                  </IconButton>
                )}
              </Stack>
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResponsiveProductCard;
