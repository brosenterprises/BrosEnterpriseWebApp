/**
 * ScrollToTopButton Component
 * Floating action button that appears when user scrolls down
 * Provides quick way to return to top of page
 * Following Material Design guidelines and accessibility standards
 */

import React, { useState, useEffect } from 'react';
import {
  Fab,
  Zoom,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import {
  KeyboardArrowUp as ArrowUpIcon,
} from '@mui/icons-material';

interface ScrollToTopButtonProps {
  /**
   * Threshold in pixels to show the button
   * @default 300
   */
  showAfter?: number;
  
  /**
   * Scroll behavior
   * @default 'smooth'
   */
  behavior?: ScrollBehavior;
  
  /**
   * Button size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Button color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'default';
  
  /**
   * Custom positioning
   */
  position?: {
    bottom?: number | string;
    right?: number | string;
  };
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  showAfter = 300,
  behavior = 'smooth',
  size = 'medium',
  color = 'primary',
  position = { bottom: 24, right: 24 }
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: behavior
    });
  };

  // Adjust size and position for mobile
  const responsiveSize = isMobile ? 'small' : size;
  const responsivePosition = {
    bottom: isMobile ? 16 : position.bottom,
    right: isMobile ? 16 : position.right,
  };

  return (
    <Zoom in={isVisible} timeout={300}>
      <Tooltip title="Scroll to top" placement="left">
        <Fab
          color={color}
          size={responsiveSize}
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: responsivePosition.bottom,
            right: responsivePosition.right,
            zIndex: theme.zIndex.fab,
            boxShadow: theme.shadows[6],
            '&:hover': {
              boxShadow: theme.shadows[8],
              transform: 'scale(1.05)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            // Ensure it doesn't interfere with mobile navigation
            ...(isMobile && {
              bottom: 80, // Above mobile navigation if present
            }),
          }}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default ScrollToTopButton;
