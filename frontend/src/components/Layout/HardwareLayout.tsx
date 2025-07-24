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
  const navigate = useNavigate();
  const location = useLocation();
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box>
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
      
      {/* Store Info */}
      <Box sx={{ px: 2, py: 1 }}>
        <Box sx={{ p: 2, bgcolor: theme.palette.primary.main, borderRadius: 2, color: 'white', mb: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            📍 Located in Gurugram
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
            Your one-stop store for:
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', fontSize: '0.7rem' }}>
            • High-quality Paints<br/>
            • Durable Hardware<br/>
            • Modern Sanitary Ware<br/>
            • Trusted Electricals
          </Typography>
        </Box>
      </Box>

      <Divider />
      
      <List sx={{ px: 2, py: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? theme.palette.primary.main : 'transparent',
                  color: isActive ? theme.palette.primary.contrastText : 'inherit',
                  '&:hover': {
                    bgcolor: isActive 
                      ? theme.palette.primary.dark 
                      : theme.palette.action.hover,
                  },
                  py: 1.5,
                  px: 2,
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
                    fontSize: '0.875rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Contact Info */}
      <Box sx={{ px: 2, py: 1, mt: 'auto' }}>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            startIcon={<Phone />}
            size="small"
            sx={{ mb: 1, fontSize: '0.75rem' }}
            fullWidth
          >
            Call Us
          </Button>
          <Button
            variant="outlined"
            startIcon={<LocationOn />}
            size="small"
            sx={{ fontSize: '0.75rem' }}
            fullWidth
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            {menuItems.find(item => item.path === location.pathname)?.text || 'BROS ENTERPRISES'}
          </Typography>

          {/* Header Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Toggle theme">
              <IconButton onClick={onThemeToggle} color="inherit">
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Contact Us">
              <IconButton color="inherit" onClick={() => navigate('/contact')}>
                <Phone />
              </IconButton>
            </Tooltip>

            <Tooltip title="Store Location">
              <IconButton color="inherit" onClick={() => navigate('/contact')}>
                <LocationOn />
              </IconButton>
            </Tooltip>

            <Tooltip title="Menu">
              <IconButton
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{ ml: 1 }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: theme.palette.primary.main,
                    fontSize: '0.875rem',
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

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
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

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Toolbar />
        {children}
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 200,
            '& .MuiMenuItem-root': {
              px: 2,
              py: 1,
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
      </Menu>
    </Box>
  );
};

export default HardwareLayout;
