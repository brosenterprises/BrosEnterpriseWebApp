/**
 * useScrollRestoration Hook
 * Industry-standard scroll restoration hook for React applications
 * Provides fine-grained control over scroll behavior
 * Handles browser back/forward navigation properly
 */

import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

interface ScrollRestorationOptions {
  /**
   * Whether to restore scroll position on browser back/forward
   * @default true
   */
  restoreOnBack?: boolean;
  
  /**
   * Whether to scroll to top on new navigation
   * @default true
   */
  scrollToTopOnNew?: boolean;
  
  /**
   * Delay before scrolling (in milliseconds)
   * @default 0
   */
  delay?: number;
  
  /**
   * Scroll behavior
   * @default 'smooth'
   */
  behavior?: ScrollBehavior;
  
  /**
   * Whether to save scroll position in session storage
   * @default true
   */
  savePosition?: boolean;
}

export const useScrollRestoration = (options: ScrollRestorationOptions = {}) => {
  const {
    restoreOnBack = true,
    scrollToTopOnNew = true,
    delay = 0,
    behavior = 'smooth',
    savePosition = true
  } = options;

  const location = useLocation();
  const navigationType = useNavigationType();
  const savedPositions = useRef<Map<string, number>>(new Map());

  // Save current scroll position before navigation
  useEffect(() => {
    if (!savePosition) return;

    const saveScrollPosition = () => {
      const key = `${location.pathname}${location.search}`;
      savedPositions.current.set(key, window.scrollY);
      
      // Also save to sessionStorage for browser refresh
      try {
        sessionStorage.setItem(`scroll-${key}`, window.scrollY.toString());
      } catch (error) {
        // Handle cases where sessionStorage is not available
        console.warn('Could not save scroll position to sessionStorage:', error);
      }
    };

    // Save position before unload
    window.addEventListener('beforeunload', saveScrollPosition);
    
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      saveScrollPosition(); // Save on cleanup
    };
  }, [location.pathname, location.search, savePosition]);

  // Handle scroll restoration
  useEffect(() => {
    const handleScroll = () => {
      const key = `${location.pathname}${location.search}`;
      
      // Check if this is a back/forward navigation
      const isBackForward = navigationType === 'POP';
      
      if (isBackForward && restoreOnBack) {
        // Try to restore previous scroll position
        let savedPosition = savedPositions.current.get(key);
        
        // Fallback to sessionStorage
        if (savedPosition === undefined) {
          try {
            const stored = sessionStorage.getItem(`scroll-${key}`);
            savedPosition = stored ? parseInt(stored, 10) : 0;
          } catch (error) {
            savedPosition = 0;
          }
        }
        
        // Restore position with a small delay to ensure content is rendered
        setTimeout(() => {
          window.scrollTo({
            top: savedPosition || 0,
            left: 0,
            behavior: behavior
          });
        }, Math.max(delay, 50)); // Minimum 50ms delay for back/forward
        
      } else if (scrollToTopOnNew && (navigationType === 'PUSH' || navigationType === 'REPLACE')) {
        // Scroll to top for new navigation
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: behavior
          });
        }, delay);
      }
    };

    handleScroll();
  }, [location.pathname, location.search, navigationType, restoreOnBack, scrollToTopOnNew, delay, behavior]);

  // Return utility functions
  return {
    scrollToTop: (customBehavior?: ScrollBehavior) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: customBehavior || behavior
      });
    },
    
    scrollToPosition: (position: number, customBehavior?: ScrollBehavior) => {
      window.scrollTo({
        top: position,
        left: 0,
        behavior: customBehavior || behavior
      });
    },
    
    getCurrentPosition: () => window.scrollY,
    
    saveCurrentPosition: () => {
      const key = `${location.pathname}${location.search}`;
      savedPositions.current.set(key, window.scrollY);
    }
  };
};
