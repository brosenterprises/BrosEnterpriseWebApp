/**
 * OptimizedImage Component
 * Professional image component with loading states, fallbacks, and optimization
 * Following industry standards for web performance and user experience
 */

import React, { useState, useEffect } from 'react';
import { Box, Skeleton, useTheme, alpha } from '@mui/material';
import { BrokenImage as BrokenImageIcon } from '@mui/icons-material';
import { getImagePath, getFallbackImagePath } from '../../utils/imagePaths';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  borderRadius?: string | number;
  loading?: 'lazy' | 'eager';
  className?: string;
  onClick?: () => void;
  sx?: any;
  showLoadingSkeleton?: boolean;
  showErrorFallback?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  width = '100%',
  height = 'auto',
  objectFit = 'contain',
  borderRadius = 0,
  loading = 'lazy',
  className,
  onClick,
  sx = {},
  showLoadingSkeleton = true,
  showErrorFallback = true,
}) => {
  const theme = useTheme();
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [currentSrc, setCurrentSrc] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    
    const loadImage = async () => {
      setImageState('loading');
      
      try {
        // Get the optimized image path
        const imagePath = getImagePath(src);
        
        // Create a new image to test loading
        const img = new Image();
        
        img.onload = () => {
          if (isMounted) {
            setCurrentSrc(imagePath);
            setImageState('loaded');
          }
        };
        
        img.onerror = () => {
          if (isMounted) {
            // Try fallback image if provided
            if (fallbackSrc) {
              const fallbackPath = getImagePath(fallbackSrc);
              const fallbackImg = new Image();
              
              fallbackImg.onload = () => {
                if (isMounted) {
                  setCurrentSrc(fallbackPath);
                  setImageState('loaded');
                }
              };
              
              fallbackImg.onerror = () => {
                if (isMounted) {
                  // Use default fallback
                  setCurrentSrc(getFallbackImagePath());
                  setImageState('error');
                }
              };
              
              fallbackImg.src = fallbackPath;
            } else {
              // Use default fallback
              setCurrentSrc(getFallbackImagePath());
              setImageState('error');
            }
          }
        };
        
        img.src = imagePath;
      } catch (error) {
        if (isMounted) {
          setCurrentSrc(getFallbackImagePath());
          setImageState('error');
        }
      }
    };
    
    loadImage();
    
    return () => {
      isMounted = false;
    };
  }, [src, fallbackSrc]);

  // Loading state
  if (imageState === 'loading' && showLoadingSkeleton) {
    return (
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        sx={{
          borderRadius,
          ...sx,
        }}
      />
    );
  }

  // Error state with fallback
  if (imageState === 'error' && showErrorFallback && !currentSrc) {
    return (
      <Box
        sx={{
          width,
          height,
          borderRadius,
          backgroundColor: alpha(theme.palette.grey[300], 0.3),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${theme.palette.divider}`,
          ...sx,
        }}
      >
        <BrokenImageIcon 
          sx={{ 
            color: theme.palette.grey[400],
            fontSize: '2rem',
          }} 
        />
      </Box>
    );
  }

  // Loaded state
  return (
    <Box
      component="img"
      src={currentSrc}
      alt={alt}
      loading={loading}
      className={className}
      onClick={onClick}
      sx={{
        width,
        height,
        objectFit,
        borderRadius,
        transition: 'all 0.3s ease-in-out',
        cursor: onClick ? 'pointer' : 'default',
        ...sx,
      }}
      onError={(e) => {
        // Final fallback if even the fallback image fails
        const target = e.target as HTMLImageElement;
        if (target.src !== getFallbackImagePath()) {
          target.src = getFallbackImagePath();
        }
      }}
    />
  );
};

export default OptimizedImage;
