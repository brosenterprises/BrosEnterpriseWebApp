/**
 * ProductCard Component
 * Reusable product card following Material Design principles
 */

import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
  useMediaQuery,
} from '@mui/material';
import {
  Visibility as ViewIcon,
  ShoppingCart as CartIcon,
  Favorite as FavoriteIcon,
  CheckCircle as InStockIcon,
  Cancel as OutOfStockIcon,
} from '@mui/icons-material';
import { Product, ProductCardProps } from '../../types/product.types';
import OptimizedImage from '../common/OptimizedImage';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
  onQuickView,
  showPrice = false,
  showDescription = true,
  variant = 'default'
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // Mobile-optimized card heights and spacing
  const cardHeight = isMobile 
    ? (variant === 'compact' ? 300 : 340)
    : (variant === 'compact' ? 320 : variant === 'detailed' ? 440 : 380);

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
        borderRadius: isMobile ? 2 : 3,
        boxShadow: isMobile 
          ? '0 2px 8px rgba(0,0,0,0.1)' 
          : theme.shadows[4],
        '&:hover': {
          transform: isMobile ? 'translateY(-2px)' : 'translateY(-4px)',
          boxShadow: isMobile 
            ? '0 4px 16px rgba(0,0,0,0.15)' 
            : theme.shadows[8],
          '& .product-actions': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '& .product-image': {
            transform: isMobile ? 'scale(1.02)' : 'scale(1.05)',
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
      {/* Product Image */}
      <Box 
        sx={{ 
          position: 'relative', 
          overflow: 'hidden', 
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: isMobile ? 160 : (variant === 'compact' ? 180 : 220),
          p: isMobile ? 0.5 : 1, // Less padding on mobile for more image space
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
            objectPosition: 'center',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: isMobile ? 'scale(1.02)' : 'scale(1.05)',
            }
          }}
          showLoadingSkeleton={true}
          showErrorFallback={true}
        />
        
        {/* Availability Badge */}
        <Chip
          icon={getAvailabilityIcon(product.availability)}
          label={product.availability.replace('-', ' ').toUpperCase()}
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: alpha(getAvailabilityColor(product.availability), 0.9),
            color: 'white',
            fontWeight: 600,
            fontSize: '0.7rem',
          }}
        />

        {/* Brand Badge */}
        {product.brand && (
          <Chip
            label={product.brand}
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: alpha(theme.palette.primary.main, 0.9),
              color: 'white',
              fontWeight: 500,
              fontSize: '0.7rem',
            }}
          />
        )}

        {/* Action Buttons */}
        <Box
          className="product-actions"
          sx={{
            position: 'absolute',
            bottom: isMobile ? 4 : 8,
            right: isMobile ? 4 : 8,
            display: 'flex',
            gap: isMobile ? 0.5 : 0.5,
            opacity: isMobile ? 1 : 0, // Always visible on mobile
            transform: isMobile ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Tooltip title="Quick View">
            <IconButton
              size={isMobile ? "medium" : "small"}
              onClick={handleQuickView}
              sx={{
                backgroundColor: alpha(theme.palette.background.paper, 0.9),
                minWidth: isMobile ? 44 : 'auto', // Better touch targets
                minHeight: isMobile ? 44 : 'auto',
                '&:hover': {
                  backgroundColor: theme.palette.background.paper,
                }
              }}
            >
              <ViewIcon fontSize={isMobile ? "medium" : "small"} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to Favorites">
            <IconButton
              size={isMobile ? "medium" : "small"}
              sx={{
                backgroundColor: alpha(theme.palette.background.paper, 0.9),
                minWidth: isMobile ? 44 : 'auto', // Better touch targets
                minHeight: isMobile ? 44 : 'auto',
                '&:hover': {
                  backgroundColor: theme.palette.background.paper,
                }
              }}
            >
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Product Content */}
      <CardContent sx={{ 
        flexGrow: 1, 
        p: isMobile ? 1.5 : 2,
        pb: isMobile ? 1 : 2, // Less bottom padding on mobile for action buttons
      }}>
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          component="h3"
          sx={{
            fontWeight: 600,
            fontSize: isMobile ? '0.95rem' : '1rem',
            lineHeight: 1.3,
            mb: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            color: theme.palette.text.primary,
          }}
        >
          {product.name}
        </Typography>

        {showDescription && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: variant === 'detailed' ? 3 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.4,
            }}
          >
            {product.description}
          </Typography>
        )}

        {/* Features */}
        {product.features && product.features.length > 0 && variant !== 'compact' && (
          <Box sx={{ mb: 1.5 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {product.features.slice(0, 3).map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: '0.65rem',
                    height: 20,
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    color: theme.palette.primary.main,
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Price */}
        {showPrice && product.price && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              mt: 'auto',
            }}
          >
            {product.price.min && product.price.max
              ? `₹${product.price.min} - ₹${product.price.max}`
              : product.price.min
              ? `₹${product.price.min}`
              : 'Price on Request'
            }
          </Typography>
        )}

        {/* Category & Subcategory */}
        <Box sx={{ mt: 'auto', pt: 1 }}>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            {product.subcategory || product.category}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
