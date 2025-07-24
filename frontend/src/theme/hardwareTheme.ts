import { createTheme, ThemeOptions } from '@mui/material/styles';

// Hardware store color palette
const hardwarePalette = {
  primary: {
    main: '#FF6B35', // Orange for construction/hardware
    light: '#FF8A65',
    dark: '#E64A19',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#2E7D32', // Green for trust and reliability
    light: '#4CAF50',
    dark: '#1B5E20',
    contrastText: '#ffffff',
  },
  success: {
    main: '#4CAF50', // Green for success
    light: '#81C784',
    dark: '#388E3C',
    contrastText: '#ffffff',
  },
  error: {
    main: '#F44336', // Red for alerts
    light: '#E57373',
    dark: '#D32F2F',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#FF9800', // Orange for warnings
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: '#000000',
  },
  info: {
    main: '#2196F3', // Blue for information
    light: '#64B5F6',
    dark: '#1976D2',
    contrastText: '#ffffff',
  },
  background: {
    default: '#FAFAFA', // Light background for hardware store
    paper: '#FFFFFF',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
  },
  divider: '#E0E0E0',
};

// Dark theme for hardware store
const darkHardwarePalette = {
  primary: {
    main: '#FF6B35',
    light: '#FF8A65',
    dark: '#E64A19',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#4CAF50',
    light: '#81C784',
    dark: '#388E3C',
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
    default: '#121212',
    paper: '#1E1E1E',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0BEC5',
  },
  divider: '#424242',
};

// Hardware store typography
const hardwareTypography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.43,
    fontWeight: 400,
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 600,
    fontSize: '0.875rem',
  },
};

// Component overrides for hardware theme
const hardwareComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none' as const,
        fontWeight: 600,
        padding: '10px 24px',
        fontSize: '0.875rem',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        },
      },
      contained: {
        '&:hover': {
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
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
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
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
      },
    },
  },
};

// Light hardware theme (default)
const lightHardwareThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    ...hardwarePalette,
  },
  typography: hardwareTypography,
  components: hardwareComponents,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
};

// Dark hardware theme
const darkHardwareThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    ...darkHardwarePalette,
  },
  typography: hardwareTypography,
  components: hardwareComponents,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
};

// Create themes
export const lightHardwareTheme = createTheme(lightHardwareThemeOptions);
export const darkHardwareTheme = createTheme(darkHardwareThemeOptions);

// Custom hardware colors for components
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

export default lightHardwareTheme;
