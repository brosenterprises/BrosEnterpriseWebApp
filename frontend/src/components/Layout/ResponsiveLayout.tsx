import React, { useState, useEffect } from 'react';
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
  Collapse,
  Badge,
  Chip,
  Stack,
  Container,
  Slide,
  useScrollTrigger,
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
  Phone,
  LocationOn,
  Close as CloseIcon,
  Brightness4,
  Brightness7,
  ExpandLess,
  ExpandMore,
  Store,
  Schedule,
  WhatsApp,
  Email,
  ArrowUpward,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 280;

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

interface MenuItem {
  text: string;
  icon: React.ReactElement;
  path: string;
  badge?: number;
  color?: string;
  description?: string;
}

const menuItems: MenuItem[] = [
  { 
    text: 'Home', 
    icon: <HomeIcon />, 
    path: '/',
    description: 'Welcome to Bros Enterprises'
  },
  { 
    text: 'Paints', 
    icon: <PaletteIcon />, 
    path: '/paints',
    color: '#FF6B35',
    description: 'Premium interior & exterior paints'
  },
  { 
    text: 'Hardware', 
    icon: <BuildIcon />, 
    path: '/hardware',
    color: '#795548',
    description: 'Construction tools & materials'
  },
  { 
    text: 'Sanitary Ware', 
    icon: <BathtubIcon />, 
    path: '/sanitary',
    color: '#2196F3',
    description: 'Modern bathroom fixtures'
  },
  { 
    text: 'Electricals', 
    icon: <ElectricalIcon />, 
    path: '/electricals',
    color: '#FFC107',
    description: 'Electrical components & safety'
  },
  { 
    text: 'About Us', 
    icon: <InfoIcon />, 
    path: '/about',
    description: 'Our story since 2010'
  },
  { 
    text: 'Contact', 
    icon: <ContactIcon />, 
    path: '/contact',
    description: 'Visit our Gurugram store'
  },
];

