/**
 * ScrollToTop Component
 * Industry-standard scroll restoration for React Router
 * Automatically scrolls to top on route changes with smooth behavior
 * Handles edge cases and provides optimal UX
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  /**
   * Whether to use smooth scrolling behavior
   * @default true
   */
  smooth?: boolean;
  
  /**
   * Delay before scrolling (in milliseconds)
   * Useful for allowing page content to render first
   * @default 0
   */
  delay?: number;
  
  /**
   * Whether to scroll to top on hash changes
   * @default false
   */
  scrollOnHashChange?: boolean;
  
  /**
   * Custom scroll behavior
   * @default 'smooth'
   */
  behavior?: ScrollBehavior;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  smooth = true,
  delay = 0,
  scrollOnHashChange = false,
  behavior = 'smooth'
}) => {
  const location = useLocation();

  useEffect(() => {
    // Don't scroll if it's just a hash change and scrollOnHashChange is false
    if (!scrollOnHashChange && location.hash) {
      return;
    }

    // Function to perform the scroll
    const scrollToTop = () => {
      // Check if smooth scrolling is supported
      const supportsSmooth = 'scrollBehavior' in document.documentElement.style;
      
      if (smooth && supportsSmooth) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: behavior
        });
      } else {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, 0);
      }
    };

    // Apply delay if specified
    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      scrollToTop();
    }
  }, [location.pathname, location.search, smooth, delay, scrollOnHashChange, behavior]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;
