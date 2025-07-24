import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import { 
  Favorite,
  FavoriteBorder,
  Share,
  MoreVert,
  ArrowForward,
} from '@mui/icons-material';

interface ResponsiveCardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: React.ReactElement;
  color?: string;
  features?: string[];
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'text' | 'outlined' | 'contained';
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  badge?: string;
  favorite?: boolean;
  onFavoriteToggle?: () => void;
  onShare?: () => void;
  elevation?: number;
  variant?: 'default' | 'outlined' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  orientation?: 'vertical' | 'horizontal';
  interactive?: boolean;
  loading?: boolean;
}

export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  title,
  description,
  image,
  icon,
  color,
  features = [],
  action,
  secondaryAction,
  badge,
  favorite = false,
  onFavoriteToggle,
  onShare,
  elevation = 2,
  variant = 'default',
  size = 'medium',
  orientation = 'vertical',
  interactive = true,
  loading = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cardSizes = {
    small: {
      padding: { xs: 1.5, sm: 2 },
      titleVariant: 'h6' as const,
      titleSize: { xs: '0.9rem', sm: '1rem' },
      descriptionVariant: 'body2' as const,
      descriptionSize: { xs: '0.8rem', sm: '0.875rem' },
    },
    medium: {
      padding: { xs: 2, sm: 2.5 },
      titleVariant: 'h5' as const,
      titleSize: { xs: '1rem', sm: '1.25rem' },
      descriptionVariant: 'body1' as const,
      descriptionSize: { xs: '0.875rem', sm: '1rem' },
    },
    large: {
      padding: { xs: 2.5, sm: 3 },
      titleVariant: 'h4' as const,
      titleSize: { xs: '1.25rem', sm: '1.5rem' },
      descriptionVariant: 'body1' as const,
      descriptionSize: { xs: '1rem', sm: '1.125rem' },
    },
  };

  const currentSize = cardSizes[size];
  const isHorizontal = orientation === 'horizontal' && !isSmallMobile;

  const cardStyles = {
    borderRadius: 3,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: interactive ? 'pointer' : 'default',
    position: 'relative' as const,
    overflow: 'hidden',
    ...(variant === 'outlined' && {
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: 'none',
    }),
    ...(variant === 'elevated' && {
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }),
    ...(interactive && {
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        ...(color && {
          boxShadow: `0 8px 25px ${alpha(color, 0.3)}`,
        }),
      },
      '&:active': {
        transform: 'translateY(-2px)',
      },
    }),
    ...(loading && {
      opacity: 0.7,
      pointerEvents: 'none' as const,
    }),
  };

  const iconStyles = {
    width: { xs: 40, sm: 48, md: 56 },
    height: { xs: 40, sm: 48, md: 56 },
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: color ? alpha(color, 0.1) : 'primary.main',
    color: color || 'primary.contrastText',
    mb: 2,
    '& svg': {
      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
    },
  };

  return (
    <Card
      elevation={elevation}
      sx={cardStyles}
    >
      {/* Badge */}
      {badge && (
        <Chip
          label={badge}
          size="small"
          color="primary"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 1,
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
          }}
        />
      )}

      {/* Media or Icon */}
      {(image || icon) && (
        <Box sx={{ 
          position: 'relative',
          ...(isHorizontal && {
            width: { md: '40%' },
            minHeight: 200,
          }),
        }}>
          {image ? (
            <CardMedia
              component="img"
              height={isHorizontal ? "200" : "160"}
              image={image}
              alt={title}
              sx={{
                objectFit: 'cover',
                ...(isHorizontal && {
                  height: '100%',
                }),
              }}
            />
          ) : icon ? (
            <Box sx={{ 
              p: currentSize.padding,
              display: 'flex',
              justifyContent: isHorizontal ? 'center' : 'flex-start',
              alignItems: isHorizontal ? 'center' : 'flex-start',
              height: isHorizontal ? '100%' : 'auto',
            }}>
              <Box sx={iconStyles}>
                {icon}
              </Box>
            </Box>
          ) : null}

          {/* Action buttons overlay */}
          {(onFavoriteToggle || onShare) && (
            <Box sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              display: 'flex',
              gap: 0.5,
            }}>
              {onFavoriteToggle && (
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    onFavoriteToggle();
                  }}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 1)',
                    },
                  }}
                >
                  {favorite ? (
                    <Favorite color="error" fontSize="small" />
                  ) : (
                    <FavoriteBorder fontSize="small" />
                  )}
                </IconButton>
              )}
              {onShare && (
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    onShare();
                  }}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 1)',
                    },
                  }}
                >
                  <Share fontSize="small" />
                </IconButton>
              )}
            </Box>
          )}
        </Box>
      )}

      {/* Content */}
      <Box sx={{ 
        display: 'flex',
        flexDirection: isHorizontal ? 'row' : 'column',
        height: isHorizontal ? 200 : 'auto',
      }}>
        <CardContent sx={{ 
          p: currentSize.padding,
          '&:last-child': {
            pb: currentSize.padding,
          },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Title */}
          <Typography
            variant={currentSize.titleVariant}
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: currentSize.titleSize,
              lineHeight: 1.3,
              color: 'text.primary',
              mb: 1,
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          {description && (
            <Typography
              variant={currentSize.descriptionVariant}
              color="text.secondary"
              sx={{
                fontSize: currentSize.descriptionSize,
                lineHeight: 1.5,
                mb: features.length > 0 ? 2 : 1,
                flex: isHorizontal ? 1 : 'none',
                display: '-webkit-box',
                WebkitLineClamp: isHorizontal ? 3 : 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </Typography>
          )}

          {/* Features */}
          {features.length > 0 && (
            <Stack 
              direction="row" 
              spacing={0.5} 
              flexWrap="wrap"
              sx={{ mb: 2 }}
            >
              {features.slice(0, isMobile ? 2 : 4).map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: { xs: '0.65rem', sm: '0.7rem' },
                    height: { xs: 24, sm: 28 },
                    mb: 0.5,
                  }}
                />
              ))}
              {features.length > (isMobile ? 2 : 4) && (
                <Chip
                  label={`+${features.length - (isMobile ? 2 : 4)}`}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: { xs: '0.65rem', sm: '0.7rem' },
                    height: { xs: 24, sm: 28 },
                    mb: 0.5,
                  }}
                />
              )}
            </Stack>
          )}
        </CardContent>

        {/* Actions */}
        {(action || secondaryAction) && (
          <CardActions sx={{ 
            p: currentSize.padding,
            pt: 0,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Box sx={{ display: 'flex', gap: 1, flex: 1 }}>
              {action && (
                <Box
                  component="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick();
                  }}
                  sx={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: color || theme.palette.primary.main,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    fontWeight: 600,
                    padding: '8px 0',
                    borderRadius: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: alpha(color || theme.palette.primary.main, 0.08),
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {action.label}
                  <ArrowForward sx={{ fontSize: '1rem' }} />
                </Box>
              )}
            </Box>

            {secondaryAction && (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  secondaryAction.onClick();
                }}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'text.primary',
                  },
                }}
              >
                <MoreVert />
              </IconButton>
            )}
          </CardActions>
        )}
      </Box>

      {/* Loading overlay */}
      {loading && (
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          zIndex: 10,
        }}>
          <Box sx={{
            width: 40,
            height: 40,
            border: `3px solid ${alpha(theme.palette.primary.main, 0.3)}`,
            borderTop: `3px solid ${theme.palette.primary.main}`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }} />
        </Box>
      )}
    </Card>
  );
};

export default ResponsiveCard;
