import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material/styles';

// Mobile-first breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};

// Hardware store color palette optimized for mobile
const hardwarePalette = {
  primary: {
    main: '#1976d2', // Professional blue - more user-friendly
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#ff6b35', // Warm orange for hardware/construction feel
    light: '#ff9d6b',
    dark: '#e55100',
    contrastText: '#ffffff',
  },
  success: {
    main: '#4CAF50',
    light: '#81C784',
    dark: '#388E3C',
    contrastText: '#ffffff',
  },
  error: {
    main: '#F44336',
    light: '#E57373',
    dark: '#D32F2F',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#FF9800',
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: '#000000',
  },
  info: {
    main: '#2196F3',
    light: '#64B5F6',
    dark: '#1976D2',
    contrastText: '#ffffff',
  },
  background: {
    default: '#fafafa', // Softer background
    paper: '#FFFFFF',
  },
  text: {
    primary: '#1a1a1a', // Softer black
    secondary: '#666666', // Better contrast
  },
  divider: '#e0e0e0', // Lighter divider
};

// Dark theme palette
const darkHardwarePalette = {
  ...hardwarePalette,
  primary: {
    main: '#64b5f6', // Lighter blue for dark mode
    light: '#90caf9',
    dark: '#42a5f5',
    contrastText: '#000000',
  },
  background: {
    default: '#121212',
    paper: '#1E1E1E',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#b3b3b3', // Better contrast in dark mode
  },
  divider: '#333333', // Better visibility in dark mode
};

// Mobile-optimized typography
const mobileTypography = {
  fontFamily: '"Roboto", "Inter", "Helvetica", "Arial", sans-serif',
  // Mobile-first font sizes
  h1: {
    fontSize: '1.75rem', // 28px
    fontWeight: 700,
    lineHeight: 1.2,
    '@media (min-width:640px)': {
      fontSize: '2.5rem', // 40px
    },
    '@media (min-width:1024px)': {
      fontSize: '3rem', // 48px
    },
  },
  h2: {
    fontSize: '1.5rem', // 24px
    fontWeight: 700,
    lineHeight: 1.3,
    '@media (min-width:640px)': {
      fontSize: '2rem', // 32px
    },
    '@media (min-width:1024px)': {
      fontSize: '2.5rem', // 40px
    },
  },
  h3: {
    fontSize: '1.25rem', // 20px
    fontWeight: 600,
    lineHeight: 1.4,
    '@media (min-width:640px)': {
      fontSize: '1.5rem', // 24px
    },
    '@media (min-width:1024px)': {
      fontSize: '1.75rem', // 28px
    },
  },
  h4: {
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: 1.4,
    '@media (min-width:640px)': {
      fontSize: '1.25rem', // 20px
    },
    '@media (min-width:1024px)': {
      fontSize: '1.5rem', // 24px
    },
  },
  h5: {
    fontSize: '1rem', // 16px
    fontWeight: 600,
    lineHeight: 1.5,
    '@media (min-width:640px)': {
      fontSize: '1.125rem', // 18px
    },
    '@media (min-width:1024px)': {
      fontSize: '1.25rem', // 20px
    },
  },
  h6: {
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    lineHeight: 1.6,
    '@media (min-width:640px)': {
      fontSize: '1rem', // 16px
    },
  },
  body1: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.6,
    fontWeight: 400,
    '@media (min-width:640px)': {
      fontSize: '1rem', // 16px
      lineHeight: 1.5,
    },
  },
  body2: {
    fontSize: '0.75rem', // 12px
    lineHeight: 1.5,
    fontWeight: 400,
    '@media (min-width:640px)': {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.43,
    },
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 600,
    fontSize: '0.875rem', // 14px
    '@media (min-width:640px)': {
      fontSize: '1rem', // 16px
    },
  },
  caption: {
    fontSize: '0.7rem', // 11px
    lineHeight: 1.4,
    '@media (min-width:640px)': {
      fontSize: '0.75rem', // 12px
    },
  },
};

