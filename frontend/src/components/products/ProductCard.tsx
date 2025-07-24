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
} from '@mui/material';
import {
  Visibility as ViewIcon,
  ShoppingCart as CartIcon,
  Favorite as FavoriteIcon,
  CheckCircle as InStockIcon,
  Cancel as OutOfStockIcon,
} from '@mui/icons-material';
import { Product, ProductCardProps } from '../../types/product.types';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
  showPrice = false,
  showDescription = true,
  variant = 'default'
}) => {
  const theme = useTheme();

  const handleCardClick = () => {
    if (onClick) {
      onClick(product);
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

  const cardHeight = variant === 'compact' ? 320 : variant === 'detailed' ? 440 : 380;

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
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
          '& .product-actions': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '& .product-image': {
            transform: 'scale(1.05)',
          }
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
          height: variant === 'compact' ? 180 : 220, // Fixed height container
          p: 1, // Padding around image
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          className="product-image"
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain', // Ensure full image is visible
            objectPosition: 'center',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
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
            bottom: 8,
            right: 8,
            display: 'flex',
            gap: 0.5,
            opacity: 0,
            transform: 'translateY(10px)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Tooltip title="Quick View">
            <IconButton
              size="small"
              sx={{
                backgroundColor: alpha(theme.palette.background.paper, 0.9),
                '&:hover': {
                  backgroundColor: theme.palette.background.paper,
                }
              }}
            >
              <ViewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to Favorites">
            <IconButton
              size="small"
              sx={{
                backgroundColor: alpha(theme.palette.background.paper, 0.9),
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
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            fontSize: '1rem',
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
