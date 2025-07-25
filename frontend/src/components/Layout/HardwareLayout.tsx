import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
  Tooltip,
  Button,
  Container,
  SwipeableDrawer,
  Chip,
  alpha,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Palette as PaletteIcon,
  Build as BuildIcon,
  Bathtub as BathtubIcon,
  ElectricalServices as ElectricalIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  Brightness4,
  Brightness7,
  HomeRepairService as TilingIcon,
  Category as MiscIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import OptimizedImage from '../common/OptimizedImage';
import ScrollToTopButton from '../common/ScrollToTopButton';
import { useScrollRestoration } from '../../hooks/useScrollRestoration';

const drawerWidth = 280;

interface HardwareLayoutProps {
  children: React.ReactNode;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/', color: '#2196F3' },
  { text: 'Paints', icon: <PaletteIcon />, path: '/paints', color: '#FF5722' },
  { text: 'Hardware', icon: <BuildIcon />, path: '/hardware', color: '#607D8B' },
  { text: 'Sanitary', icon: <BathtubIcon />, path: '/sanitary', color: '#00BCD4' },
  { text: 'Electricals', icon: <ElectricalIcon />, path: '/electricals', color: '#FFC107' },
  { text: 'Tiling Solutions', icon: <TilingIcon />, path: '/tiling-solutions', color: '#795548' },
  { text: 'Miscellaneous', icon: <MiscIcon />, path: '/miscellaneous', color: '#9C27B0' },
  { text: 'About', icon: <InfoIcon />, path: '/about', color: '#4CAF50' },
  { text: 'Contact', icon: <ContactIcon />, path: '/contact', color: '#9C27B0' },
];

