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
  Menu,
  MenuItem,
  Divider,
  useTheme,
  useMediaQuery,
  Tooltip,
  Button,
  Fab,
  SwipeableDrawer,
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
  AccountCircle,
  Logout,
  Person,
  Help,
  Brightness4,
  Brightness7,
  Phone,
  LocationOn,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 280;

interface HardwareLayoutProps {
  children: React.ReactNode;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Paints', icon: <PaletteIcon />, path: '/paints' },
  { text: 'Hardware', icon: <BuildIcon />, path: '/hardware' },
  { text: 'Sanitary Ware', icon: <BathtubIcon />, path: '/sanitary' },
  { text: 'Electricals', icon: <ElectricalIcon />, path: '/electricals' },
  { text: 'About Us', icon: <InfoIcon />, path: '/about' },
  { text: 'Contact', icon: <ContactIcon />, path: '/contact' },
];

export const HardwareLayout: React.FC<HardwareLayoutProps> = ({ 
  children, 
  onThemeToggle, 
  isDarkMode = false 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Mobile Header */}
      {isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: 40,
                height: 40,
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              BE
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                BROS ENTERPRISES
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                Hardware Store
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerClose} sx={{ p: 1 }}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: 50,
                height: 50,
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}
            >
              BE
            </Avatar>
            <Box>
              <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                BROS ENTERPRISES
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                Hardware & Building Materials
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      )}
      
      {/* Store Info */}
      <Box sx={{ px: 2, py: 1 }}>
        <Box sx={{ 
          p: 2, 
          bgcolor: theme.palette.primary.main, 
          borderRadius: 2, 
          color: 'white', 
          mb: 2,
          fontSize: isSmallMobile ? '0.8rem' : '0.875rem'
        }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, fontSize: 'inherit' }}>
            📍 Located in Gurugram
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mb: 1, fontSize: isSmallMobile ? '0.7rem' : '0.75rem' }}>
            Your one-stop store for:
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', fontSize: isSmallMobile ? '0.65rem' : '0.7rem', lineHeight: 1.4 }}>
            • High-quality Paints<br/>
            • Durable Hardware<br/>
            • Modern Sanitary Ware<br/>
            • Trusted Electricals
          </Typography>
        </Box>
      </Box>

      <Divider />
      
      {/* Navigation Menu */}
      <List sx={{ px: 2, py: 1, flexGrow: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => handleMenuItemClick(item.path)}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? theme.palette.primary.main : 'transparent',
                  color: isActive ? theme.palette.primary.contrastText : 'inherit',
                  '&:hover': {
                    bgcolor: isActive 
                      ? theme.palette.primary.dark 
                      : theme.palette.action.hover,
                  },
                  py: isMobile ? 2 : 1.5,
                  px: 2,
                  minHeight: isMobile ? 56 : 48,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? theme.palette.primary.contrastText : 'inherit',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 700 : 500,
                    fontSize: isMobile ? '1rem' : '0.875rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Contact Info */}
      <Box sx={{ px: 2, py: 2, mt: 'auto' }}>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<Phone />}
            size={isMobile ? "medium" : "small"}
            sx={{ 
              fontSize: isMobile ? '0.875rem' : '0.75rem',
              py: isMobile ? 1.5 : 1,
              flex: 1
            }}
            fullWidth
            href="tel:+91"
          >
            Call Us
          </Button>
          <Button
            variant="outlined"
            startIcon={<LocationOn />}
            size={isMobile ? "medium" : "small"}
            sx={{ 
              fontSize: isMobile ? '0.875rem' : '0.75rem',
              py: isMobile ? 1.5 : 1,
              flex: 1
            }}
            fullWidth
            onClick={() => handleMenuItemClick('/contact')}
          >
            Visit Store
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
        elevation={0}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { md: 'none' },
              p: { xs: 1, sm: 1.5 }
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography 
            variant="h6" 
            noWrap 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            {menuItems.find(item => item.path === location.pathname)?.text || 'BROS ENTERPRISES'}
          </Typography>

          {/* Header Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
            {!isSmallMobile && (
              <Tooltip title="Toggle theme">
                <IconButton onClick={onThemeToggle} color="inherit" sx={{ p: { xs: 1, sm: 1.5 } }}>
                  {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Tooltip>
            )}

            <Tooltip title="Contact Us">
              <IconButton 
                color="inherit" 
                onClick={() => navigate('/contact')}
                sx={{ p: { xs: 1, sm: 1.5 } }}
              >
                <Phone />
              </IconButton>
            </Tooltip>

            <Tooltip title="Store Location">
              <IconButton 
                color="inherit" 
                onClick={() => navigate('/contact')}
                sx={{ p: { xs: 1, sm: 1.5 } }}
              >
                <LocationOn />
              </IconButton>
            </Tooltip>

            <Tooltip title="Menu">
              <IconButton
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{ ml: { xs: 0.5, sm: 1 }, p: { xs: 1, sm: 1.5 } }}
              >
                <Avatar
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    bgcolor: theme.palette.primary.main,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    fontWeight: 600,
                  }}
                >
                  BE
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile Drawer */}
        <SwipeableDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          onOpen={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xs: '85vw', sm: drawerWidth },
              maxWidth: drawerWidth,
            },
          }}
        >
          {drawer}
        </SwipeableDrawer>
        
        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }} />
        {children}
      </Box>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: { xs: 180, sm: 200 },
            '& .MuiMenuItem-root': {
              px: 2,
              py: { xs: 1.5, sm: 1 },
              fontSize: { xs: '0.875rem', sm: '0.875rem' },
            },
          },
        }}
      >
        <MenuItem onClick={() => navigate('/about')}>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          About Bros Enterprises
        </MenuItem>
        <MenuItem onClick={() => navigate('/contact')}>
          <ListItemIcon>
            <ContactIcon fontSize="small" />
          </ListItemIcon>
          Contact Us
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Help fontSize="small" />
          </ListItemIcon>
          Help & Support
        </MenuItem>
        {isSmallMobile && (
          <>
            <Divider />
            <MenuItem onClick={onThemeToggle}>
              <ListItemIcon>
                {isDarkMode ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
              </ListItemIcon>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </MenuItem>
          </>
        )}
      </Menu>

      {/* Mobile FAB for Quick Contact */}
      {isMobile && (
        <Fab
          color="primary"
          aria-label="call"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
          href="tel:+91"
        >
          <Phone />
        </Fab>
      )}
    </Box>
  );
};

export default HardwareLayout;
