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

// Hardware store color palette
const hardwarePalette = {
  primary: {
    main: '#FF6B35',
    light: '#FF8A65',
    dark: '#E64A19',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#2E7D32',
    light: '#4CAF50',
    dark: '#1B5E20',
    contrastText: '#ffffff',
  },
  background: {
    default: '#FAFAFA',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
  },
};

// Dark theme palette
const darkHardwarePalette = {
  ...hardwarePalette,
  background: {
    default: '#121212',
    paper: '#1E1E1E',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0BEC5',
  },
};

// Mobile-optimized typography
const mobileTypography = {
  fontFamily: '"Roboto", "Inter", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '1.75rem',
    fontWeight: 700,
    lineHeight: 1.2,
    '@media (min-width:640px)': {
      fontSize: '2.5rem',
    },
    '@media (min-width:1024px)': {
      fontSize: '3rem',
    },
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.3,
    '@media (min-width:640px)': {
      fontSize: '2rem',
    },
    '@media (min-width:1024px)': {
      fontSize: '2.5rem',
    },
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
    '@media (min-width:640px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width:1024px)': {
      fontSize: '1.75rem',
    },
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    fontWeight: 400,
    '@media (min-width:640px)': {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 600,
    fontSize: '0.875rem',
    '@media (min-width:640px)': {
      fontSize: '1rem',
    },
  },
};

// Component overrides
const mobileComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none' as const,
        fontWeight: 600,
        minHeight: 44,
        padding: '12px 24px',
        fontSize: '0.875rem',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
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

export default lightResponsiveTheme;
