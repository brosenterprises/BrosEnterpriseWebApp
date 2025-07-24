import { createTheme, ThemeOptions } from '@mui/material/styles';

// Trading-specific color palette inspired by Indian brokerage apps
const tradingPalette = {
  primary: {
    main: '#00D09C', // Groww green
    light: '#4DDBB8',
    dark: '#00A67C',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#EB5B3C', // Trading red
    light: '#FF8A65',
    dark: '#D84315',
    contrastText: '#ffffff',
  },
  // Trading specific colors
  success: {
    main: '#00D09C', // Profit green
    light: '#4DDBB8',
    dark: '#00A67C',
    contrastText: '#ffffff',
  },
  error: {
    main: '#EB5B3C', // Loss red
    light: '#FF6B4A',
    dark: '#C62828',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#FFB74D', // Neutral/Warning
    light: '#FFCC80',
    dark: '#FF8F00',
    contrastText: '#000000',
  },
  info: {
    main: '#42A5F5', // Info blue
    light: '#64B5F6',
    dark: '#1976D2',
    contrastText: '#ffffff',
  },
  background: {
    default: '#0B0E11', // Dark trading background
    paper: '#161A1E', // Card background
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0BEC5',
  },
  divider: '#263238',
};

// Light theme for day trading
const lightTradingPalette = {
  primary: {
    main: '#00D09C',
    light: '#4DDBB8',
    dark: '#00A67C',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#EB5B3C',
    light: '#FF8A65',
    dark: '#D84315',
    contrastText: '#ffffff',
  },
  success: {
    main: '#00D09C',
    light: '#4DDBB8',
    dark: '#00A67C',
    contrastText: '#ffffff',
  },
  error: {
    main: '#EB5B3C',
    light: '#FF6B4A',
    dark: '#C62828',
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
    default: '#F8F9FA',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
  },
  divider: '#E0E0E0',
};

// Trading-specific typography
const tradingTypography = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
    fontSize: '0.875rem',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.75rem',
    lineHeight: 1.43,
    fontWeight: 400,
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  // Trading specific typography
  caption: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.2,
  },
};

// Component overrides for trading theme
const tradingComponents = {
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
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundImage: 'none',
        '&:hover': {
          border: '1px solid rgba(0, 208, 156, 0.3)',
          boxShadow: '0px 4px 20px rgba(0, 208, 156, 0.1)',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 208, 156, 0.5)',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#00D09C',
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundImage: 'none',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: '#0B0E11',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: '#0B0E11',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 0,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        fontWeight: 600,
        fontSize: '0.75rem',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '0.875rem',
      },
      head: {
        fontWeight: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
      },
    },
  },
};

// Dark trading theme (default)
const darkTradingThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    ...tradingPalette,
  },
  typography: tradingTypography,
  components: tradingComponents,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
};

// Light trading theme
const lightTradingThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    ...lightTradingPalette,
  },
  typography: tradingTypography,
  components: {
    ...tradingComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
          '&:hover': {
            border: '1px solid rgba(0, 208, 156, 0.3)',
            boxShadow: '0px 4px 16px rgba(0, 208, 156, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 208, 156, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00D09C',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        },
        head: {
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
        },
      },
    },
  },
};

// Create themes
export const darkTradingTheme = createTheme(darkTradingThemeOptions);
export const lightTradingTheme = createTheme(lightTradingThemeOptions);

// Custom trading colors for components
export const tradingColors = {
  profit: '#00D09C',
  loss: '#EB5B3C',
  neutral: '#FFB74D',
  buy: '#00D09C',
  sell: '#EB5B3C',
  hold: '#FFB74D',
  background: {
    dark: '#0B0E11',
    light: '#F8F9FA',
    card: {
      dark: '#161A1E',
      light: '#FFFFFF',
    },
  },
  text: {
    primary: {
      dark: '#FFFFFF',
      light: '#212121',
    },
    secondary: {
      dark: '#B0BEC5',
      light: '#757575',
    },
  },
};

export default darkTradingTheme;
