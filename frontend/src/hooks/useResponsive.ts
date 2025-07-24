import { useTheme, useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';

export interface ResponsiveBreakpoints {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isSmallMobile: boolean;
  isMediumMobile: boolean;
  isLargeDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
}

export interface TouchCapabilities {
  isTouchDevice: boolean;
  hasHover: boolean;
  hasPointer: boolean;
  maxTouchPoints: number;
}

export interface DeviceOrientation {
  isPortrait: boolean;
  isLandscape: boolean;
  orientation: 'portrait' | 'landscape';
}

export interface ResponsiveUtils extends ResponsiveBreakpoints, TouchCapabilities, DeviceOrientation {
  // Responsive sizing utilities
  getResponsiveValue: <T>(values: {
    mobile?: T;
    tablet?: T;
    desktop?: T;
    default: T;
  }) => T;
  
  // Typography utilities
  getResponsiveFontSize: (baseSize: number) => string;
  getResponsiveSpacing: (baseSpacing: number) => number;
  
  // Layout utilities
  getGridColumns: () => number;
  getContainerMaxWidth: () => string | number;
  
  // Touch utilities
  getTouchTargetSize: () => number;
  getOptimalButtonSize: () => { minHeight: number; minWidth: number };
}

export const useResponsive = (): ResponsiveUtils => {
  const theme = useTheme();
  
  // Breakpoint detection
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumMobile = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  
  // Screen dimensions
  const [screenDimensions, setScreenDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  // Touch capabilities
  const [touchCapabilities, setTouchCapabilities] = useState<TouchCapabilities>({
    isTouchDevice: false,
    hasHover: true,
    hasPointer: true,
    maxTouchPoints: 0,
  });
  
  // Device orientation
  const [deviceOrientation, setDeviceOrientation] = useState<DeviceOrientation>({
    isPortrait: true,
    isLandscape: false,
    orientation: 'portrait',
  });
  
  useEffect(() => {
    const updateScreenDimensions = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      
      // Update orientation
      const isPortrait = window.innerHeight > window.innerWidth;
      setDeviceOrientation({
        isPortrait,
        isLandscape: !isPortrait,
        orientation: isPortrait ? 'portrait' : 'landscape',
      });
    };
    
    const detectTouchCapabilities = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      
      setTouchCapabilities({
        isTouchDevice: hasTouch,
        hasHover,
        hasPointer,
        maxTouchPoints: navigator.maxTouchPoints || 0,
      });
    };
    
    // Initial setup
    updateScreenDimensions();
    detectTouchCapabilities();
    
    // Event listeners
    window.addEventListener('resize', updateScreenDimensions);
    window.addEventListener('orientationchange', updateScreenDimensions);
    
    return () => {
      window.removeEventListener('resize', updateScreenDimensions);
      window.removeEventListener('orientationchange', updateScreenDimensions);
    };
  }, []);
  
  // Utility functions
  const getResponsiveValue = <T>(values: {
    mobile?: T;
    tablet?: T;
    desktop?: T;
    default: T;
  }): T => {
    if (isMobile && values.mobile !== undefined) return values.mobile;
    if (isTablet && values.tablet !== undefined) return values.tablet;
    if (isDesktop && values.desktop !== undefined) return values.desktop;
    return values.default;
  };
  
  const getResponsiveFontSize = (baseSize: number): string => {
    const multiplier = getResponsiveValue({
      mobile: 0.875,
      tablet: 0.95,
      desktop: 1,
      default: 1,
    });
    return `${baseSize * multiplier}rem`;
  };
  
  const getResponsiveSpacing = (baseSpacing: number): number => {
    const multiplier = getResponsiveValue({
      mobile: 0.75,
      tablet: 0.875,
      desktop: 1,
      default: 1,
    });
    return baseSpacing * multiplier;
  };
  
  const getGridColumns = (): number => {
    return getResponsiveValue({
      mobile: 1,
      tablet: 2,
      desktop: 3,
      default: 3,
    });
  };
  
  const getContainerMaxWidth = (): string | number => {
    return getResponsiveValue({
      mobile: '100%',
      tablet: 'md',
      desktop: 'lg',
      default: 'lg',
    });
  };
  
  const getTouchTargetSize = (): number => {
    return touchCapabilities.isTouchDevice ? 48 : 40;
  };
  
  const getOptimalButtonSize = () => {
    const baseSize = getTouchTargetSize();
    return {
      minHeight: baseSize,
      minWidth: baseSize,
    };
  };
  
  return {
    // Breakpoints
    isMobile,
    isTablet,
    isDesktop,
    isSmallMobile,
    isMediumMobile,
    isLargeDesktop,
    screenWidth: screenDimensions.width,
    screenHeight: screenDimensions.height,
    
    // Touch capabilities
    ...touchCapabilities,
    
    // Device orientation
    ...deviceOrientation,
    
    // Utility functions
    getResponsiveValue,
    getResponsiveFontSize,
    getResponsiveSpacing,
    getGridColumns,
    getContainerMaxWidth,
    getTouchTargetSize,
    getOptimalButtonSize,
  };
};

// Hook for detecting if user prefers reduced motion
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};

// Hook for detecting dark mode preference
export const useDarkModePreference = (): boolean => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setPrefersDarkMode(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersDarkMode(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersDarkMode;
};

// Hook for safe area insets (for devices with notches)
export const useSafeAreaInsets = () => {
  const [safeAreaInsets, setSafeAreaInsets] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  
  useEffect(() => {
    const updateSafeAreaInsets = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      
      setSafeAreaInsets({
        top: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-top)') || '0'),
        right: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-right)') || '0'),
        bottom: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-bottom)') || '0'),
        left: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-left)') || '0'),
      });
    };
    
    updateSafeAreaInsets();
    window.addEventListener('resize', updateSafeAreaInsets);
    window.addEventListener('orientationchange', updateSafeAreaInsets);
    
    return () => {
      window.removeEventListener('resize', updateSafeAreaInsets);
      window.removeEventListener('orientationchange', updateSafeAreaInsets);
    };
  }, []);
  
  return safeAreaInsets;
};

export default useResponsive;