// Hide on scroll component for mobile
interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ 
  children, 
  onThemeToggle, 
  isDarkMode = false 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const navigate = useNavigate();
  const location = useLocation();
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
    setExpandedMenu(null);
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
    setExpandedMenu(null);
  };

  const handleExpandMenu = (menuText: string) => {
    setExpandedMenu(expandedMenu === menuText ? null : menuText);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentPage = menuItems.find(item => item.path === location.pathname);

  const drawer = (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'background.paper'
    }}>
      {/* Mobile Header */}
      {isMobile && (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          p: 2, 
          borderBottom: `1px solid ${theme.palette.divider}`,
          bgcolor: 'background.paper'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                fontSize: { xs: '0.875rem', sm: '1rem' },
                fontWeight: 'bold',
              }}
            >
              BE
            </Avatar>
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  lineHeight: 1.2
                }}
              >
                BROS ENTERPRISES
              </Typography>
              <Typography 
                variant="caption" 
                color="text.secondary" 
                sx={{ 
                  fontSize: { xs: '0.65rem', sm: '0.7rem' },
                  display: 'block'
                }}
              >
                Hardware Store • Gurugram
              </Typography>
            </Box>
          </Box>
          <IconButton 
            onClick={handleDrawerClose} 
            sx={{ 
              p: 1,
              '&:hover': {
                bgcolor: 'action.hover'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: 48,
                height: 48,
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}
            >
              BE
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                BROS ENTERPRISES
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                Hardware & Building Materials
              </Typography>
            </Box>
          </Box>
          
          {/* Quick Stats */}
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip 
              icon={<Store />} 
              label="Since 2010" 
              size="small" 
              variant="outlined"
              sx={{ fontSize: '0.7rem' }}
            />
            <Chip 
              icon={<LocationOn />} 
              label="Gurugram" 
              size="small" 
              color="primary"
              sx={{ fontSize: '0.7rem' }}
            />
          </Stack>
        </Box>
      )}
      
      {/* Store Info Card */}
      <Box sx={{ px: 2, py: 1 }}>
        <Box sx={{ 
          p: { xs: 1.5, sm: 2 }, 
          bgcolor: theme.palette.primary.main, 
          borderRadius: 2, 
          color: 'white', 
          mb: 2,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: 600, 
              mb: 1, 
              fontSize: { xs: '0.8rem', sm: '0.875rem' }
            }}
          >
            📍 Located in Gurugram
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block', 
              mb: 1, 
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              opacity: 0.9
            }}
          >
            Your one-stop store for:
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: 0.5,
            fontSize: { xs: '0.65rem', sm: '0.7rem' },
            lineHeight: 1.4
          }}>
            <Typography variant="caption" sx={{ fontSize: 'inherit' }}>• Quality Paints</Typography>
            <Typography variant="caption" sx={{ fontSize: 'inherit' }}>• Hardware Tools</Typography>
            <Typography variant="caption" sx={{ fontSize: 'inherit' }}>• Sanitary Ware</Typography>
            <Typography variant="caption" sx={{ fontSize: 'inherit' }}>• Electricals</Typography>
          </Box>
          
          {/* Decorative element */}
          <Box sx={{
            position: 'absolute',
            top: -10,
            right: -10,
            width: 40,
            height: 40,
            bgcolor: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
          }} />
        </Box>
      </Box>

      <Divider />
      
      {/* Navigation Menu */}
      <List sx={{ px: 1, py: 1, flexGrow: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isExpanded = expandedMenu === item.text;
          
          return (
            <React.Fragment key={item.text}>
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => handleMenuItemClick(item.path)}
                  sx={{
                    borderRadius: 2,
                    bgcolor: isActive ? theme.palette.primary.main : 'transparent',
                    color: isActive ? theme.palette.primary.contrastText : 'inherit',
                    '&:hover': {
                      bgcolor: isActive 
                        ? theme.palette.primary.dark 
                        : 'action.hover',
                    },
                    py: { xs: 1.5, sm: 1.2 },
                    px: 2,
                    minHeight: { xs: 48, sm: 44 },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? theme.palette.primary.contrastText : item.color || 'inherit',
                      minWidth: { xs: 36, sm: 40 },
                      '& svg': {
                        fontSize: { xs: '1.2rem', sm: '1.5rem' }
                      }
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    secondary={!isActive && !isMobile ? item.description : undefined}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      fontSize: { xs: '0.875rem', sm: '0.875rem' },
                    }}
                    secondaryTypographyProps={{
                      fontSize: '0.7rem',
                      color: isActive ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                    }}
                  />
                  {item.badge && (
                    <Badge 
                      badgeContent={item.badge} 
                      color="error" 
                      sx={{ ml: 1 }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>

      {/* Contact Actions */}
      <Box sx={{ px: 2, py: 2, mt: 'auto' }}>
        <Divider sx={{ mb: 2 }} />
        
        {/* Business Hours */}
        <Box sx={{ mb: 2, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
            <Schedule sx={{ fontSize: '0.8rem', mr: 0.5, verticalAlign: 'middle' }} />
            Mon-Sat: 9:00 AM - 8:00 PM
          </Typography>
        </Box>
        
        {/* Action Buttons */}
        <Stack spacing={1}>
          <Button
            variant="contained"
            startIcon={<Phone />}
            size={isMobile ? "medium" : "small"}
            sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.75rem' },
              py: { xs: 1.2, sm: 1 },
              borderRadius: 2,
            }}
            fullWidth
            href="tel:+91"
          >
            Call Store
          </Button>
          
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              startIcon={<WhatsApp />}
              size="small"
              sx={{ 
                fontSize: { xs: '0.75rem', sm: '0.7rem' },
                py: { xs: 1, sm: 0.8 },
                flex: 1,
                borderRadius: 2,
              }}
              href="https://wa.me/91"
            >
              WhatsApp
            </Button>
            <Button
              variant="outlined"
              startIcon={<LocationOn />}
              size="small"
              sx={{ 
                fontSize: { xs: '0.75rem', sm: '0.7rem' },
                py: { xs: 1, sm: 0.8 },
                flex: 1,
                borderRadius: 2,
              }}
              onClick={() => handleMenuItemClick('/contact')}
            >
              Visit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* App Bar */}
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            bgcolor: 'background.paper',
            color: 'text.primary',
            borderBottom: `1px solid ${theme.palette.divider}`,
            backdropFilter: 'blur(8px)',
            backgroundColor: isDarkMode 
              ? 'rgba(30, 30, 30, 0.9)' 
              : 'rgba(255, 255, 255, 0.9)',
          }}
          elevation={0}
        >
          <Toolbar sx={{ 
            minHeight: { xs: '56px', sm: '64px' },
            px: { xs: 2, sm: 3 }
          }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                mr: 2, 
                display: { md: 'none' },
                p: 1,
                borderRadius: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
            
            <Box sx={{ flexGrow: 1 }}>
              <Typography 
                variant="h6" 
                noWrap 
                component="div" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                  lineHeight: 1.2,
                }}
              >
                {currentPage?.text || 'BROS ENTERPRISES'}
              </Typography>
              {currentPage?.description && !isSmallMobile && (
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{ fontSize: '0.75rem' }}
                >
                  {currentPage.description}
                </Typography>
              )}
            </Box>

            {/* Header Actions */}
            <Stack direction="row" spacing={0.5} alignItems="center">
              {!isSmallMobile && (
                <Tooltip title="Toggle theme">
                  <IconButton 
                    onClick={onThemeToggle} 
                    color="inherit" 
                    sx={{ 
                      p: 1,
                      borderRadius: 2,
                    }}
                  >
                    {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title="Contact Us">
                <IconButton 
                  color="inherit" 
                  onClick={() => navigate('/contact')}
                  sx={{ 
                    p: 1,
                    borderRadius: 2,
                  }}
                >
                  <Phone />
                </IconButton>
              </Tooltip>

              <Tooltip title="Store Location">
                <IconButton 
                  color="inherit" 
                  onClick={() => navigate('/contact')}
                  sx={{ 
                    p: 1,
                    borderRadius: 2,
                  }}
                >
                  <LocationOn />
                </IconButton>
              </Tooltip>

              <Tooltip title="Menu">
                <IconButton
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{ 
                    ml: 0.5, 
                    p: 1,
                    borderRadius: 2,
                  }}
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
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

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
              borderRadius: 0,
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
              borderRight: `1px solid ${theme.palette.divider}`,
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
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }} />
        <Container 
          maxWidth="xl" 
          sx={{ 
            flexGrow: 1,
            py: { xs: 2, sm: 3 },
            px: { xs: 2, sm: 3 },
          }}
        >
          {children}
        </Container>
      </Box>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 8,
          sx: {
            mt: 1.5,
            minWidth: { xs: 200, sm: 220 },
            borderRadius: 2,
            '& .MuiMenuItem-root': {
              px: 2,
              py: { xs: 1.5, sm: 1.2 },
              fontSize: { xs: '0.875rem', sm: '0.875rem' },
              borderRadius: 1,
              mx: 1,
              my: 0.5,
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
          Contact & Location
        </MenuItem>
        <MenuItem component="a" href="tel:+91">
          <ListItemIcon>
            <Phone fontSize="small" />
          </ListItemIcon>
          Call Store
        </MenuItem>
        <MenuItem component="a" href="https://wa.me/91">
          <ListItemIcon>
            <WhatsApp fontSize="small" />
          </ListItemIcon>
          WhatsApp
        </MenuItem>
        {isSmallMobile && (
          <>
            <Divider sx={{ my: 1 }} />
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
            boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)',
          }}
          href="tel:+91"
        >
          <Phone />
        </Fab>
      )}

      {/* Scroll to Top FAB */}
      {showScrollTop && (
        <Fab
          size="small"
          color="secondary"
          aria-label="scroll to top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: isMobile ? 80 : 16,
            right: 16,
            zIndex: 999,
            opacity: 0.8,
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <ArrowUpward />
        </Fab>
      )}
    </Box>
  );
};

export default ResponsiveLayout;