// Mobile-optimized component overrides
const mobileComponents = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        WebkitTextSizeAdjust: '100%',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none' as const,
        fontWeight: 600,
        minHeight: 44, // Touch-friendly minimum
        padding: '12px 24px',
        fontSize: '0.875rem',
        boxShadow: 'none',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-1px)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
        '@media (min-width:640px)': {
          padding: '10px 24px',
          fontSize: '1rem',
        },
      },
      contained: {
        '&:hover': {
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
        },
      },
      sizeSmall: {
        minHeight: 36,
        padding: '8px 16px',
        fontSize: '0.75rem',
        '@media (min-width:640px)': {
          fontSize: '0.875rem',
        },
      },
      sizeLarge: {
        minHeight: 48,
        padding: '14px 28px',
        fontSize: '1rem',
        '@media (min-width:640px)': {
          fontSize: '1.125rem',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-2px)',
        },
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '16px',
        '&:last-child': {
          paddingBottom: '16px',
        },
        '@media (min-width:640px)': {
          padding: '20px',
          '&:last-child': {
            paddingBottom: '20px',
          },
        },
        '@media (min-width:1024px)': {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
          minHeight: 44, // Touch-friendly
          fontSize: '0.875rem',
          '@media (min-width:640px)': {
            fontSize: '1rem',
          },
        },
        '& .MuiInputLabel-root': {
          fontSize: '0.875rem',
          '@media (min-width:640px)': {
            fontSize: '1rem',
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        backdropFilter: 'blur(8px)',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRadius: 0,
        '@media (max-width:767px)': {
          width: '85vw',
          maxWidth: '320px',
        },
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        minHeight: 48, // Touch-friendly
        borderRadius: 8,
        margin: '2px 0',
        '&:hover': {
          backgroundColor: 'rgba(255, 107, 53, 0.08)',
        },
        '&.Mui-selected': {
          backgroundColor: '#FF6B35',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#E64A19',
          },
          '& .MuiListItemIcon-root': {
            color: '#ffffff',
          },
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
        '@media (max-width:767px)': {
          minWidth: 36,
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        minWidth: 44, // Touch-friendly
        minHeight: 44,
        borderRadius: 8,
        '&:hover': {
          backgroundColor: 'rgba(255, 107, 53, 0.08)',
        },
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: {
        boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(255, 107, 53, 0.4)',
          transform: 'translateY(-2px)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: '16px',
        paddingRight: '16px',
        '@media (min-width:640px)': {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
        '@media (min-width:1024px)': {
          paddingLeft: '32px',
          paddingRight: '32px',
        },
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      container: {
        margin: 0,
        width: '100%',
      },
      item: {
        paddingLeft: 0,
        paddingTop: 0,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        height: 28,
        fontSize: '0.75rem',
        '@media (min-width:640px)': {
          height: 32,
          fontSize: '0.875rem',
        },
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        fontWeight: 600,
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: '56px !important',
        '@media (min-width:640px)': {
          minHeight: '64px !important',
        },
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
        '@media (min-width:640px)': {
          paddingLeft: '24px !important',
          paddingRight: '24px !important',
        },
      },
    },
  },
};

// Light theme configuration
const lightThemeOptions: ThemeOptions = {
  breakpoints,
  palette: {
    mode: 'light',
    ...hardwarePalette,
  },
  typography: mobileTypography,
  components: mobileComponents,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
};

// Dark theme configuration
const darkThemeOptions: ThemeOptions = {
  ...lightThemeOptions,
  palette: {
    mode: 'dark',
    ...darkHardwarePalette,
  },
};

// Create responsive themes
export const lightResponsiveTheme = responsiveFontSizes(createTheme(lightThemeOptions));
export const darkResponsiveTheme = responsiveFontSizes(createTheme(darkThemeOptions));

// Hardware category colors for components
export const hardwareColors = {
  paints: '#FF6B35',
  hardware: '#795548',
  sanitary: '#2196F3',
  electrical: '#FFC107',
  background: {
    light: '#FAFAFA',
    dark: '#121212',
    card: {
      light: '#FFFFFF',
      dark: '#1E1E1E',
    },
  },
  text: {
    primary: {
      light: '#212121',
      dark: '#FFFFFF',
    },
    secondary: {
      light: '#757575',
      dark: '#B0BEC5',
    },
  },
};

// Mobile breakpoint utilities
export const mobileBreakpoints = {
  isMobile: '(max-width: 767px)',
  isTablet: '(min-width: 768px) and (max-width: 1023px)',
  isDesktop: '(min-width: 1024px)',
  isSmallMobile: '(max-width: 639px)',
  isMediumMobile: '(min-width: 640px) and (max-width: 767px)',
};

export default lightResponsiveTheme;