export const HardwareLayout: React.FC<HardwareLayoutProps> = ({ 
  children, 
  onThemeToggle, 
  isDarkMode = false 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const navigate = useNavigate();
  const location = useLocation();
  
  // Initialize scroll restoration
  const { scrollToTop } = useScrollRestoration({
    restoreOnBack: true,
    scrollToTopOnNew: true,
    delay: 100,
    behavior: 'smooth'
  });
  
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Mobile drawer content
  const mobileDrawer = (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper,
    }}>
      {/* Navigation Menu */}
      <List sx={{ px: 2, py: 2, flexGrow: 1 }}>
        {menuItems.map((item) => {
          const isActive = isActivePath(item.path);
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => handleMenuItemClick(item.path)}
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  px: 2,
                  backgroundColor: isActive 
                    ? `${theme.palette.primary.main}15` 
                    : 'transparent',
                  border: isActive 
                    ? `1px solid ${theme.palette.primary.main}30`
                    : '1px solid transparent',
                  '&:hover': {
                    backgroundColor: isActive 
                      ? `${theme.palette.primary.main}20`
                      : theme.palette.action.hover,
                    transform: 'translateX(4px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? theme.palette.primary.main : item.color,
                    minWidth: 40,
                    '& svg': {
                      fontSize: '1.3rem',
                    }
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.95rem',
                    color: isActive 
                      ? theme.palette.primary.main 
                      : theme.palette.text.primary,
                  }}
                />
                {isActive && (
                  <Chip 
                    size="small" 
                    label="•" 
                    sx={{ 
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      minWidth: 8,
                      height: 8,
                      '& .MuiChip-label': {
                        px: 0,
                        fontSize: '0.6rem',
                      }
                    }} 
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={isDarkMode ? <Brightness7 /> : <Brightness4 />}
          onClick={onThemeToggle}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 500,
            py: 1,
            borderColor: theme.palette.divider,
            color: theme.palette.text.secondary,
            '&:hover': {
              borderColor: theme.palette.primary.main,
              backgroundColor: `${theme.palette.primary.main}10`,
            },
          }}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
            📍 Gurugram, Haryana
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  // Desktop drawer content (simplified)
  const desktopDrawer = (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper,
    }}>
      {/* Logo Header - Desktop Only */}
      <Box sx={{ 
        p: 3,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
      }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            cursor: 'pointer',
            borderRadius: 2,
            p: 1,
            mx: -1,
            transition: 'all 0.3s ease',
            // Remove active state styling - logo should not show as "selected"
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
              transform: 'translateY(-1px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            }
          }}
          onClick={() => navigate('/')}
          role="button"
          tabIndex={0}
          aria-label="Go to home page"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              navigate('/');
            }
          }}
        >
          <OptimizedImage
            src="bros_enterprises_logo.jpg"
            alt="Bros Enterprises"
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              border: `3px solid ${theme.palette.primary.main}`,
              boxShadow: theme.shadows[3],
              transition: 'all 0.3s ease',
              // Remove active state scaling - logo should not show as "selected"
              transform: 'scale(1)',
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 700, 
              fontSize: '1.1rem',
              color: theme.palette.text.primary,
              lineHeight: 1.2,
            }}>
              BROS ENTERPRISES
            </Typography>
            <Typography variant="caption" sx={{ 
              color: theme.palette.text.secondary,
              fontSize: '0.75rem',
              fontWeight: 500,
            }}>
              Quality Hardware & Building Materials
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navigation Menu */}
      <List sx={{ px: 2, py: 1, flexGrow: 1 }}>
        {menuItems.map((item) => {
          const isActive = isActivePath(item.path);
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => handleMenuItemClick(item.path)}
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  px: 2,
                  backgroundColor: isActive 
                    ? `${theme.palette.primary.main}15` 
                    : 'transparent',
                  border: isActive 
                    ? `1px solid ${theme.palette.primary.main}30`
                    : '1px solid transparent',
                  '&:hover': {
                    backgroundColor: isActive 
                      ? `${theme.palette.primary.main}20`
                      : theme.palette.action.hover,
                    transform: 'translateX(4px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? theme.palette.primary.main : item.color,
                    minWidth: 40,
                    '& svg': {
                      fontSize: '1.3rem',
                    }
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.95rem',
                    color: isActive 
                      ? theme.palette.primary.main 
                      : theme.palette.text.primary,
                  }}
                />
                {isActive && (
                  <Chip 
                    size="small" 
                    label="•" 
                    sx={{ 
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      minWidth: 8,
                      height: 8,
                      '& .MuiChip-label': {
                        px: 0,
                        fontSize: '0.6rem',
                      }
                    }} 
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={isDarkMode ? <Brightness7 /> : <Brightness4 />}
          onClick={onThemeToggle}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 500,
            py: 1,
            borderColor: theme.palette.divider,
            color: theme.palette.text.secondary,
            '&:hover': {
              borderColor: theme.palette.primary.main,
              backgroundColor: `${theme.palette.primary.main}10`,
            },
          }}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* Clean AppBar - No redundant navigation */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { lg: `calc(100% - ${isMobile ? 0 : drawerWidth}px)` },
          ml: { lg: `${isMobile ? 0 : drawerWidth}px` },
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ 
            minHeight: { xs: 64, sm: 72 },
            px: { xs: 1, sm: 2 },
          }}>
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Mobile Logo and Brand */}
            {isMobile && (
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5, 
                  flexGrow: 1,
                  cursor: 'pointer',
                  borderRadius: 2,
                  p: 1,
                  mx: -1,
                  transition: 'all 0.3s ease',
                  // Remove active state styling - logo should not show as "selected"
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                  }
                }}
                onClick={() => navigate('/')}
                role="button"
                tabIndex={0}
                aria-label="Go to home page"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('/');
                  }
                }}
              >
                <OptimizedImage
                  src="bros_enterprises_logo.jpg"
                  alt="Bros Enterprises"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: `2px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[1],
                    transition: 'all 0.3s ease',
                    // Remove active state scaling - logo should not show as "selected"
                    transform: 'scale(1)',
                  }}
                />
                <Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    fontSize: '1rem',
                    lineHeight: 1.2,
                  }}>
                    BROS ENTERPRISES
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    color: theme.palette.text.secondary,
                    fontSize: '0.7rem',
                  }}>
                    Hardware Store
                  </Typography>
                </Box>
              </Box>
            )}

            {/* Desktop - Just theme toggle and breadcrumb */}
            {!isMobile && (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                width: '100%',
              }}>
                {/* Current Page Title */}
                <Typography variant="h6" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  textTransform: 'capitalize',
                }}>
                  {location.pathname === '/' ? 'Home' : location.pathname.slice(1)}
                </Typography>

                <Tooltip title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                  <IconButton
                    onClick={onThemeToggle}
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>
                </Tooltip>
              </Box>
            )}

            {/* Mobile Theme Toggle */}
            {isMobile && (
              <Tooltip title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
                <IconButton
                  onClick={onThemeToggle}
                  sx={{
                    color: theme.palette.text.primary,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Tooltip>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Desktop Drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.background.paper,
              borderRight: `1px solid ${theme.palette.divider}`,
            },
          }}
        >
          {desktopDrawer}
        </Drawer>
      )}

      {/* Mobile Drawer */}
      <SwipeableDrawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {mobileDrawer}
      </SwipeableDrawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Toolbar /> {/* Spacer for fixed AppBar */}
        {children}
      </Box>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton 
        showAfter={300}
        behavior="smooth"
        size={isMobile ? 'small' : 'medium'}
        color="primary"
      />
    </Box>
  );
};

export default HardwareLayout;
